# Sequelize Horse API
This API allows you to perform CRUD operations on a database of horses!

## Endpoints
The following section provides information on the available endpoints for this API.

### Create a Horse

**Method**: ```POST```

**Endpoint**: ```/api/horses```

**Description**: This endpoint creates a new horse with the provided information in the request body.

Request Body:
```
{
  "barn_name": "string",
  "registered_name": "string",
  "age": integer,
  "breed": "string",
  "sex": "string",
  "status": "string"

}
```

Response:
```
{
  "id": integer,
  "barn_name": "string",
  "registered_name": "string",
  "age": integer,
  "breed": "string",
  "sex": "string",
  "status": "string"
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Get All Horses

**Method**: GET

**Endpoint**: ```/api/horses```

**Description**: This endpoint retrieves all the horses stored in the database.

Response:
```
[
  {
    "id": integer,
    "barn_name": "string",
    "registered_name": "string",
    "age": integer,
    "breed": "string",
    "sex": "string",
    "status": "string"
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
]
```

### Update a Horse

**Method**: ```PUT```

**Endpoint**: ```/api/horses/:id```

**Description**: This endpoint updates the horse with the specified id using the information in the request body.

Request Body:
```
{
  "barn_name": "string",
  "registered_name": "string",
  "age": integer,
  "breed": "string",
  "sex": "string",
  "status": "string"
}
```

Response:
```
{
  "id": integer,
  "barn_name": "string",
  "registered_name": "string",
  "age": integer,
  "breed": "string",
  "sex": "string",
  "status": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Delete a Horse

**Method**: ```DELETE```

**Endpoint**: ```/api/horses/:id```

**Description**: This endpoint deletes the horse with the specified id from the database and responds with the number of records removed.

Response:
```
1

```
