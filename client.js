const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("calculator.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const calculatorPackage = grpcObject.calculatorPackage;
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const client = new calculatorPackage.Calculator("localhost:8000", 
grpc.credentials.createInsecure())

let input = []
rl.addListener('line', line => {
    input.push(parseInt(line))
  if (input.length == 3) {
    sendRequest()
    input = []
  }
})

function sendRequest() {
  client.calculate({
      "operation": input[0],
      "first": input[1],
      "second": input[2],
  }, (err, response) => {
    if (!response || response.status != 200) {
      return console.log("Error!")
    }
    console.log(response.result)
  })  
}