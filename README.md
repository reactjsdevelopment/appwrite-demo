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

