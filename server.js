import app from "./backend/app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;

// starting the server
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})