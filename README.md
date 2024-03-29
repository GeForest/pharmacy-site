# Pharmacy-site
An online pharmacy store where you can choose a pharmacy and load the products of the selected pharmacy. It includes functionality such as sorting by prices and favorites. There is a shopping cart where you can add selected products. In the shopping cart, you can add/remove quantities and delete as needed. The cart also contains a form that needs to be filled out to submit an order for processing. The products in the cart have local storage.

## Running the application locally

### Frontend

1. Navigate to the frontend folder:

    cd frontend

2. Install dependencies:

    npm run build

### Backend

1. Navigate to the backend folder:

    cd backend

2. Install dependencies:

    npm install

3. Start the server:

    npm start

The server and application will be available at http://localhost:8080.

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


## Deploying applications to Netlify

### Function for Netlify

1. Create a netlify folder in the root of your project and create a functions folder in it netlify/functions

2. Create a file handler.js inside netlify/functions/ 

    Write the logic that will process your requests, I used express for node and mongoose for mongoDB

3. Create a file in the root of the netlify.toml project

    build configuration how your application will be deployed.
    plugins configuration is needed for netlify to install dependencies automatically.
    [build]
    base = ""
    command = "cd frontend && npm install && npm run build"
    publish = "frontend/build"
    functions = "netlify/functions"

    [[plugins]]
    package = "@netlify/plugin-functions-install-core"

    [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200

4. There should be a package.json file at the root of your project, which should contain the dependencies needed to run your application.

### Go to the Netlify website and import the selected project from GitHub and add your environment changes, you should have a netlify.toml file in the root of the project, it configures deployment to Netlify