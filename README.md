# API-NodeJS-Upload-Arquivos

## Principais recursos

    - Upload de arquivos local e Amazon S3
    - Estrutura de armazenamento no MongoDB 
    - Variaveis de ambiente

## Endpoints

**Rota para fazer upload de um arquivo.**

    POST {{ base_url }}/posts

MULTIPART FORM

file: {{ arquivo }}

RESPOSTA

``` json
{
  "post": {
    "_id": "5d965253a564712e4cc12b47",
    "name": "11900066_696064957166313_1743941943403730326_n.jpg",
    "size": 165869,
    "key": "20664b90747c7a77426ea604ad047963-11900066_696064957166313_1743941943403730326_n.jpg",
    "url": "https://upload-arquivos-nodejs.s3.amazonaws.com/20664b90747c7a77426ea604ad047963-11900066_696064957166313_1743941943403730326_n.jpg",
    "createdAt": "2019-10-03T19:56:03.767Z",
    "__v": 0
  }
}
```

**Rota para listar todos os uploads realizados.**

    GET {{ base_url }}/posts

``` json
{
  "posts": [
    {
      "_id": "5d964a3e196977425c11aba8",
      "name": "11900066_696064957166313_1743941943403730326_n.jpg",
      "size": 165869,
      "key": "634a1d2f9165194da9a9ad9e1616d2f7-11900066_696064957166313_1743941943403730326_n.jpg",
      "url": "https://upload-arquivos-nodejs.s3.amazonaws.com/20664b90747c7a77426ea604ad047963-11900066_696064957166313_1743941943403730326_n.jpg",
      "createdAt": "2019-10-03T19:21:34.918Z",
      "__v": 0
    },
    {
      "_id": "5d965253a564712e4cc12b47",
      "name": "11900066_696064957166313_1743941943403730326_n.jpg",
      "size": 165869,
      "key": "20664b90747c7a77426ea604ad047963-11900066_696064957166313_1743941943403730326_n.jpg",
      "url": "https://upload-arquivos-nodejs.s3.amazonaws.com/20664b90747c7a77426ea604ad047963-11900066_696064957166313_1743941943403730326_n.jpg",
      "createdAt": "2019-10-03T19:56:03.767Z",
      "__v": 0
    }
  ]
}
```

