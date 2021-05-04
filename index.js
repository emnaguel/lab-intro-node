class SortedList {
  constructor() {
    this.length = 0;
    this.items = []
  }

  add(item) {
    this.length = this.items.push(item)
    this.items.sort(function (a, b) { return a - b })
  }

  get(pos) {
    if (pos >= this.length || pos < 0) {
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos]
    }

  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {

      return this.items[this.length - 1]
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {

      return this.items[0]
    }
  }

  sum() {

    return this.items.reduce((acc, value) => acc + value, 0)

  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.sum() / this.length
    }
  }
}

module.exports = SortedList;
