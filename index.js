const body = document.querySelector('body');
const table = document.querySelector('.table');
const tableHeader = document.querySelector('.table__header');
const btnAddWord = document.querySelector('.add-word-button');

function directSort(table, numberOfColumn) {

  const sortingRows = Array.from(table.rows).slice(1);
  let sortedRows = [];

  sortedRows = sortingRows.sort((rowA, rowB) => (rowA.cells[numberOfColumn].innerHTML
        > rowB.cells[numberOfColumn].innerHTML ? 1 : -1));

  table.tBodies[0].append(...sortedRows);
}

function addNewRow(table) {
  const row = document.createElement('tr');

  const wordCell = document.createElement('td');
  wordCell.setAttribute('contenteditable', true);
  row.append(wordCell);

  const translationCell = document.createElement('td');
  translationCell.setAttribute('contenteditable', true);
  row.append(translationCell);

  table.tBodies[0].append(row);
}

tableHeader.addEventListener('click', (e) => {
  const sortingColumnNumber = +e.target.getAttribute('data');
  
  directSort(table, sortingColumnNumber);
});

btnAddWord.addEventListener('click', () => {
  addNewRow(table);
});
