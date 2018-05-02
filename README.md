# linked-list
LinkedList is a lightweight doubly linked list implemented in javascript.  For many operations, the LinkeList shares many method signatures to a javascript Array.

LinkedList is optimized for situations where you have many deletion or insertion operations but few random access reads of elements in the middle of the list, for example FIFO queues or LIFO stacks.  Insert and delete operations are O(1) complexity.  Reading the head and tail elements is O(1) complexity.  Random access read operation are O(n) complexity.

# Installation
```
npm install git+https://user@github.com/repo/repo.git
```

# Examples
## Add or remove items from the end of the LinkedList.
```javascript
const LinkedList = require('index');

let list = new LinkedList();

// Append 3 items to the end of the list using push() and pop().
list.push(0);
list.push(1);
list.push(2);

// LinkedList: [0, 1, 2]
console.log(list.toString())

// Remove the last item from the end of the list using unshift() and shift().
list.pop();

// LinkedList: [0, 1]
console.log(list.toString())
```

## Add or remove items from the front of the list.
```javascript
const LinkedList = require('index');

let list = new LinkedList();

// Append to the front of the list
list.unshift(3);
list.unshift(2);
list.unshift(1);
list.unshift(0);

// LinkedList: [0, 1, 2, 3]
console.log(list.toString())

// Remove the first item from the beginning of the list.
list.shift();

// LinkedList: [1, 2, 3]
console.log(list.toString())
```
