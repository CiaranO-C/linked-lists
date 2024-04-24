import { Node } from "./nodes.js";

export function LinkedList() {
  let length = 0;
  let head = null;
  let tail = null;

  function append(value) {
    let node = Node(value);

    if (head === null) {
      head = node;
      tail = node;
    } else {
      let currentNode = head;

      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      tail = node;
    }
    length++;
  }

  function prepend(value) {
    if (head === null) {
      head = Node(value);
    } else {
      let previousHead = head;
      head = Node(value, previousHead);
    }
    length++;
  }

  function size() {
    return length;
  }

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function at(index) {
    let currentNode = head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  function pop() {
    let previousNode;
    let currentNode = head;
    while (currentNode.next != null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
    tail = previousNode;
    length--;
  }

  function contains(value) {
    let currentNode = head;
    while (currentNode != null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  function find(value) {
    let currentNode = head;
    for (let i = 0; i < length; i++) {
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.next;
    }
    return "value not present";
  }

  function toString() {
    let list = "";

    if (head === null) {
      console.log("List is empty");
    } else {
      let currentNode = head;
      let currentValue = "";
      while (currentNode != null) {
        currentValue = `( ${currentNode.value} ) -> `;
        list += currentValue;
        currentNode = currentNode.next;
      }
      list += 'null';
      console.log(list);
    }
  }

  function insertAt(value, index) {
    let previousNode;
    let currentNode = head;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = Node(value, currentNode);
    length++;
  }

  function removeAt(index) {
    let previousNode;
    let currentNode = head;
    let followingNode;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      followingNode = currentNode.next;
    }
    previousNode.next = followingNode;
    length--;
  }

  return {
    append,
    prepend,
    toString,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
    size,
  };
}
