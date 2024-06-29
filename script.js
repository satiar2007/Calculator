const userInput = document.querySelector("#user_input");
var expression = "";

function press(num) {
  expression += num;
  console.log(expression)
  userInput.value = expression;
}

function equal(){
  userInput.value = eval(expression);
  expression = "";
}

erase = () => {
  expression = "";
  userInput.value = expression;
}