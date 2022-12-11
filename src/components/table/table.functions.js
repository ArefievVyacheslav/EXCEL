export function shouldResize(event) {
  return event.target.dataset.resize
}

export function isCell(event) {
  return event.target.dataset.type === 'cell'
}

export function nextSelector(key, { col, row }) {
  const MIN_VALUE = 0
  switch (key) {
    case 'Tab':
    case 'ArrowRight':
      row++
      break
    case 'Enter':
    case 'ArrowDown':
      col++
      break
    case 'ArrowUp':
      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1
      break
    case 'ArrowLeft':
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
      break
  }
  return `[data-id="${row}:${col}"]`
}

