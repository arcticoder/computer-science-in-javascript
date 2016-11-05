/*Complexity

 Average
 Access	Search	Insertion	Deletion
 -	O(n)	O(n)	O(n)
 */
class Set {
  constructor() {
    this.values = [];
    this.numberOfValues = 0;
  }

  add(value) {
    if(!~this.values.indexOf(value)) {
      this.values.push(value);
      this.numberOfValues++;
    }
  }

  remove(value) {
    const index = this.values.indexOf(value);
    if(~index) {
      this.values.splice(index, 1);
      this.numberOfValues--;
    }
  }

  contains(value) {
    return this.values.indexOf(value) !== -1;
  }

  union(set) {
    const newSet = new Set();
    set.values.forEach(value => {
      newSet.add(value);
    });
    this.values.forEach(value => {
      newSet.add(value);
    });
    return newSet;
  }

  intersect(set) {
    const newSet = new Set();
    this.values.forEach(value => {
      if(set.contains(value)) {
        newSet.add(value);
      }
    });
    return newSet;
  }

  difference(set) {
    const newSet = new Set();
    this.values.forEach(value => {
      if(!set.contains(value)) {
        newSet.add(value);
      }
    });
    return newSet;
  }

  isSubset(set) {
    return set.values.every(function(value) {
      return this.contains(value);
    }, this);
  }

  length() {
    return this.numberOfValues;
  }

  print() {
    console.log(this.values.join(' '));
  }
}
