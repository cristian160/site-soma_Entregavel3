var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

// Página inicial.
app.get("/", function (req, res) {
  res.send("Oi, mundo :-)");
});

// Funções das quatro operações.
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

// Confere se os dois valores recebidos são números.
function validarNumeros(req, res, next) {
  var body = req.body;

  if (
    !body ||
    typeof body.a !== "number" ||
    typeof body.b !== "number" ||
    !Number.isFinite(body.a) ||
    !Number.isFinite(body.b)
  ) {
    return res.status(400).send(
      'Envie os campos "a" e "b" como números. Exemplo: {"a": 10, "b": 5}'
    );
  }

  next();
}

// Recebe os números e devolve a soma.
app.post("/soma", validarNumeros, function (req, res) {
  var body = req.body;
  console.log("Soma — dados recebidos:", body);

  var resultado = soma(body.a, body.b);

  res.send(
    `O resultado da soma de ${body.a} e ${body.b} é ${resultado}`
  );
});

// Recebe os números e devolve a subtração.
app.post("/subtracao", validarNumeros, function (req, res) {
  var body = req.body;
  console.log("Subtração — dados recebidos:", body);

  var resultado = subtracao(body.a, body.b);

  res.send(
    `O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`
  );
});

// Recebe os números e devolve a multiplicação.
app.post("/multiplicacao", validarNumeros, function (req, res) {
  var body = req.body;
  console.log("Multiplicação — dados recebidos:", body);

  var resultado = multiplicacao(body.a, body.b);

  res.send(
    `O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`
  );
});

// Recebe os números e devolve a divisão.
app.post("/divisao", validarNumeros, function (req, res) {
  var body = req.body;
  console.log("Divisão — dados recebidos:", body);

  if (body.b === 0) {
    return res.status(400).send("Não é possível dividir por zero.");
  }

  var resultado = divisao(body.a, body.b);

  res.send(
    `O resultado da divisão de ${body.a} por ${body.b} é ${resultado}`
  );
});

var port = 3001;

// Inicia o servidor.
app.listen(port, function () {
  console.log(`App de Exemplo escutando em http://localhost:${port}/`);
});