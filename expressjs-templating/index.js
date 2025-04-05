import express from "express";
import handlebars from "express-handlebars";

const app = express();

const cats = [
  {
    name: "Luna",
    isStar: true,
    description:
      "Playful and curious, Luna loves climbing and exploring new heights.",
    imageUrl:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
    breed: "Maine Coon",
  },
  {
    name: "Simba",
    description: "A regal feline with a calm demeanor and a loud purr.",
    imageUrl:
      "https://media.istockphoto.com/id/1342046007/photo/red-and-white-cat-running.webp?a=1&b=1&s=612x612&w=0&k=20&c=7au1EvGMblAKHxka9Gm2xishyGJqJkC9UrFXRbTxHiY=",
    breed: "British Shorthair",
  },
  {
    name: "Mochi",
    description:
      "Sweet and fluffy, Mochi enjoys napping in sunbeams and cuddles.",
    imageUrl:
      "https://media.istockphoto.com/id/2162999918/photo/beautiful-tabby-cat-in-a-garden.webp?a=1&b=1&s=612x612&w=0&k=20&c=EDIMNe97s4buscmkHsZ6os4V0Af2BbwI9ZDq9pqpk2A=",
    breed: "Ragdoll",
  },
  {
    name: "Shadow",
    description:
      "Quiet and stealthy, Shadow loves hiding in dark corners and watching from afar.",
    imageUrl:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww",
    breed: "Bombay",
  },
  {
    name: "Ziggy",
    description:
      "Energetic and a bit mischievous, Ziggy will chase anything that moves.",
    imageUrl:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww",
    breed: "Bengal",
  },
];

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
  res.render("home", { cats });
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
