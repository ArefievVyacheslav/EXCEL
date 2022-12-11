const CODES = {
  'A': 65,
  'B': 90
}

const toCell = row => (_, col) => `<div class="cell" contenteditable data-type="cell" data-col="${col}" data-id="${col}:${row}"></div>`

function toColumn (col, idx) {
  return `<div class="column" data-type="resizable" data-col="${ idx }">
    ${ col }
    <div class="col-resize" data-resize="col"></div>
  </div>`
}

function createRow (idx, content) {
  const resizer = idx ? `<div class="row-resize" data-resize="row"></div>` : ''
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${ idx ? idx : '' }
        ${ resizer }
      </div>
      <div class="row-data">${ content }</div>
    </div>
  `
}

function toChar (_, idx) {
  return String.fromCharCode(CODES.A + idx)
}

export function createTable (rowsCount = 15) {
  const colsCount = CODES.B - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('')
  rows.push(createRow(null, cols))
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
      .fill('')
      .map(toCell(row))
      .join('')
    rows.push(createRow(row + 1, cells))
  }
  return rows.join('')
}
