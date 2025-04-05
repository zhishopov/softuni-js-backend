import express from "express";
import handlebars from "express-handlebars";

const app = express();

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");

// Configure Static Middleware
app.use(express.static("public"));

// Application Middleware
app.use("/auth", (req, res, next) => {
  console.log(req.url);

  next();
});

// Path Middleware
app.use("/auth", (req, res, next) => {
  if (Math.random() < 0.5) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
});

// Route Middleware
app.get(
  "/users",
  (req, res, next) => {
    console.log("Middlware works");

    next();
  },
  (req, res) => {
    res.send("<h1>Users Page</h1>");
  }
);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/add-cat", (req, res) => {
  res.render("addCat");
});

app.get("/cats", (req, res) => {
  res.send("<h1>Cats Page</h1>");
});

app.get("/cats/:catName", (req, res) => {
  const catName = req.params.catName;

  res.send(`<h1>GLORIOUS: ${catName}`);
  res.send("./public/cat.avif");
});

app.get("/auth/profile", (req, res) => {
  res.send("<h1>Profile Page</h1>");
});

app.listen(2000, () =>
  console.log("Server is listening on http://localhost:2000...")
);
