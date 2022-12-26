const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost/toDoList", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Conectado ao MongoDB"))
.catch((err) => console.log(err));
