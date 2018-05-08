
const assert = require('assert');
const LinkedList = require('../index');

const LIST_EMPTY = 'LinkedList: []';
const LIST_ONE = 'LinkedList: [0]';
const LIST_TWO = 'LinkedList: [0, 1]';
const LIST_FIVE = 'LinkedList: [0, 1, 2, 3, 4]';
const LIST_TEN = 'LinkedList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]';

describe('LinkedList', function() {

  describe('#constructor()', function() {
    it('should create a new empty LinkedList().', function() {
      let list = new LinkedList();

      assert.equal(list.length, 0, 'list.length');
      assert.equal(list.head, null, 'list.head');
      assert.equal(list.tail, null, 'list.tail');
      assert.equal(list.toString(), LIST_EMPTY, 'list.toString()');
    });
  });

  describe('#from()', function() {
    it('should from() to create an empty list from null.', function() {
      let list = LinkedList.from();

      assert.equal(list.length, 0, 'list.length');
      assert.equal(list.toString(), LIST_EMPTY, 'list.toString()');
      assert.equal(list.head, null, 'list.head.value');
      assert.equal(list.tail, null, 'list.tail.value');
    });

    it('should from() to create an empty list from an empty Array.', function() {
      let list = LinkedList.from([]);

      assert.equal(list.length, 0, 'list.length');
      assert.equal(list.toString(), LIST_EMPTY, 'list.toString()');
      assert.equal(list.head, null, 'list.head.value');
      assert.equal(list.tail, null, 'list.tail.value');
    });

    it('should from() to create a single item list.', function() {
      let list = LinkedList.from([0]);

      assert.equal(list.length, 1, 'list.length');
      assert.equal(list.toString(), LIST_ONE, 'list.toString()');
      assert.equal(list.head.value, 0, 'list.head.value');
      assert.equal(list.tail.value, 0, 'list.tail.value');
    });

    it('should from() to create a 10 item list.', function() {
      let list = LinkedList.from([0,1,2,3,4,5,6,7,8,9]);

      assert.equal(list.length, 10, 'list.length');
      assert.equal(list.head.value, 0, 'list.head.value');
      assert.equal(list.tail.value, 9, 'list.tail.value');
      assert.equal(list.toString(), LIST_TEN, 'list.toString()');
    });
  });

  describe('#of()', function() {
    it('should of() to create an empty list.', function() {
      let list = LinkedList.of();

      assert.equal(list.length, 0, 'list.length');
      assert.equal(list.toString(), LIST_EMPTY, 'list.toString()');
      assert.equal(list.head, null, 'list.head.value');
      assert.equal(list.tail, null, 'list.tail.value');
    });

    it('should of() to create a single item list.', function() {
      let list = LinkedList.of(0);

      assert.equal(list.length, 1, 'list.length');
      assert.equal(list.toString(), LIST_ONE, 'list.toString()');
      assert.equal(list.head.value, 0, 'list.head.value');
      assert.equal(list.tail.value, 0, 'list.tail.value');
    });

    it('should of() to create a 10 item list.', function() {
      let list = LinkedList.of(0,1,2,3,4,5,6,7,8,9);

      assert.equal(list.length, 10, 'list.length');
      assert.equal(list.head.value, 0, 'list.head.value');
      assert.equal(list.tail.value, 9, 'list.tail.value');
      assert.equal(list.toString(), LIST_TEN, 'list.toString()');
    });
  });

  describe('#push()', function() {
    it('should push() a single item to an empty list.', function() {
      let list = new LinkedList();
      let value = 0;
      let n = list.push(value);

      assert.equal(list.length, 1, 'list.length');
      assert.equal(list.toString(), LIST_ONE, 'list.toString()');
      assert.equal(list.head.value, 0, 'list.head.value');
      assert.equal(list.tail.value, 0, 'list.tail.value');
    });

    it('should push() two items to an empty list.', function() {
      let list = new LinkedList();
      let n = list.push(0);
      n = list.push(1);

      assert.equal(list.length, 2, 'list.length');
      assert.equal(list.toString(), LIST_TWO, 'list.toString()');
      assert.equal(list.head.value, 0, 'list.head.value');
      assert.equal(list.tail.value, 1, 'list.tail.value');
    });

    it('should push() 10 items to an empty list.', function() {
      let list = new LinkedList();

      for (let i = 0; i < 10; i++) {
        list.push(i);
      }

      assert.equal(list.length, 10, 'list.length');
      assert.equal(list.head.value, 0, 'list.head.value');
      assert.equal(list.tail.value, 9, 'list.tail.value');
      assert.equal(list.toString(), LIST_TEN, 'list.toString()');
    });
  });

  describe('#pop()', function() {
    it('should pop() one existing item.', function() {
      let list = new LinkedList();
      list.push(0);
      let n = list.pop();

      assert.equal(list.length, 0, 'list.length');
      assert.equal(n.value, 0, 'n.value');
      assert.equal(list.toString(), LIST_EMPTY, 'list.toString()');
    });

    it('should pop() 5 of 10 items.', function() {
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

      assert.equal(n.value, 5, 'n.value');
      assert.equal(list.length, 5, 'list.length');
      assert.equal(list.head.value, 0, 'list.head.value');
      assert.equal(list.tail.value, 4, 'list.tail.value');
      assert.equal(list.toString(), LIST_FIVE, 'list.toString()');
    });
  });

  describe('#unshift()', function() {
    it('should unshift() a single item to the beginning of a list.', function() {
      let list = new LinkedList();

      let n = list.unshift(0);

      assert.equal(n.value, 0);
      assert.equal(list.length, 1);
      assert.equal(list.head.value, 0);
      assert.equal(list.tail.value, 0);
      assert.equal(list.toString(), LIST_ONE);
    });

    it('should unshift() two items.', function() {
      let list = new LinkedList();
      let n = list.unshift(1);
      n = list.unshift(0);

      assert.equal(n.value, 0);
      assert.equal(list.length, 2);
      assert.equal(list.head.value, 0);
      assert.equal(list.tail.value, 1);
      assert.equal(list.toString(), LIST_TWO);
    });

    it('should unshift() 10 items.', function() {
      let list = new LinkedList();

      for (let i = 9; i >= 0; i--) {
        list.unshift(i);
      }

      assert.equal(list.length, 10);
      assert.equal(list.head.value, 0);
      assert.equal(list.tail.value, 9);
      assert.equal(list.toString(), LIST_TEN);
    });
  });

  describe('#shift()', function() {
    it('should shift() one existing item.', function() {
      let list = new LinkedList();
      list.push(0);
      let n = list.shift();

      assert.equal(list.length, 0, 'list.length');
      assert.equal(n.value, 0, 'n.value');
      assert.equal(list.toString(), LIST_EMPTY, 'list.toString()');
    });

    it('should shift() 5 of 10 items.', function() {
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

      assert.equal(n.value, 4, 'n.value');
      assert.equal(list.length, 5, 'list.length');
      assert.equal(list.head.value, 5, 'list.head.value');
      assert.equal(list.tail.value, 9, 'list.tail.value');
      assert.equal(list.toString(), 'LinkedList: [5, 6, 7, 8, 9]', 'list.toString()');
    });
  });

  describe('#addAfter()', function() {
    it('should addAfter() two items to an empty list', function() {
      let list = new LinkedList();
      let n = list.push('item 1');
      n = list.addAfter(list.tail, 'item 2');

      assert.equal(list.length, 2);
      assert.equal(list.head.value, 'item 1');
      assert.equal(list.tail.value, 'item 2');
      assert.equal(list.toString(), 'LinkedList: [item 1, item 2]');
    });

    it('should addAfter() 10 items to tail of list', function() {
      let list = new LinkedList();
      let n = list.push(0);
      for (let i = 1; i < 10; i++) {
        n = list.addAfter(list.tail, i);
      }

      assert.equal(list.length, 10);
      assert.equal(list.head.value, 0);
      assert.equal(list.tail.value, 9);
      assert.equal(list.toString(), LIST_TEN);
    });

    it('should addAfter() 10 items to head of list', function() {
      let list = new LinkedList();
      let inserted = list.push(0);
      for (let i = 9; i > 0; i--) {
        inserted = list.addAfter(list.head, i);
      }

      assert.equal(inserted.value, 1, 'inserted.value');
      assert.equal(list.length, 10);
      assert.equal(list.head.value, 0);
      assert.equal(list.tail.value, 9);
      assert.equal(list.toString(), LIST_TEN);
    });

    it('should addAfter() 1 item to the middle of a list.', function() {
      let list = LinkedList.from([0, 1, 3, 4]);
      let inserted = list.addAfter(list.head.next, 2);

      assert.equal(inserted.value, 2, 'inserted.value');
      assert.equal(list.length, 5);
      assert.equal(list.head.value, 0);
      assert.equal(list.tail.value, 4);
      assert.equal(list.toString(), LIST_FIVE);
    });

  });

  describe('#addBefore()', function() {
    it('should addBefore() two items to an empty list.', function() {
      let list = new LinkedList();
      let n = list.push(1);
      n = list.addBefore(list.tail, 0);

      assert.equal(list.length, 2, 'list.length');
      assert.equal(list.head.value, 0, 'list.head.value');
      assert.equal(list.tail.value, 1, 'list.tail.value');
      assert.equal(list.toString(), LIST_TWO, 'list.toString()');
    });

    it('should addBefore() one item to before the tail of 4 item list.', function() {
      let list = LinkedList.from([0, 1, 2, 4]);
      let inserted = list.addBefore(list.tail, 3);

      assert.equal(inserted.value, 3, 'inserted.value');
      assert.equal(list.length, 5, 'list.length');
      assert.equal(list.head.value, 0, 'list.head.value');
      assert.equal(list.tail.value, 4, 'list.tail.value');
      assert.equal(list.toString(), LIST_FIVE, 'list.toString()');
    });

    it('should addBefore() 10 items to an empty list.', function() {
      let list = new LinkedList();
      let n = list.push(9);
      for (let i = 8; i >= 0; i--) {
        n = list.addBefore(list.head, i);
      }

      assert.equal(list.length, 10, 'list.length');
      assert.equal(list.head.value, 0, 'list.head.value');
      assert.equal(list.tail.value, 9, 'list.tail.value');
      assert.equal(list.toString(), LIST_TEN, 'list.toString()');
    });
  });

  describe('#remove()', function() {
    it('should remove() a single item.', function() {
      let list = new LinkedList();

      let n = list.push(0);
      let d = list.remove(n);

      assert.equal(d.value, 0, 'd.value');
      assert.equal(list.length, 0, 'list.length');
      assert.equal(list.head, null, 'list.head');
      assert.equal(list.tail, null, 'list.tail');
      assert.equal(list.toString(), LIST_EMPTY, 'list.toString()');
    });

    it('should remove() from the middle of the list.', function() {
      let list = new LinkedList();

      list.push(0);
      let n = list.push(1);
      list.push(2);
      let d = list.remove(n);

      assert.equal(d.value, 1, 'd.value');
      assert.equal(list.length, 2, 'list.length');
      assert.equal(list.head.value, 0, 'list.head.value');
      assert.equal(list.tail.value, 2, 'list.tail.value');
      assert.equal(list.toString(), 'LinkedList: [0, 2]', 'list.toString()');
    });

    it('should remove() from the front of the list.', function() {
      let list = new LinkedList();

      let n = list.push(0);
      list.push(1);
      list.push(2);
      let d = list.remove(n);

      assert.equal(d.value, 0, 'd.value');
      assert.equal(list.length, 2, 'list.length');
      assert.equal(list.head.value, 1, 'list.head.value');
      assert.equal(list.tail.value, 2, 'list.tail.value');
      assert.equal(list.toString(), 'LinkedList: [1, 2]', 'list.toString()');
    });

    it('should remove() from the end of the list.', function() {
      let list = new LinkedList();

      list.push(0);
      list.push(1);
      let n = list.push(2);
      let d = list.remove(n);

      assert.equal(d.value, 2, 'd.value');
      assert.equal(list.length, 2, 'list.length');
      assert.equal(list.head.value, 0, 'list.head.value');
      assert.equal(list.tail.value, 1, 'list.tail.value');
      assert.equal(list.toString(), LIST_TWO, 'list.toString()');
    });
  });

  describe('#*[Symbol.iterator]', function() {
    it('should iterate over an empty list.', function() {
      let list = new LinkedList();
      let count = 0;

      // loop over the nodes of the list using the list.Symbol.iterator function.
      for (let n of list) {
        count++;
      }

      assert.equal(count, 0, 'count');
      assert.equal(list.length, 0, 'list.length');
      assert.equal(list.head, null, 'list.head');
      assert.equal(list.tail, null, 'list.tail');
      assert.equal(list.toString(), LIST_EMPTY, 'list.toString()');
    });

    it('should iterate over a list of 1 item.', function() {
      let list = new LinkedList();
      let count = 0;
      let items = '';

      list.push(0);

      // loop over the nodes of the list using the list.Symbol.iterator function.
      let i = 0;
      for (let n of list) {
        items += (i > 0) ? ', ' + n.value : n.value;
        count++;
        i++;
      }
      items = `LinkedList: [${items}]`;

      assert.equal(count, 1, 'count');
      assert.equal(list.length, 1, 'list.length');
      assert.equal(list.head, list.tail, 'list.head');
      assert.equal(list.toString(), LIST_ONE, 'list.toString()');
      assert.equal(list.toString(), items, 'items');
    });

    it('should iterate over a list of 10 items.', function() {
      let list = new LinkedList();
      let count = 0;
      let items = '';

      for (let i = 0; i < 10; i++) {
        list.push(i);
      }

      // loop over the nodes of the list using the list.Symbol.iterator function.
      let i = 0;
      for (let n of list) {
        items += (i > 0) ? ', ' + n.value : n.value;
        count++;
        i++;
      }
      items = `LinkedList: [${items}]`;

      assert.equal(count, 10, 'count');
      assert.equal(list.length, 10, 'list.length');
      assert.equal(list.head.value, 0, 'list.head.value');
      assert.equal(list.tail.value, 9, 'list.tail.value');
      assert.equal(list.toString(), LIST_TEN, 'list.toString()');
      assert.equal(list.toString(), items, 'items');
    });

  });
});
