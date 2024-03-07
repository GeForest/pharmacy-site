# Pharmacy-site
An online pharmacy store where you can choose a pharmacy and load the products of the selected pharmacy. It includes functionality such as sorting by prices and favorites. There is a shopping cart where you can add selected products. In the shopping cart, you can add/remove quantities and delete as needed. The cart also contains a form that needs to be filled out to submit an order for processing. The products in the cart have local storage.

## Running the Application

### Backend

1. Navigate to the backend folder:

    cd backend

2. Install dependencies:

    npm install

3. Start the server:

    node server.js

The server will be available at http://localhost:5000.

### Frontend

1. Navigate to the frontend folder:

    cd frontend

2. Install dependencies:

    npm install

3. Start the application:

    npm start

The application will be available at http://localhost:3000.

### MongoDB

1. Install MongoDB: Follow the official MongoDB installation guide.

2. Start MongoDB: Run the following command to start the MongoDB server:

    mongod

3. Enter on mongoDB:

    mongosh

4.  Create user Admin and others:

    use admin
    db.createUser({
    user: "yourAdminUser",
    pwd: "yourAdminPassword",
    roles: ["root"]
})

5. Shutdown server:

    use admin
    db.shutdownServer()

6. Start MongoDB with auth:

    mongod --auth --dbpath your-path-to-db --bind_ip_all

7. Enter on mongoDB:

    mongosh -u yourAdminUser -p your-password --authenticationDatabase admin

