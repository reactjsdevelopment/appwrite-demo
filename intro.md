# 🚀 React + Vite Template

Welcome to your **React + Vite** project! This template sets up a minimal environment for developing React applications quickly and efficiently, featuring Hot Module Replacement (HMR) for a smooth development experience.

---

## 📦 **What are the Official Plugins?**

To enhance your project, you have two official plugins available:

1. **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: 
   - Uses **Babel** to enable Fast Refresh, which means your changes will reflect in real time without losing your component state.
   
2. **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: 
   - Utilizes **SWC**, a super-fast compiler, to achieve even quicker refresh times.

---

## 🛠 **Getting Started**

### **Step 1: Create Your Project**

To create a new React project using Vite, open your terminal and run the following commands:

```bash
# Create a new project with the React template
npm create vite@latest appwrite-demo -- --template react

# Navigate into your project directory
cd appwrite-demo

# Start the development server and open your project in a browser on port 300
npm run dev -- --open --port 300

# Install the Appwrite SDK
npm install appwrite@14.0.1
```

### **Step 2: Set Up Your Project ID**

APIs
https://cloud.appwrite.io/v1
https://cloud.appwrite.io/v1/account - register - POST/GET
https://cloud.appwrite.io/v1/account/sessions/email - session create login -POST
https://cloud.appwrite.io/v1/account/sessions/current - logout - DELETE
https://cloud.appwrite.io/v1/locale
https://cloud.appwrite.io/v1/users
To interact with the Appwrite services, you will need a **Project ID**. Here’s how to obtain one:

1. **Create an Organization**: Go to the Appwrite console and create an organization.
2. **Create a Project**: Under the organization, create a new project.

You can manage your organization and projects at the following link:
- [Appwrite Cloud Console](https://cloud.appwrite.io/v1)

---

## 📄 **Important API Endpoints**

To work with Appwrite, you'll need to use specific API endpoints. Here are some key ones to get started:

### **1. User Account Management**

- **Register a New Account**: 
  - **Endpoint**: `POST /v1/account`
  
- **Create a Session with Email**:
  - **Endpoint**: `POST /v1/account/sessions/email`
  - **Request Example**:
    ```http
    POST /v1/account/sessions/email
    Content-Type: application/json
    X-Appwrite-Project: [PROJECT_ID]

    {
      "email": "example@email.com",
      "password": "password"
    }
    ```

### **2. Session Management**

- **Get Current Session**:
  - **Endpoint**: `GET /v1/account/sessions/current`
  
- **Logout**:
  - **Endpoint**: `DELETE /v1/account/sessions/current`

### **3. Database Operations**

- **Fetch Documents**:
  - **Endpoint**: 
    ```http
    GET /v1/databases/{databaseId}/collections/{collectionId}/documents
    Content-Type: application/json
    X-Appwrite-Project: [PROJECT_ID]
    X-Appwrite-Key: [API_KEY]
    ```

### **4. File Storage Operations**

- **Upload Files**:
  - **Endpoint**: 
    ```http
    POST /v1/storage/buckets/default/files
    Content-Type: multipart/form-data; boundary=----WebKitFormBoundary
    X-Appwrite-Project: [PROJECT_ID]
    ```

### **5. Preview Uploaded Files**:
- Use the following HTML to display a preview of your uploaded file:
  ```html
  <img src="[ENDPOINT]/v1/storage/buckets/[BUCKET_ID]/files/[FILE_ID]/preview?project=[PROJECT_ID]" />
  ```

---

## 🌐 **Helpful Links**

- [Appwrite Quick Starts for React](https://appwrite.io/docs/quick-starts/react)
- [Appwrite Documentation](https://appwrite.io/docs/references/cloud/client-web/account)

---

## 🎉 **Run Your Project Locally**

Once everything is set up, you can run your application. Open your browser and navigate to:

```http
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
/v1/graphql
https://cloud.appwrite.io/v1/locale
https://cloud.appwrite.io/console/
https://appwrite.io/docs
```

You're now ready to start developing your React application with Vite! Enjoy the process, explore the features, and have fun building! 🎊

- **Appwrite:** As the backend service for secure data management, including databases and authentication.

### Usage of Appwrite

- **Appwrite Authentication:** Manages user authentication and session handling securely, allowing users to log in with options like email/password, SMS, or OAuth providers such as Google and GitHub.

- **Appwrite SDK:** Facilitates secure communication with the Appwrite API, ensuring efficient user authentication and session management.

- **Appwrite Databases:** Creates and stores login information in a `manager` collection, securely managing user data such as passwords and transaction history.

- **Appwrite Storage:** Manages file uploads, allowing users to securely store and share project-related documents and images.

- **Appwrite Real-Time API:** Ensures instant updates across all connected users whenever new data is added to the database, enhancing collaboration.

- **Appwrite Functions:** Enables serverless backend operations, ensuring scalability and security.

- **Appwrite Notifications:** Facilitates sending and scheduling of email, SMS, and push notifications.

- **Appwrite Users:** Allows management of project users, including searching, blocking, and editing preferences.