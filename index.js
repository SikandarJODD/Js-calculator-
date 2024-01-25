let input = document.querySelector("input");
let btn = document.querySelectorAll("button");

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    input.value += btn.innerText;
  });
});

let addbtn = document.getElementById("add");
let subbtn = document.getElementById("sub");
let mulbtn = document.getElementById("mul");
let divbtn = document.getElementById("divi");
let modbtn = document.getElementById("mod");
let equalbtn = document.getElementById("equal");
let clearbtn = document.getElementById("clear");
let backspacebtn = document.getElementById("backspace");

clearbtn.addEventListener("click", () => {
  input.value = "";
});

backspacebtn.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

addbtn.addEventListener("click", () => {
  input.value += "+";
});
subbtn.addEventListener("click", () => {
  input.value += "-";
});
mulbtn.addEventListener("click", () => {
  input.value += "*";
});
divbtn.addEventListener("click", () => {
  input.value += "/";
});
modbtn.addEventListener("click", () => {
  input.value += "%";
});

equalbtn.addEventListener("click", () => {
  //  calculate the input value and display the result without using eval

  let inputvalue = input.value;
  let arr = inputvalue.split("");
  let result = 0;
  let num1 = "";
  let num2 = "";
  let operator = "";
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == "+" ||
      arr[i] == "-" ||
      arr[i] == "*" ||
      arr[i] == "/" ||
      arr[i] == "%"
    ) {
      flag = 1;
      operator = arr[i];
      continue;
    }
    if (flag == 0) {
      num1 += arr[i];
    } else {
      num2 += arr[i];
    }
  }
  num1 = Number(num1);
  num2 = Number(num2);
  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "*") {
    result = num1 * num2;
  } else if (operator == "/") {
    result = num1 / num2;
  } else if (operator == "%") {
    result = num1 % num2;
  }
  console.log(result);
  input.value = result;
});
