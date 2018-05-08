# Overview
LinkedList is a lightweight doubly linked list implemented in javascript.

LinkedList is optimized for situations where you have many deletion or insertion operations but few random access reads of elements in the middle of the list, for example FIFO queues or LIFO stacks.  Insert and delete operations are O(1) complexity.  Reading the head and tail elements is O(1) complexity.  Random access read operation are O(n) complexity.

# Installation
```
npm install git+https://github.com/jason-vermillion/jato-list.git

# Run the mocha tests.
npm test
```

# Usage

```javascript
const LinkedList = require('jato-list');

let list = new LinkedList();

// Add using push(), unshift(), addBefore(), or addAfter().
// Append 3 items to the end of the list with push().
list.push(0);
list.push(1);
list.push(2);

// LinkedList: [0, 1, 2]
console.log(list.toString());

// Remove items with remove(), pop(), or shift().
// Remove the last item of the list using pop().
list.pop();
console.log(list.toString());
// LinkedList: [0, 1]

// First and last item values in the list
console.log(list.head.value); // 0
console.log(list.tail.value); // 1

// Traverse elements using next or previous
console.log(list.head.next.value); // 1
console.log(list.tail.previous.value); // 0

```

# Properties
| Property | Description | Usage |
|----------|-------------|-------|
| head     | The head property of the LinkedList instance references to the first item in the list.  The head property is null if the list is empty. | [example](#head) |
| length   | The length property of the LinkedList instance returns the number of items in the list. | [example](#length) |
| tail     | The tail property of the LinkedList instance references the last item in the list.  The tail property is null if the list is empty. | [example](#tail) | |

# Methods

| Method             | Description                                                 | Usage    |
|--------------------|-------------------------------------------------------------|----------|
| addAfter()         | The addAfter() method adds a new item after the given node. | [example](#addafter)  |
| addBefore()        | The addBefore() method adds a new element before the given node. | [example](#addbefore) |
| clear()            | The clear() method removes all of the elements from the list. | [example](#clear) |
| from()             | The static from() method creates a new LinkedList instance from an array or iterable object. | [example](#from) |
| of()              | The static of() method creates a new LinkedList instance from a variable number of parameter arguments. | [example](#of) |
| pop()              | The pop() method removes the last item at the end of the list. | [example](#pop) |
| push()             | The push() method adds and returns one item to the end of the list. | [example](#push) |
| remove()           | The remove() method removes the given node from the LinkedList. | [example](#remove) |
| shift()            | The shift() method removes the first item from the list. | [example](#shift) |
| unshift()          | The unshift() method inserts a new item to the front of the list. | [example](#unshift) |
| toString() | The toString() method returns the string representation of the LinkedList instance. | [example](#tostring) |
| *[Symbol.iterator] | The Symbol.iterator generator function allows iterating over the nodes in the LinkedList using the for...of statement. | [example](#symboliterator)  | |

# Examples
## constructor
Create a new empty LinkedList instance.

```javascript
const LinkedList = require('jato-list');

// Create a new LinkedList instance.
let list = new LinkedList();

// Append 3 items to the end of the list.
list.push(0);
list.push(1);
list.push(2);

// LinkedList: [0, 1, 2]
console.log(list.toString());

// Number of nodes in the list.
console.log(list.length); // 3

// First item in the list.
console.log(list.head.value); // 0

// Last item in the list.
console.log(list.tail.value); // 2

// Second item in the list.
console.log(list.head.next.value); // 1
```

## addAfter()
Add a new item after the specified node in the list.

```javascript
const LinkedList = require('jato-list');

// Create a new LinkedList with 3 nodes.
let list = LinkedList.from([0, 1, 2]);

console.log(list.toString());
// LinkedList: [0, 1, 2]

// Add a new node with the value of 999 after the first element in the list.
let item = list.addAfter(list.head, 999);

console.log(item.value);
// 999

console.log(list.toString());
// LinkedList: [0, 999, 1, 2]
```

## addBefore()
Add a new item before the specified node in the list.

```javascript
const LinkedList = require('jato-list');

// Create a new LinkedList with 3 nodes.
let list = LinkedList.from([0, 1, 2]);

console.log(list.toString());
// LinkedList: [0, 1, 2]

// Add a new node with the value of 999 before the last element in the list.
let item = list.addBefore(list.tail, 999);

console.log(list.toString());
// LinkedList: [0, 1, 999, 2]

console.log(item.value);
// 999
```

## clear()
Remove all of the nodes from the list.

```javascript
const LinkedList = require('jato-list');

// Create a new LinkedList with 3 nodes.
let list = LinkedList.from([0, 1, 2]);

console.log(list.toString());
// LinkedList: [0, 1, 2]

// Remove all of the nodes from the list.
list.clear();

console.log(list.toString());
// LinkedList: []
```

## from()
Create a new LinkedList instance from an array of values.

```javascript
const LinkedList = require('jato-list');

// Create a new LinkedList instance from an Array like object.
let list = LinkedList.from([0, 1, 2, 3, 4]);

console.log(list.toString());
// LinkedList: [0, 1, 2, 3, 4]
```
## head
Get the first node in the list.

```javascript
const LinkedList = require('jato-list');

// Create a new LinkedList instance from an Array of values.
let list = LinkedList.from([40, 41, 42, 43]);

console.log(list.toString());
// LinkedList: [40, 41, 42, 43]

// Print the value of the first item in the list using the head property.
console.log(list.head.value);
// Expected output: 40

console.log(list.head.next.value);
// Expected output: 41

// Print the value of the last item in the list using the tail property.
console.log(list.tail.value);
// Expected output: 43
```

## of()
Create a new LinkedList instance from a variable number of parameter arguments.

```javascript
const LinkedList = require('jato-list');

let list;

// Create a new LinkedList instance from a variable number of arguments.
list = LinkedList.of('Apple', 'Pear', 'Kiwi');
console.log(list.toString());
// LinkedList: [Apple, Pear, Kiwi]

// One item list.
list = LinkedList.of(1987);
console.log(list.toString());
// LinkedList: [1987]

// Empty list
list = LinkedList.of();
console.log(list.toString());
// LinkedList: []
```

## pop()
Remove the last node from the list.

```javascript
const LinkedList = require('jato-list');

let item;
let list = LinkedList.from(['a', 'b', 'c', 'd', 'e']);
console.log(list.toString());
// LinkedList: [a, b, c, d, e]

// pop() removes the last item "e" from the list.
item = list.pop();
console.log(list.toString());
// LinkedList: [a, b, c, d]

// Remove "d" from the end of the list.  Pop() returns the removed node.
item = list.pop();
console.log(item.value);
// Expected output: d

console.log(list.toString());
// LinkedList: [a, b, c]
```

## push()
Append a new node to the end of the list.

```javascript
const LinkedList = require('jato-list');

let item = null;
let list = new LinkedList();
console.log(list.toString())
// LinkedList: []

list.push('step 1');
list.push('step 2');
item = list.push('step 3');
console.log(list.toString())
// LinkedList: [step 1, step 2, step 3]

// push() returns the newly added node.
console.log(item.value);
// expected output: step 2

```

## remove()
Remove the specified node from the list.

```javascript
const LinkedList = require('jato-list');

let item = null;
let list = LinkedList.from([1, 2, 3, 4]);

console.log(list.toString());
// LinkedList: [1, 2, 3, 4]

// Reference the second item in the list.
item = list.head.next;

// Remove the second item.
let removed = list.remove(item);

console.log(list.toString());
// LinkedList: [1, 3, 4]

console.log(removed.value);
// Expected output: 2
```

## shift()
Remove the first node from the beginning of the list.

```javascript
const LinkedList = require('jato-list');

let list = LinkedList.from([1, 2, 3, 4]);
console.log(list.toString());
// LinkedList: [1, 2, 3, 4]

// Remove the first item from the list
let removed = list.shift();
console.log(list.toString());
// LinkedList: [2, 3, 4]

console.log(removed.value);
// Expected output: 1
```

## unshift()
Add a new node to the beginning of the list.

```javascript
const LinkedList = require('jato-list');

let list = LinkedList.from([1, 2, 3]);
console.log(list.toString());
// LinkedList: [1, 2, 3]

// Insert an item to the front of the list.
let added = list.unshift(99);
console.log(list.toString());
// LinkedList: [99, 1, 2, 3]

console.log(added.value);
// Expected output: 99
```

## tail
Get the last node from the end of the list.

```javascript
const LinkedList = require('jato-list');

// Create a new LinkedList instance from an Array of values.
let list = LinkedList.from([40, 41, 42, 43]);
console.log(list.toString());
// LinkedList: [40, 41, 42, 43]

// The tail property points to the last node in the list.
console.log(list.tail.value);
// Expected output: 43

console.log(list.tail.previous.value);
// Expected output: 42
```

## toString()
Get the string representation of the list.

```javascript
const LinkedList = require('jato-list');

let list = LinkedList.from(['green', 'red', 'yellow', 'blue', 'pink']);

// Print a string representation of the list.
console.log(list.toString());
// LinkedList: [green, red, yellow, blue, pink]
```

## Symbol.iterator
Iterate over the node values of the list using the for..of statement.

```javascript
const LinkedList = require('jato-list');

let list = LinkedList.from([10, 11, 12]);

// loop through the values of the list.
let i = 0;
for (let item of list) {
  console.log(`list[${i}] = ${item.value}`);
  i++;
}
// Expected output:
// list[0] = 10
// list[1] = 11
// list[2] = 12
```
