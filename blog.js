import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// create
app.get("/", (req, res) => {

  res.render("create.ejs");
});
// Home
app.post("/view", (req,res) => {
    const responseData = {
    title: req.body["title"],
    content: req.body["content"],
  }
  const date = new Date();
  const postDate = date.toISOString().slice(0, 10);
    res.render("view.ejs", {title : responseData.title, content: responseData.content, date: postDate});
});
// Manage
app.get("/manage", (req,res) => {
    
    res.render("manage.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});