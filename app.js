const express = require("express");
const path = require("path")
const cors = require("cors")

const checklistRouter = require("./src/routes/checklist")
const taskRouter = require("./src/routes/task")


const rootRouter = require("./src/routes/index")
require("./config/database")
const methodOverride = require("method-override");
const { checklistDependent } = require("./src/routes/task");

app.use(cors())
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//?_method=
app.use(methodOverride("_method", { methods: ["POST", "GET"]}))
//----------------------------------------
app.use(express.static(path.join(__dirname, "public")))

app.set("views", path.join(__dirname, "src/views"))
app.set("view engine", "ejs")

//salvando os caminhos para usar no router
app.use("/", rootRouter)
app.use("/checklists",checklistRouter)
app.use("/checklists", taskRouter.checklistDependent)
app.use("/tasks", taskRouter.simple)

app.listen(3000, () => {
  console.log("Servidor foi iniciado");
})