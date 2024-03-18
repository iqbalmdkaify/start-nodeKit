const PORT = process.env.PORT || 5000;

const express = require("express");
const handleBars = require("express-handlebars");
const homeControllers = require("./controllers/homeController");
const aboutControllers = require("./controllers/aboutController");

const app = express();
app.use(express.static("public"));

// setting handlebars
app.set("views", "./views");
app.engine(
	"hbs",
	handleBars.engine({
		defaultLayout: "main",
		extname: ".hbs",
	})
);
app.set("view engine", ".hbs");

// Routes
app.get("/", homeControllers.getHomePage);
app.get("/about", aboutControllers.getAboutPage);

app.listen(PORT, () => {
	console.log(`Server running on PORT: ${PORT}`);
});
