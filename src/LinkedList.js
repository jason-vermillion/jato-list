/**
 * Linked list node item.
 */
class Node {
  constructor() {
    this.previous = null;
    this.next = null;
    this.value = {};
  }
}


/**
 * Doubly linked list.
 */
class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  /**
   * get size - Read-only property for the number of elements in the linked
   * list.
   *
   * @return {type}  The number of elements in the list.
   */
  get size() {
    return this._size;
  }

  /**
   * push - Append a new item to the end of the list.
   *
   * @param  {type} value The value of the item to append to the end of the list.
   * @return {type}       Returns the new item appended to the end of the list.
   */
  push(value) {
    let newNode = new Node();
    newNode.value = value;

    if (this.tail !== null) {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      newNode.next = null;
      this.tail = newNode;
    }
    else {
      this.tail = newNode;
      this.head = newNode;
    }

    this._size++;

    return newNode;
  }

  /**
   * pop - Remove the last item at the end of the list.
   *
   * @return {type}  Returns the item popped from the end of the list.
   */
  pop() {
    let result = this.tail;
    if (this._size > 0) {
      result = this.tail;
      this.tail = result.previous;

      if (this.tail !== null) {
        this.tail.next = null;
      }

      result.next = null;
      result.previous = null;
      this._size--;

      if (this._size === 0) {
        this.head = null;
        this.tail = null;
      }
    }
    return result;
  }

  /**
   * unshift - Insert a new item to the beginning of the list.
   *
   * @param  {type} value The value of the item to insert.
   * @return {type}       Returns the newly inserted item.
   */
  unshift(value) {
    let result = null;
    if (this._size < 1) {
      result = this.push(value);
    }
    else {
      result = new Node();
      result.value = value;
      result.next = this.head;
      this.head = result;
      this._size++;
    }

    return result;
  }

  /**
   * shift - Remove the first item at the beginning of the list.
   *
   * @return {type}  Returns the item that was removed from the begging of the
   * list.
   */
  shift() {
    let result = null;
    if (this._size < 1) {
      return result;
    }
    else if (this._size === 1) {
      result = this.head;
      result.next = null;
      this.head = null;
      this.tail = null;
      this._size--;
    }
    else {
      result = this.head;
      this.head = result.next;
      this.head.previous = null;
      result.next = null;
      this._size--;
    }
    return result;
  }

  /**
   * addAfter - Add a new item after the given node.
   *
   * @param  {type} node  Add a new item after the node.
   * @param  {type} value value of the new item.
   * @return {type}       Returns the newly added node.
   */
  addAfter(node, value) {
    if (!Boolean(node)) {
      throw "node parameter cannot be null or undefined.";
    }

    let newNode = new Node();

    newNode.value = value;
    newNode.previous = node;
    newNode.next = node.next;
    node.next = newNode;

    if (newNode.previous === null) {
      this.head = newNode;
    }

    if (newNode.next === null) {
      this.tail = newNode;
    }

    this._size++;

    return newNode;
  }

  addBefore(node, value) {
    if (!Boolean(node)) {
      throw "node parameter cannot be null or undefined.";
    }
    let newNode = new Node();
    newNode.value = value;
    newNode.previous = node.previous;
    newNode.next = node;
    node.previous = newNode;

    if (newNode.previous === null) {
      this.head = newNode;
    }

    if (newNode.next === null) {
      this.tail = newNode;
    }

    this._size++;

    return newNode;
  }

  /**
   * remove - Remove the node from the LinkedList.
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
      this.head = node.next;
      if (this.head !== null) {
        this.head.previous = null;
      }
    }

    if (node.next !== null) {
      node.next.previous = node.previous;
    }
    else {
      this.tail = node.previous;
      if (this.tail !== null) {
        this.tail.next = null;
      }
    }

    if (this._size > 0) {
      this._size--;
    }
    node.previous = null;
    node.next = null;

    return node;
  }

  toString() {
    let values = '';
    let item = this.head;
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
}

module.exports = LinkedList;
