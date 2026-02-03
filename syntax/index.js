// import { muvelet, muveletLetrehoz } from "./functions.js";
import { Gomb } from "./gomb.js";

const div = document.createElement("div");
const input_a = document.createElement("input");
const input_b = document.createElement("input");
// const btn = document.createElement("button");
// btn.innerText = "gombocska";

/**
 * @type {HTMLElement[]}
 */
const elements = [input_a, input_b, div];

for (const elem of elements) {
  document.body.appendChild(elem);
}

// btn.addEventListener("click", () => {
//   const value_a = Number(input_a.value);
//   const value_b = Number(input_b.value);

//   const { result } = muvelet(value_a, value_b, muveletLetrehoz("+"));
//   div.innerText = result;
// });

const gomb = new Gomb(input_a, input_b, "+", div);
