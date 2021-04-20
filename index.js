const table = document.querySelector('.table');
const tableHeader = document.querySelector('.table__header');
const btnAddWord = document.querySelector('.add-word-button');

function directSort(table, numberOfColumn) {

  const sortingRows = Array.from(table.rows).slice(1);

  const sortedRows = sortingRows.sort((rowA, rowB) => (rowA.cells[numberOfColumn].innerHTML.toLowerCase()
        > rowB.cells[numberOfColumn].innerHTML.toLowerCase() ? 1 : -1));

  table.tBodies[0].append(...sortedRows);
}

function reverseSort(table, numberOfColumn) {

  const sortingRows = Array.from(table.rows).slice(1);

  const sortedRows = sortingRows.sort((rowA, rowB) => (rowA.cells[numberOfColumn].innerHTML.toLowerCase()
        > rowB.cells[numberOfColumn].innerHTML.toLowerCase() ? -1 : 1));

  table.tBodies[0].append(...sortedRows);
}

function addNewRow(table) {
  const row = document.createElement('tr');
  createCell(row);
  createCell(row);
  table.tBodies[0].append(row);
}

function createCell(parent) {
  const cell = document.createElement('td');
  cell.setAttribute('contenteditable', true);
  parent.append(cell);
}

tableHeader.addEventListener('click', (e) => {
  const sortingColumnNumber = +e.target.getAttribute('data');
  e.target.classList.toggle('direct');
  if (e.target.classList.contains('direct')) {
    directSort(table, sortingColumnNumber);
  } else {
    reverseSort(table, sortingColumnNumber);
  }
});

btnAddWord.addEventListener('click', () => {
  addNewRow(table);
});
