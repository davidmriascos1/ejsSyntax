import express from "express";
const app = express();
const port = 3000;
// app.get bring to the home page ("/") the data we want the client see
app.get("/", (req, res) => {
  //between app.get and res.render, we created a variable const to hold the data we what to render or use in the EJS file
  const data = {
    //Writing title in the EJS file will show up the string "EJS tag"
    title: "EJS Tags",
    //This line is taking a new Date() and then the seconds of that Date with teh getSeconds() and saving it into "seconds" 
    seconds: new Date().getSeconds(),
    // This is an array with some data that will be saved in the word "item"
    items: ["JavaScript", "Node", "Express", "EJS"],
    //this is a variable that hold a string with HTML that will be used in the EJS file
    htmlContent: "<strong>Practicing EJS syntax </strong>",
  };
  // this is the code that will send the data to the client/user from the ejs file and using the variable data
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
