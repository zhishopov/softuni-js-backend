import express from "express";

const app = express();

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
  res.send("<h1>Home Page</h1>");
});

app.get("/cats", (req, res) => {
  res.send("<h1>Cats Page</h1>");
});

app.get("/cats/:catName", (req, res) => {
  const catName = req.params.catName;

  res.send(`<h1>GLORIOUS: ${catName}`);
});

app.get("/auth/profile", (req, res) => {
  res.send("<h1>Profile Page</h1>");
});

app.listen(2000, () =>
  console.log("Server is listening on http://localhost:2000...")
);
