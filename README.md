## Local Setup
- Clone the repository.
```
git clone https://github.com/Yaxhveer/React-ISRO-STATS-API.git
cd React-ISRO-STATS-API
```
- Create a `.env` file with reference to the `.env.example`
```
PORT=8000
POSTGRES_USER=postgres
POSTGRES_DATABASE=database_name
POSTGRES_PASSWORD=database_pass
POSTGRES_HOST=localhost
```
- Install the dependency
```
npm install
```

- Setup the databse
```
node setupDatabase.js
```
- Start the server
```
node server
```

- Install the dependency and start the fronend.
```
cd frontend
npm install
npm run dev
```