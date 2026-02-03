class Gomb {
  /**
   * @param {HTMLInputElement} input1
   * @param {HTMLInputElement} input2
   * @param {string} muveletString
   * @param {HTMLDivElement} eredmenyDiv
   */
  constructor(input1, input2, muveletString, eredmenyDiv) {
    this.input1 = input1;
    this.input2 = input2;
    this.muveletString = muveletString;
    this.eredmenyDiv = eredmenyDiv;

    const button = document.createElement("button");
    button.innerText = "gombocska";
    const body = document.body;
    body.appendChild(button);

    button.addEventListener("click", () => {
      this.calculate(input1, input2, eredmenyDiv);
    });
  }

  /**
   *
   * @param {HTMLInputElement} input1
   * @param {HTMLInputElement} input2
   * @param {HTMLDivElement} eredmenyDiv
   */
  calculate(input1, input2, eredmenyDiv) {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    switch (this.muveletString) {
      case "+":
        eredmenyDiv.innerText = value1 + value2;
        break;

      case "-":
        eredmenyDiv.innerText = value1 - value2;
        break;

      case "*":
        eredmenyDiv.innerText = value1 * value2;
        break;
    }
  }
}

export { Gomb };
