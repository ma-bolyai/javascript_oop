import { muvelet, muveletLetrehoz } from "./functions.js";

const input_a = document.createElement("input");
const input_b = document.createElement("input");

const btn = document.createElement("button");
btn.innerText = "gombocska";

const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);

const elements = [input_a, input_b, btn, div];

for (const elem of elements) {
  document.body.appendChild(elem);
}

btn.addEventListener("click", () => {
  const value_a = Number(input_a.value);
  const value_b = Number(input_b.value);

  const { result } = muvelet(value_a, value_b, muveletLetrehoz("+"));
  p.innerText = result;
});
