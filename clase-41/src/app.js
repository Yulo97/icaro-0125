const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routes");
const viewsRouter = require("./routes/views.routes");

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log("Server UP", PORT));

// Middlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser("my-secret"));
app.use(
  sessions({
    secret: "miClaveSecreta",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 60000,
    },
  })
);

// Router
app.use("/auth", authRouter);
app.use("/", viewsRouter);

app.set("view engine", "ejs");
app.set("views", "./src/views");
