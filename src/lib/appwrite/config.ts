import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL || 'https://cloud.appwrite.io/v1',
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID || '657564573941924ae844',
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID || '6579c6ac7bc2b7020cd9',
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID || '6579c654f0d3dccafa54',
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID || '6579c75c364c217efb69',
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID || '6579c6f0f14606b1b4ba',
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID || '6579c77fd61a38404728',
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
