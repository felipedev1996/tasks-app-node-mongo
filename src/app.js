import express from "express";
import  {create} from "express-handlebars";
import indexRouter from "./routes/index.routes";
import path from "path";
import "./database";
import morgan from "morgan";

const app = express();


// app.set('views',path.join(fileURLToPath(import.meta.url)), "views");
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
  );
  app.set("view engine", ".hbs");
  
//middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Routes
app.use(indexRouter);

// static file
app.use(express.static(path.join(__dirname,"public")));


export default app;