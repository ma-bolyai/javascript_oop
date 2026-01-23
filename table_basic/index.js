class Table {
  /**
   * @type {HTMLTableSectionElement}
   */
  #tbody;

  get tbody() {
    return this.#tbody;
  }

  /**
   * @param {HeaderType[]} tableHeaderArray
   */
  constructor(tableHeaderArray) {
    this.#tbody = makeTableBodyWithHeader(tableHeaderArray);
  }

  /**
   * @param {Visszahivas} param
   */
  example(param) {
    param(this.#tbody);
  }
}

class ColspanTable extends Table {
  /**
   * @param {HeaderType[]} tableHeaderArray
   */
  constructor(tableHeaderArray) {
    super(tableHeaderArray);
  }

  /**
   * @param {ColspanRowType} colspanRow
   */
  render(colspanRow) {
    renderColspanBody(this.tbody, colspanRow);
  }
}

class RowspanTable extends Table {
  /**
   * @param {HeaderType[]} tableHeaderArray
   */
  constructor(tableHeaderArray) {
    super(tableHeaderArray);
  }

  /**
   * @param {RowspanRowType} rowspanRow
   */
  render(rowspanRow) {
    renderRowspanBody(this.tbody, rowspanRow);
  }
}

const colspanTable = new ColspanTable(colspanHeaderArr);
colspanTable.render(colspanBodyArr);

const rowspanTable = new RowspanTable(rowspanHeaderArr);
rowspanTable.render(rowspanBodyArr);

/**
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 *
 * @typedef {{name: string, colSpan?: number}} HeaderType
 * @callback Visszahivas
 * @param {HTMLTableSectionElement}
 */

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [
  { name: "Szerző" },
  { name: "Mű" },
  { name: "Fogalmak" },
];
/** @type {HeaderType[]}   */
const colspanHeaderArr = [
  { name: "Szerző" },
  { name: "Mű" },
  { name: "Fogalmak", colSpan: 2 },
];

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
  {
    author: "Appolliniare",
    title1: "A megsebzett galamb és a szökőkút",
    concepts1: "képvers",
    title2: "Búcsú",
    concepts2: "avantgárd",
  },
  {
    author: "Thomas Mann",
    title1: "Mario és a varázsló",
    concepts1: "kisregény",
  },
  {
    author: "Franz Kafka",
    title1: "A per",
    concepts1: "képvers",
    title2: "Az átvlátozás",
    concepts2: "kisregény",
  },
];

/** @type {ColspanRowType[]} */
const colspanBodyArr = [
  {
    author: "Appolliniare",
    title: "A megsebzett galamb és a szökőkút",
    concepts: "Képvers",
    concepts2: "Emlékezés",
  },
  {
    author: "Appolliniare",
    title: "Búcsú",
    concepts: "Avantgárd",
  },
  {
    author: "Thomas Mann",
    title: "Mario és a varázsló",
    concepts: "Kisregény",
  },
  {
    author: "Franz Kafka",
    title: "A per",
    concepts: "regény",
  },
  {
    author: "Franz Kafka",
    title: "Az átváltozás",
    concepts: "kisregény",
    concepts2: "groteszk",
  },
];

// renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr);
// renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr);

function onButtonClick() {
  /**
   * @type {RowspanRowType}
   */
  const obj = {
    author: "Appolliniare",
    title1: "A megsebzett galamb és a szökőkút",
    concepts1: "képvers",
    title2: "Búcsú",
    concepts2: "avantgárd",
  };

  rowspanTable.example((body) => {
    const tr = document.createElement("tr");
    for (elem of obj) {
      const td = document.createElement("td");
      td.innerText = obj.elem;
      tr.appendChild(td);
    }
    body.appendChild(tr);
  });
}

onButtonClick.bind(rowspanTable);

const btn = document.createElement("button");
btn.innerText = "Rowspan Hozzaadasa";
document.body.appendChild(btn);

btn.addEventListener("click", onButtonClick());
