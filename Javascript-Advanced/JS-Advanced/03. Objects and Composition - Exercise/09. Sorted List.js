function createSortedList() {
  class SortedList {
    constructor() {
      this.elements = [];
      this.size = 0;
    }

    add(element) {
      this.elements.push(Number(element));
      this.elements.sort((a, b) => a - b);
      this.size++;
    }

    remove(index) {
      if (this.elements[index] !== undefined) {
        this.elements.splice(Number(index), 1);
        this.elements.sort((a, b) => a - b);
        this.size--;
      }
    }

    get(index) {
      if (this.elements[index] !== undefined) {
        return this.elements[index];
      }
    }
  }

  return new SortedList();
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
