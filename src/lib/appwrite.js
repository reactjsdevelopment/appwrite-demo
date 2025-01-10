import { Client, Account, Graphql, Storage, Databases, Query} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject(''); // Replace with your project ID 64e5e6f0d9fdb10caf53

    // Realtime api - accessing the server -  listen to any Appwrite events in realtime using the subscribe 
    client.subscribe('files', response => {
        if(response.events.includes('buckets.*.files.*.create')) {
            // Log when a new file is uploaded
            console.log(response.payload);
        }
    });

    client.subscribe('account', response => {
        // Callback will be executed on all account events.
        console.log(response);
    });

    client.subscribe(['collections.A.documents.A', 'files'], response => {
        // Callback will be executed on changes for documents A and all files.
        console.log(response);
    });

    client.subscribe('files', response => {
        // Callback will be executed on changes for all files.
        console.log(response);
    });

export const account = new Account(client);
export const graphql = new Graphql(client);

export { ID } from 'appwrite';

  // trigger graphql query
  //   query GetAccount {
  //     accountGet {
  //         _id
  //         email
  //     }
  // }

//   https://appwrite.io/docs/references/cloud/client-web/storage#storageListFiles
// const storage = new Storage(client);

// const promise = storage.createFile(
//     '671b62670037d26e6c4d',
//     ID.unique(),
//     document.getElementById('uploader').files[0]
// );

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });


// const result = storage.getFileDownload('[BUCKET_ID]', '[FILE_ID]');

// console.log(result); // Resource URL


// const databases = new Databases(client);

// databases.listDocuments(
//     '<DATABASE_ID>',
//     '[COLLECTION_ID]',
//     [
//         Query.equal('title', ['Avatar', 'Lord of the Rings']),
//         Query.greaterThan('year', 1999)
//     ]
// );
