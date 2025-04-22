import inquirer from "inquirer";
import chalk from "chalk";
import {somar, subtrair, multiplicar, dividir} from "./operacoes.js";

async function iniciarCalculadora() {
    console.log(chalk.blue.bold("Calculadora"));
    
    const {valorA, valorB, operacao} = await inquirer.prompt([
        {
            type: "input",
            name: "valorA",
            message: "Digite o primeiro número",
            validate:(input) => !isNaN(parseFloat(input)) || "Digite um número"
        },
        {
            type:"input",
            name: "valorB",
            message: "Digite o segundo número",
            validate: (input) => !isNaN(parseFloat(input)) || "Digite um número"
        },
        {

            type:"list",
            name: "operacao",
            message: "Escolha a operacao",
            choices: ["+", "-", "*", "/"]
        },
    ]);
    const a = parseFloat(valorA);
    const b = parseFloat(valorB);
    let resultado;

  try {
    switch (operacao) {
      case "+":
        resultado = somar(a, b);
        break;
      case "-":
        resultado = subtrair(a, b);
        break;
      case "*":
        resultado = multiplicar(a, b);
        break;
      case "/":
        resultado = dividir(a, b);
        break;
      default:
        throw new Error("Operação inválida!");
    }

    console.log(
      chalk.green.bold(`✅ Resultado: ${a} ${operacao} ${b} = ${resultado}`)
    );
  } catch (erro) {
    console.log(chalk.red(`❌Erro: ${erro.message}`));
  }
}

iniciarCalculadora();




