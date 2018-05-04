const Node = require('./Node');

/**
 * Doubly linked list.
 */
class LinkedList {
  constructor () {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * get length - The length is the read-only property for the number of elements in the linked
   * list.
   *
   * @return {type}  The number of elements in the list.
   */
  get length() {
    return this._length;
  }

  /**
   * get head - The head is the read-only property for the first element in the list.
   *
   * @return {type}  Returns the first element in the list.
   */
  get head() {
    return this._head;
  }

  /**
   * get tail - The tail is the read-only property for the last item in the list.
   *
   * @return {type}  Returns the last item in the list.
   */
  get tail() {
    return this._tail;
  }

  /**
   * addAfter - The addAfter() method adds a new item after the given node.
   *
   * @param  {type} node  Add a new item after the node.
   * @param  {type} value value of the new item.
   * @return {type}       Returns the newly added node.
   */
  addAfter(node, value) {
    if (!Boolean(node)) {
      throw 'node parameter cannot be null or undefined.';
    }

    let newNode = new Node();

    newNode.value = value;
    newNode.previous = node;
    newNode.next = node.next;
    node.next = newNode;

    if (newNode.previous === null) {
      this._head = newNode;
    }

    if (newNode.next === null) {
      this._tail = newNode;
    }

    this._length++;

    return newNode;
  }

  /**
   * addBefore - The addBefore() method adds a new element before the given
   * node.
   *
   * @param  {type} node  The node to add the new item before.
   * @param  {type} value The value of the new item added to the list.
   * @return {type}       Returns the newly added item.
   */
  addBefore(node, value) {
    if (!Boolean(node)) {
      throw 'node parameter cannot be null or undefined.';
    }

    let newNode = new Node();
    newNode.value = value;
    newNode.previous = node.previous;
    newNode.next = node;
    node.previous = newNode;

    if (newNode.previous === null) {
      this._head = newNode;
    }

    if (newNode.next === null) {
      this._tail = newNode;
    }

    this._length++;

    return newNode;
  }

  /**
   * clear - The clear() method removes all of the elements from the list.
   */
  clear() {
    while(this.length > 0) {
      this.pop();
    }
  }

  /**
   * @static from - The static from() method creates a new LinkedList instance
   * from an array or iterable object.
   *
   * @return {type}  Returns a new instance
   */
  static from(arr) {
    let list = new LinkedList();

    if (arr) {
      for(let v of arr) {
        list.push(v);
      }
    }

    return list;
  }


  /**
   * @static of - The static of() method creates a new LinkedList instance from
   * a variable number of parameter arguments.
   *
   * @return {type}  Returns a new LinkedList instance populated from the
   * arguments.
   */
  static of() {
    let list = new LinkedList();

    for (let v of arguments) {
      list.push(v);
    }

    return list;
  }

  /**
   * pop - The pop() method removes the last item at the end of the list.
   *
   * @return {type}  Returns the item popped from the end of the list.
   */
  pop() {
    let result = this._tail;
    if (this._length > 0) {
      result = this._tail;
      this._tail = result.previous;

      if (this._tail !== null) {
        this._tail.next = null;
      }

      result.next = null;
      result.previous = null;
      this._length--;

      if (this._length === 0) {
        this._head = null;
        this._tail = null;
      }
    }
    return result;
  }

  /**
   * push - The push() method adds and returns one item to the end of the list.
   *
   * @param  {type} value The value of the item to append to the end of the list.
   * @return {type}       Returns the new length of the list.
   */
  push(value) {
    let newNode = new Node();
    newNode.value = value;

    if (this._tail !== null) {
      this._tail.next = newNode;
      newNode.previous = this._tail;
      newNode.next = null;
      this._tail = newNode;
    }
    else {
      this._tail = newNode;
      this._head = newNode;
    }

    this._length++;

    return newNode;
  }

  /**
   * remove - The remove() method removes the given node from the LinkedList.
   *
   * @param  {type} node Reference to the node to remove from the list.
   * @return {type}      description
   */
  remove(node) {
    if (!Boolean(node)) {
      throw 'node parameter cannot be null or undefined.';
    }

    if (node.previous !== null) {
      node.previous.next = node.next;
    }
    else {
      this._head = node.next;
      if (this._head !== null) {
        this._head.previous = null;
      }
    }

    if (node.next !== null) {
      node.next.previous = node.previous;
    }
    else {
      this._tail = node.previous;
      if (this._tail !== null) {
        this._tail.next = null;
      }
    }

    if (this._length > 0) {
      this._length--;
    }
    node.previous = null;
    node.next = null;

    return node;
  }

  /**
   * shift - The shift() method removes the first item from the list.
   *
   * @return {type}  Returns the item that was removed from the front of the
   * list.
   */
  shift() {
    let result = null;
    if (this._length < 1) {
      return result;
    }
    else if (this._length === 1) {
      result = this._head;
      result.next = null;
      this._head = null;
      this._tail = null;
      this._length--;
    }
    else {
      result = this._head;
      this._head = result.next;
      this._head.previous = null;
      result.next = null;
      this._length--;
    }
    return result;
  }

  /**
   * unshift - The unshift() method inserts a new item to the front of the list.
   *
   * @param  {type} value The value of the item to insert.
   * @return {type}       Returns the newly inserted item.
   */
  unshift(value) {
    let result = null;
    if (this._length < 1) {
      result = this.push(value);
    }
    else {
      result = new Node();
      result.value = value;
      result.next = this._head;
      this._head = result;
      this._length++;
    }

    return result;
  }

  /**
   * toString - The toString() method returns the string representation of the
   * LinkedList instance.
   *
   * @return {type}  Returns the string representation of the LinkedList
   * instance.
   */
  toString() {
    let values = '';
    let item = this._head;
    let i = 0;
    while(item !== null) {
      if (i > 0) {
        values += ', ';
      }
      values += item.value;
      item = item.next;
      i++;
    }

    return `LinkedList: [${values}]`;
  }

  /**
   * Symbol.iterator - The Symbol.iterator generator function allows iterating
   * over the values contained in the LinkedList using the for...of statement.
   */
  *[Symbol.iterator]() {
    var curr = this.head;
    while(curr !== null) {
      yield curr;
      curr = curr.next;
    }
  }
}

module.exports = LinkedList;
