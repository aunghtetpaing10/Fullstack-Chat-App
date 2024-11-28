
const express = require("express");
const cors = require("cors");
const app = express();

// ...existing code...

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// ...existing code...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});