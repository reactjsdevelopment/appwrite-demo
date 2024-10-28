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

/v1/graphql
https://cloud.appwrite.io/v1/locale
https://cloud.appwrite.io/v1/users
https://cloud.appwrite.io/console/
https://appwrite.io/docs
```

You're now ready to start developing your React application with Vite! Enjoy the process, explore the features, and have fun building! 🎊
