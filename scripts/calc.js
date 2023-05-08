const form = document.querySelector(".calc");

let op; 

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let curOperation;
    
    let operations = document.querySelectorAll("[name='operation']");
    console.log(operations);
    for (let op of operations) {
    if (op.checked)
        curOperation = op.value;
        console.log(curOperation)
    }

    switch (curOperation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case ':':
          result = num1 / num2;
          break;
      };

    let ans = document.querySelector(".answer");
    ans.textContent = `Ответ: ${result}`
});