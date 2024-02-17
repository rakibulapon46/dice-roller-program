function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const diceResultTotal = document.getElementById("diceResultTotal");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="./img/${value}.png">`);
  }
  diceResult.textContent = `Dice: ${values.join(", ")}`;

  // total value part start
  function sum() {
    let total = 0;
    for (let number of values) {
      total += number;
    }
    return total;
  }
  diceResultTotal.textContent = `Total: ${sum(values)}`;
  // total value part end

  diceImages.innerHTML = images.join("");
}



//title part
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = `Come back ☹️`;
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
