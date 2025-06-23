# How to Get a Valid MongoDB Atlas Connection String (MONGODB_URI)

1. Go to https://www.mongodb.com/cloud/atlas and log in or create a free account.

2. Create a new cluster (free tier available).

3. In the cluster dashboard, click "Connect".

4. Choose "Connect your application".

5. Copy the connection string provided. It will look like:
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

6. Replace `<username>`, `<password>`, and `myFirstDatabase` with your actual MongoDB username, password, and database name.

7. Paste this full connection string into the `backend/.env` file as the value for `MONGODB_URI`.

Example:
```
MONGODB_URI=mongodb+srv://myUser:myPassword@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
```

8. Save the `.env` file and restart the backend server.

If you want, I can help you update the `.env` file with your connection string.
