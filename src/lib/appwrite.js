import { Client, Account, Graphql} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject(''); // Replace with your project ID 64e5e6f0d9fdb10caf53

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

    const unsubscribe = client.subscribe('files', response => {
        // Callback will be executed on changes for all files.
        console.log(response);
    });
export const account = new Account(client);
export const graphql = new Graphql(client);
export { ID } from 'appwrite';

