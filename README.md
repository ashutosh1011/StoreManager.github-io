# Store Manager API

Warehouse Manager API is a RESTful API project built using `Node.js`, `Express.js`, and `MongoDB`. It provides basic `CRUD` (Create, Read, Update, Delete) operations for efficient management of warehouse data.

## Features

- *Create* : Easily create new warehouse entries by sending POST requests to the `/products` endpoint.
- *Read*   : Retrieve warehouse data by making GET requests to the `/` endpoint or retrieve specific warehouse details by accessing the `/products/:id` endpoint.
- *Update* : Update existing warehouse entries using PUT requests to the `/products/:id` endpoint and specifying the necessary parameters.
- *Delete* : Delete warehouse entries by sending DELETE requests to the `/products/:id` endpoint.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies.
4. Set up the MongoDB connection:
- Make sure you have MongoDB installed and running.
- Update the MongoDB connection details in the variable `connection_string` in `server.js` file. 
5. Start the server.

6. The API will be accessible at `http://localhost:3000`. You can use a tool like Postman / Thunder_Client extention in VS Code to test the endpoints.

## Author

- Ashutosh Tripathi (https://github.com/ashutosh1011)
