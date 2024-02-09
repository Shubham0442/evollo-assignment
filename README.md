# Basic Content Submission and Management System
This application is a React-based user interface with a NodeJs based server, consisting of three authentication where authenticated users can add the content.

## Features
### Login and Signup
- Having the email and password fields forlogin.
- Users Can first signup with required details and after that can login to add the individual content.

### Content Upload and display
- API endpoints: /content?id={userId} and /content/upload.
- /content/upload: allows authenticated users to add new content, creating a new entry in the database.
- /content?id={userId}: Allows autheiticated users to get the uploaded content data.

### Technologies Used
- ReactJS for the frontend.
- Tailwind CSS - Open-source UI library for making user interface.
- Redux - Open-source state management library for managing application state.
- MongoDB for storing data.
- NodeJs and ExpressJs for API development.
- bcrypt - Open-source library for hashing the password
- jsonwebtoken - Open-source library for generating unique token after user login
- cloudinary - Cloud platform for hosting an image file uploaded

### Installation
- Clone the repository
```bash
  git clone https://github.com/Shubham0442/evallo-assignment
```
#### For frontend:
- Navigate to the frontend folder
```bash
cd client/
```
- Install dependencies
```bash
npm install
```
- Run the application
```bash
npm start
```
#### For Backend:
- Navigate to the backend folder
```bash
cd server/
```
- Install dependencies
```bash
npm install
```
- Run the application
```bash
npm run dev
```

### API Endpoints

#### Get Content
- Endpoint: /content?id={id of authenticated user}
- Method: GET
- Description: gets data of content for respective user.
- Parameters:
  - query: id as the userId of authenticated user
  - headers: token generated after authetication
- Returns: { content: Array of content of respective user }

#### Add Content
- Endpoint: /content/upload
- Method: POST
- Description: adds new content for the respective user.
- Parameters:
   - body: title, createdAt, description, userId and fileurl
   - headers: token generated after authetication
- Returns: { success: true, msg: "Content uploaded successfully" }

#### Signup
- Endpoint: /signup
- Method: POST
- Parameters:
    - body: firstname, lastname, email, password
- Description: adds the new user
- Returns: { msg: "signup successful" }

#### Login
- Endpoint: /login
- Method: POST
- Parameters:
    - body: email, password
- Description: Authenticates the details given
- Returns: { msg: "login successful", token: token from jsonwebtoken, userData: object with details of user }

### Database
- MongoDB
- User Schema:
```bash
{ firstname: String, lastname: String, email: String, password: String } 
```

- Count Schema:
```bash
{ title: type: String, description: type: String, contentFileUrl: type: String, userId: type: String, createdAt: type: String }
```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` - To run application in local

`KEY` - secret key for jsonwentoken

`mongodburl` - Mongo Atlus URL 

`cloud_name`- Generated by cloudinary

`api_key` - Generated by cloudinary

`api_secret` - Generated by cloudinary

### Deployment
- [frontend](https://evallo-assignment.netlify.app/)
- [backend](https://evallo-server.onrender.com/)