let result = "";

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    if (value === "=") {
      result = eval(result);
    } else if (value === "C") {
      result = "";
    } else if (value === "DEL") {
      result = result.slice(0, -1);
    } else if (value === "×") {
      result += "*";
    } else if (value === "÷") {
      result += "/";
    } else if (value === "CE") {
      result = "0";
    } else {
      result += value;
    }

    document.querySelector(".text").value = result;
  });
});

