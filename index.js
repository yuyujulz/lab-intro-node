
class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a - b)
  }

  get(pos) {
    let position = this.items[pos]
    if(position === undefined){
      throw new Error('OutOfBounds');

    }
    return position
  }
    

  max() {
    
    const maximum = Math.max(this.items);
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    return maximum
  }

  min() {
    
    const minimum = Math.min(this.items);
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    return minimum
  }

  sum() {
    if(this.length === 0){
      return 0;
    }
    for(let i = 0; i < this.length; i++){
      sum += this.items[i]
    }
      return sum
    }
  

  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
