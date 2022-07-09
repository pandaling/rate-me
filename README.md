## What is this app

This is a very very simple web app for rating. More to front end/UI task. Regarding the backend part, will be added in the future.

---


## Main workflow explanation
1. Everytime user submit a rating, a data with random user will save to db.
2. Generate report, the data populated in the graph are fake BUT the trend data (bottom part) is based on user interaction.
---


The following libraries and tools are used to build this application.

- backend
```
Node
Express
Typescript
MongoDB
```

- front end
```
React
Typescript
```

## Preparing

**NOTE**: Expected you `NodeJS` and `MongoDB` has been installed in your computer.

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

3. Set the mongodb path to your location in the file `config/.env.dev`.


## How to start

Run the Application.

```bash
# Start the service (both backend and frontend) with the command below.
$ npm run watch

# NOTE: The react app runs on port 3000 while the node server runs on port 5000
```

Upon successful run the service, it will redirect you to http://localhost:3000/.


## Testing

A script is configured named **test** for running Jest.

1. 

```bash
# Run the following command to test the API
$ npm run test
```