## What is this app

This is a very very simple web app for rating. More to front end/UI task. Regarding the backend part, will be added in the future.


The following libraries and tools are used to build this application.

- backend
```
Node
Express
```

- front end
```
React
Typescript
```

## Preparing

**NOTE**: Expected you `nodejs` has been installed in your computer.

Clone the project folder and the following steps are required to install dependencies for both client and server:

1. Install the dependencies for the server.

```bash
# navigate to the project folder and run the command below
$ npm install
```

2. Install the dependencies for the client.

```bash
# navigate to the client folder and install the dependencies
$ cd ./client
$ npm install
```

## How to start

Run the Application.

```bash
# Go back to the previous directory by doing the following
$ cd ..

# Start the service (both backend and frontend) with the command below.
$ npm run dev

# NOTE: the react app runs on port 3000 while the node server runs on port 5000
```

Upon successful run the service, it will redirect you to http://localhost:3000/.


## Testing

A script is configured named **test** for running Jest.

1. 

```bash
# Run the following command to test the API
$ npm run test
```