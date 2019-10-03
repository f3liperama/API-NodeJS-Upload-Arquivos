const mongoose = require('mongoose');
const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const s3 = new aws.S3();

const PostSchema = new mongoose.Schema({
    name: {
        type: String,        
    },
    size: {
        type: Number,
    },
    key: {
        type: String,
    },
    url: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


PostSchema.pre('save', function() {
    if (!this.url) {
        this.url = `${process.env.APP_URL}/files/${this.key}`; 
    }
});

PostSchema.pre('remove', function() {    
    console.log(this.key);
    if (process.env.STORAGE_TYPE === 's3') {        
        return s3.deleteObject({
            Bucket: 'upload-arquivos-nodejs',
            Key: this.key,
        }).promise();
    } else {
        return promisify(fs.unlink)(
            path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', this.key)
        );
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;


