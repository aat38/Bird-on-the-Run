#### Steps
- Create a database for this project in your MongoDB instance. (Assuming you completed Activity 9, to setup MongoDB)
- Connect your project to the MongoDB database you created in Activity 9. Make sure to add mongoose to your list of dependencies in the package.json file. The dependencies section should now look like: "dependencies": { "express": "^4.16.4", "mongoose": "^5.7.7", "ejs": "^2.7.1" },
- Create a schema using Mongoose that models the different mounts and their properties. For example, if you are modeling students taking courses at a university you might have a data model for students and another data model for classes. Students would have various properties like name, degree program, year in the program, and a list of connections to classes. Classes would have titles, meeting times, instructors, etc.
- Update your CREATE/GET operation to query your MongoDB, using Mongoose.
- Use Mongoose to implement the Create, Update and Delete operations. See the Mongoose documentation (Links to an external site.) for a complete list of methods & operations available.
- In addition to the 6 HTTP operations which include one of: HTTP GET, POST, PUT and DELETE (from part A) -- you should implement ONE more advanced operation of your choice, such as: delete many, insert many, update many, retrieve a list of items with filter options, etc. Anything beyond the basic single CRUD operations will suffice here. (e.g GET /id, DELETE /id) If you have questions, ASK.
- Make sure your Express routes that map endpoints to handler functions return appropriate values or responses. For operations that modify a resource (PUT, PATCH, POST) you should provide proper error handling and return an HTTP SUCCESS or ERROR code. These operations should correctly create or update your resources in the database.
- Since we are using EJS, you are expected to pass & display variables. E.g. On a GET request, nicely format and display the data returned (e.g. course title and description).
- Map and render the response for each HTTP operation to an appropriate view template. (e.g. the view template for a student will be different for a view template for a course.)

#### Expectations
- At least six endpoints for at least 2 different resources (e.g. GET /student, POST /student, GET /buildings).
- For our purposes, an endpoint would be a URL and an HTTP method. So if you implement GET and POST methods for 3 URLS (/student, /student/:id, and /courses) you will have 6 endpoints.
- This means you should have a minimum of 6 Express route functions for HTTP operations (HTTP GET, POST, PUT and DELETE)
- At least one should have a sub-collection (like /student/:id/courses). This also implies that you should have at least one endpoint that has path parameters.
- Document the API with the endpoints, parameters, payloads and response codes in the README.md.
- Proper error handling and response code when a request doesn’t conform to the API.
- All data will be transferred in the JSON data format.
- Populate your MongoDB with some data to support your operations, on initialization. In other words, when I go to your app, there should already be data to "play around with."
- Make an endpoint that lists all all of your resources in your "database" (JSON file).  For example, "GET /student" would return a JSON list of all the student objects in your application and "GET /courses" would provide a list of all the course objects. You should have at least 6 instances of resources in your application, they can be of any types.


### Resources
- [pass json info from ejs var](https://stackoverflow.com/questions/13788314/express-and-ejs-to-render-a-json)