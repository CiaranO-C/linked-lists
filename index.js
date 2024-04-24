function Node(value = null, next = null) {
  return {
    value,
    next,
  };
}

function LinkedList() {
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
    while(currentNode.next != null) {
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    previousNode.next = null;
    tail = previousNode;
    length--;
  }

  function contains(value) {
    let currentNode = head;
    while(currentNode != null){
        if(currentNode.value === value){
            return true;
        }
        currentNode = currentNode.next;
    }
    return false;
  }

  function find(value) {
    let currentNode = head;
    for(let i = 0; i < length; i++){
        if(currentNode.value === value){
            return i;
        }
        currentNode = currentNode.next;
    }
    return 'value not present';
  }

  function toString() {
    let list = "";

    if (head === null) {
      console.log("List is empty");
    } else {
      let currentNode = head;
      let currentValue = "";
      while (currentNode.next != null) {
        currentValue = `( ${currentNode.value} ) -> `;
        list += currentValue;
        currentNode = currentNode.next;
      }
      currentValue = `( ${currentNode.value} ) -> null`;
      list += currentValue;
      console.log(list);
    }
  }

  function insertAt(value, index) {
    let previousNode;
    let currentNode = head;
   for(let i = 0; i < index; i++){
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
    for(let i = 0; i < index; i++){
        previousNode = currentNode;
        currentNode = currentNode.next;
        followingNode = currentNode.next;
    }
    previousNode.next = followingNode;
    length--;
  }

  return { append, prepend, toString, getHead, getTail, at, pop, contains, find, insertAt, removeAt, size };
}

const list = LinkedList();
for (let i = 0; i < 10; i++) {
  list.append(i);
}
list.toString();
console.log(list.size());

list.prepend("a");
list.prepend("b");
list.toString();
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(0));
console.log(list.at(2));
console.log(list.at(6));
list.pop();
list.toString();
console.log(list.size());
console.log(list.contains(4));
console.log(list.contains('a'));
console.log(list.find('a'));
console.log(list.find(3));
console.log(list.find('8'));
list.toString();
console.log(list.size());
list.insertAt('g', 5);
list.toString();
console.log(list.size());
list.removeAt(5);
list.toString();
console.log(list.size());
