const CODES = {
  'A': 65,
  'B': 90
}

function toCell () {
  return `<div class="cell" contenteditable></div>`
}

function toColumn (col) {
  return `<div class="column">${ col }</div>`
}

function createRow (idx, content) {
  return `
     <div class="row">
       <div class="row-info">${idx ? idx : ''}</div>
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
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('')
    rows.push(createRow(i + 1, cells))
  }
  return rows.join('')
}

// `
// <div class="row">
//
//   <div class="row-info"></div>
//
//   <div class="row-data">
//
//     <div class="column">A</div>
//     <div class="column">B</div>
//     <div class="column">C</div>
//   </div>
// </div>
//
// <div class="row">
//
//   <div class="row-info">1</div>
//
//   <div class="row-data">
//
//     <div class="cell selected" contenteditable>A1</div>
//     <div class="cell" contenteditable>B1</div>
//     <div class="cell" contenteditable>C1</div>
//   </div>
// </div>`
