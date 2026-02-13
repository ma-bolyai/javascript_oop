import { Manager } from "./manager.js";
import("functions.js").formFieldList;

class FormController {
  /**
   * @type {Manager}
   */
  #manager;

  /**
   * @type {FormField[]}
   */
  #formFieldElemList;

  /**
   *
   * @param {FormFieldType} formFieldList
   * @param {Manager} manager
   */
  constructor(formFieldList, manager) {
    this.#manager = manager;
    this.#formFieldElemList = [];

    for (const formField of formFieldList) {
      const formFieldElem = new FormField(
        formField.id,
        formField.name,
        formField.label,
        formField.required,
        form,
      );

      this.#formFieldElemList.push(formField);
    }

    const form = document.createElement("form");
    document.body.appendChild(form);
    const btn = document.createElement("button");
    btn.innerText = "Kuldes";
    form.appendChild(btn);

    (form.addEventListener("submit"),
      (e) => {
        e.preventDefault();

        const elem = this.#createElement();
        if (elem) {
          this.#manager.addElement(elem);
          e.target.reset();
        }
      });
  }

  /**
   * @returns {ColspanType | RowspanType | null}
   */
  #createElement() {
    let res = {};
    let valid = true;
    for (const inputField of this.#formFieldElemList) {
      if (inputField.validate()) {
        res[inputField.name] = inputField.value;
      } else {
        valid = false;
      }
      res[inputField.name] = inputField.value;
    }

    if (valid) {
      return res;
    } else {
      return null;
    }
  }
}

class FormField {
  /**
   * @type {HTMLInputElement}
   */
  #input;

  /**
   * @type {string}
   */
  #name;

  /**
   * @type {boolean}
   */
  #required;

  /**
   * @type {HTMLDivElement}
   */
  #errorDiv;

  /**
   *
   * @param {string} id
   * @param {string} name
   * @param {string} labelContent
   * @param {boolean} required
   * @param {HTMLFormElement} parent
   */
  constructor(id, name, labelContent, required, parent) {
    const div = document.createElement("div");
    parent.appendChild(div);

    const label = document.createElement("label");
    label.innerText = labelContent;
    div.appendChild(label);

    const input = document.createElement("input");
    input.id = id;
    input.name = name;
    div.appendChild(input);

    div.appendChild(document.createElement("br"));

    this.#input = input;
    this.#name = name;

    const errDiv = document.createElement("div");
    errDiv.classList.add("error");
    this.#required = required;
    this.#errorDiv = errDiv;
  }

  /**
   * @returns {boolean}
   */
  validate() {
    let res = true;
    if (this.#required && this.value) {
      res = false;
      this.#errorDiv.innerText = "Kotelezo";
    } else {
      this.#errorDiv.innerText = "";
    }

    return res;
  }

  getInputValue() {
    if (this.#input.value) {
      return this.#input.value;
    } else {
      return undefined;
    }
  }

  getName() {
    return this.#name;
  }
}
