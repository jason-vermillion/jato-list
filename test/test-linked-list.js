const assert = require('assert');
const LinkedList = require('../index');

describe('LinkedList', function() {
  describe('#constructor()', function() {
    it('should create a new empty LinkedList()', function() {
      let list = new LinkedList();

      assert.equal(list.size, 0);
      assert.equal(list.head, null);
      assert.equal(list.tail, null);
      assert.equal(list.toString(), 'LinkedList: []');
    });
  });

  describe('#push()', function() {
    it('should push() a single item to an empty list', function() {
      let list = new LinkedList();
      let value = 'item 1';
      let n = list.push(value);

      assert.equal(list.size, 1);
      assert.equal(list.toString(), 'LinkedList: [item 1]');
      assert.equal(list.head.value, 'item 1');
      assert.equal(list.tail.value, 'item 1');
    });

    it('should push() two items to an empty list', function() {
      let list = new LinkedList();
      let n = list.push(0);
      n = list.push(1);

      assert.equal(list.size, 2);
      assert.equal(list.toString(), 'LinkedList: [0, 1]');
      assert.equal(list.head.value, 0);
      assert.equal(list.tail.value, 1);
    });

    it('should push() 10 items to empty list', function() {
      let list = new LinkedList();

      for (let i = 0; i < 10; i++) {
        list.push(i);
      }

      assert.equal(list.size, 10);
      assert.equal(list.head.value, 0);
      assert.equal(list.tail.value, 9);
      assert.equal(list.toString(), 'LinkedList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]');
    });
  });

  describe('#pop()', function() {
    it('should pop() one existing item', function() {
      let list = new LinkedList();
      list.push(0);
      let n = list.pop();

      assert.equal(list.size, 0);
      assert.equal(n.value, 0);
      assert.equal(list.toString(), 'LinkedList: []');
    });

    it('should pop() 5 of 10 items', function() {
      let list = new LinkedList();

      for (let i = 0; i < 10; i++) {
        list.push(i);
      }
      let n = list.pop();
      assert.equal(n.value, 9);
      list.pop();
      list.pop();
      list.pop();
      n = list.pop();

      assert.equal(n.value, 5);
      assert.equal(list.size, 5);
      assert.equal(list.head.value, 0);
      assert.equal(list.tail.value, 4);
      assert.equal(list.toString(), 'LinkedList: [0, 1, 2, 3, 4]');
    });
  });

  describe('#unshift()', function() {
    it('should unshift() a single item to the beginning of a list.', function() {
      let list = new LinkedList();

      let n = list.unshift(0);

      assert.equal(n.value, 0);
      assert.equal(list.size, 1);
      assert.equal(list.head.value, 0);
      assert.equal(list.tail.value, 0);
      assert.equal(list.toString(), 'LinkedList: [0]');
    });

    it('should unshift() two items.', function() {
      let list = new LinkedList();
      let n = list.unshift(1);
      n = list.unshift(0);

      assert.equal(n.value, 0);
      assert.equal(list.size, 2);
      assert.equal(list.head.value, 0);
      assert.equal(list.tail.value, 1);
      assert.equal(list.toString(), 'LinkedList: [0, 1]');
    });

    it('should unshift() 10 items.', function() {
      let list = new LinkedList();

      for (let i = 9; i >= 0; i--) {
        list.unshift(i);
      }

      assert.equal(list.size, 10);
      assert.equal(list.head.value, 0);
      assert.equal(list.tail.value, 9);
      assert.equal(list.toString(), 'LinkedList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]');
    });
  });

  describe('#shift()', function() {
    it('should shift() one existing item', function() {
      let list = new LinkedList();
      list.push(0);
      let n = list.shift();

      assert.equal(list.size, 0);
      assert.equal(n.value, 0);
      assert.equal(list.toString(), 'LinkedList: []');
    });

    it('should shift() 5 of 10 items', function() {
      let list = new LinkedList();

      for (let i = 0; i < 10; i++) {
        list.push(i);
      }
      // remove the first item from the list
      let n = list.shift();
      assert.equal(n.value, 0);
      list.shift();
      list.shift();
      list.shift();
      n = list.shift();

      assert.equal(n.value, 4);
      assert.equal(list.size, 5);
      assert.equal(list.head.value, 5);
      assert.equal(list.tail.value, 9);
      assert.equal(list.toString(), 'LinkedList: [5, 6, 7, 8, 9]');
    });
  });

  describe('#addAfter()', function() {
    it('should addAfter() two items to empty list', function() {
      let list = new LinkedList();
      let n = list.push('item 1');
      n = list.addAfter(list.tail, 'item 2');

      assert.equal(list.size, 2);
      assert.equal(list.head.value, 'item 1');
      assert.equal(list.tail.value, 'item 2');
      assert.equal(list.toString(), 'LinkedList: [item 1, item 2]');
    });

    it('should addAfter() 10 items to an empty list', function() {
      let list = new LinkedList();
      let n = list.push(0);
      for (let i = 1; i < 10; i++) {
        n = list.addAfter(list.tail, i);
      }

      assert.equal(list.size, 10);
      assert.equal(list.head.value, 0);
      assert.equal(list.tail.value, 9);
      assert.equal(list.toString(), 'LinkedList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]');
    });
  });

  describe('#remove()', function() {
    it('should remove() a single item', function() {
      let list = new LinkedList();

      let n = list.push(0);
      let d = list.remove(n);

      assert.equal(d.value, 0);
      assert.equal(list.size, 0);
      assert.equal(list.head, null);
      assert.equal(list.tail, null);
      assert.equal(list.toString(), 'LinkedList: []');
    });
  });
});
