# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Vite is now the recommended method way of creating react projects
npm create vite@latest appwrite-demo -- --template react && cd appwrite-demo
npm run dev -- --open --port 300
npm install appwrite@14.0.1

You need projectID to work on this project. Create a organization and under that create a project.

APIs
https://cloud.appwrite.io/v1
https://cloud.appwrite.io/v1/account - register - POST/GET
https://cloud.appwrite.io/v1/account/sessions/email - session create login -POST
https://cloud.appwrite.io/v1/account/sessions/current - logout - DELETE
https://cloud.appwrite.io/v1/locale
https://cloud.appwrite.io/v1/users

https://appwrite.io/docs/references/cloud/client-web/account

POST /v1/account/sessions/email HTTP/1.1
Content-Type: application/json
X-Appwrite-Project: [PROJECT_ID]

{
  "email": "example@email.com",
  "password": "password"
}

GET /v1/databases/{databaseId}/collections/{collectionId}/documents HTTP/1.1
Content-Type: application/json
X-Appwrite-Project: [PROJECT_ID]
X-Appwrite-Key: [API_KEY]

GET /v1/account HTTP/1.1
Content-Type: application/json
X-Appwrite-Project: [PROJECT_ID]
X-Appwrite-JWT: [TOKEN]

POST /v1/storage/buckets/default/files HTTP/1.1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundarye0m6iNBQNHlzTpVM
X-Appwrite-Project: demo-project
Content-Range: bytes 10485760-12582912/12582912
X-Appwrite-ID: 6369b0bc1dcf4ff59051

------WebKitFormBoundarye0m6iNBQNHlzTpVM
Content-Disposition: form-data; name="fileId"

unique()
------WebKitFormBoundarye0m6iNBQNHlzTpVM
Content-Disposition: form-data; name="file"; filename="file.txt"
Content-Type: application/octet-stream

[CHUNKED-DATA]
------WebKitFormBoundarye0m6iNBQNHlzTpVM
Content-Disposition: form-data; name="permissions[]"

read("user:627a958ded6424a98a9f")
------WebKitFormBoundarye0m6iNBQNHlzTpVM--
<img src="[ENDPOINT]/v1/storage/buckets/[BUCKET_ID]/files/[FILE_ID]/preview?project=[PROJECT_ID]"/>

/v1/graphql

https://appwrite.io/docs/quick-starts/react
https://cloud.appwrite.io/console/organization-66fc0d80002c44c95c3c
https://cloud.appwrite.io/console/project-6711634f0020cdd71c99/auth

http://localhost:300/

npm run build


- **Appwrite Authentication:** Used to authenticate users via Appwrite credentials and manage login sessions securely. handling user sign-ups, and session management securely. enabling secure login and account management. handle user registration. This ensured that only authorized team members could access project-specific information.,, allowing users to manage their accounts effortlessly with options for OAuth providers like Google, GitHub, and more. find the active session details of the user. For Security we can add that. Secure login with multiple methods, including email/password, SMS, and OAuth 

- **Appwrite  SDK:** Facilitates communication with the Appwrite API, enabling secure and efficient user authentication and session management  enabling secure login and user session management. 

- **Appwrite Databases**:  
  Used to create and store list of logins in the `manager` collection, including attributes such as `password_id`, `email_id`, and `description`. Manages and stores user data securely with robust backend support. store the details of all passwords in the backend.  store the user data and transaction history of the users.    manages user data, including code snippets, project files, and collaboration history. It ensures that user data is securely stored and can be retrieved or updated instantly. Appwrite queries Used to filter the schemes based on the Input. Store, query, and manage data with a scalable database 

- **Appwrite Storage**: 
 - for storing any images in the database. for file management within projects. This allowed team members to easily upload, store, and share project-related documents and assets.  handle the creation, storage, and retrieval of project files. Users can upload, edit, and save files, which are securely stored on Appwrite’s cloud infrastructure. Utilized for storing and serving content. Used to securely store and retrieve important data. Upload and manage files with advanced compression, encryption, and image transformations 

- **Appwrite Real-Time API**:  
  Utilized to ensure that things are updated in real time across all connected users as soon as a new thing is added to the database. real-time database functionality enables instant synchronization of code changes, ensuring that all users collaborating on a project see updates in real-time. Respond to server events in real-time 
 
- **Appwrite Functions**
To handle backend connectivity. Deploy and scale serverless functions in secure, isolated runtimes.

- **Appwrite Notifications**
Send and schedule email, SMS, and push notifications 

- **Appwrite Users**
Manage project users, including searching, blocking, viewing info, and editing preferences.
