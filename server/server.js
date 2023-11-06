const http = require("http");
const app = require("./app.js");
const mongoose=require ("mongoose")
let PORT = 5000;
let server = http.createServer(app);
// mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/nodetasks").then(()=>{
  console.log("db connected");

}).catch((err)=>{
  console.log(err);
})
server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`server is running on  ${PORT}`);
});
