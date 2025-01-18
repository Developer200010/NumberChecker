document.getElementById("btn").addEventListener("click", function () {
  const input = document.getElementById("inputNumber").value;

  const output = document.getElementById("output");



  if (!/^\d+$/.test(input.trim())) {
    output.textContent =
      "Please enter a valid positive number (no letters,  symbols, or might be empty!).";
    return;
  }

  const number = parseInt(input, 10);

  if (isNaN(number) || input.trim() === "") {
    output.textContent = "please enter a number";
    return;
  }

  if (isNaN(number)) {
    output.textContent = "please enter a number";
    return;
  }

  if (number < 0) {
    output.textContent = "Enter a positive value.";
    return;
  }

  let result = [];

  if (number % 2 === 0) {
    for (let i = 1; i <= 3; i++) {
      result.push(number + i * 2);
    }
  } else {
    for (let i = 1; i <= 3; i++) {
      result.push(number + 1 * 2);
    }
  }

  output.textContent = `Next 3 ${
    number % 2 === 0 ? "even" : "odd"
  } number : ${result.join(", ")} `;
});
