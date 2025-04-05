import express from "express";

const app = express();

// Middleware
app.use("/auth", (req, res, next) => {
  if (Math.random() < 0.5) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
});

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

app.get("/auth", (req, res) => {
  res.redirect("/");
});

app.listen(2000, () =>
  console.log("Server is listening on http://localhost:2000...")
);
