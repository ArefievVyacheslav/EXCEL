export class TableSelection {
  static className = 'selected'
  constructor () {
    this.group = []
    this.current = null
  }

  select ($el) {
    this.clear()
    this.group.push($el)
    this.current = $el
    $el.focus().addClass(TableSelection.className)
  }

  selectGroup ($group = []) {
    this.clear()
    this.group = $group
    this.group.forEach($el => $el.addClass(TableSelection.className))
  }

  clear() {
    this.current = null
    this.group.forEach($el => $el.removeClass(TableSelection.className))
    this.group = []
  }
}