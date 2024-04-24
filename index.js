function Node(value = null, next = null) {
  return {
    value,
    next,
  };
}

function LinkedList() {
  let index = 0;
  let head = null;

  function append(value) {
    if (head === null) {
      head = Node(value);
    } else {
      let currentNode = head;

      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = Node(value);     
    }
    console.log(head);
  }

  function prepend(value) {
    //adds a new node containing value to the start of the list
  }
  function size() {
    return index;
  }
  function getHead() {
    //returns the first node in the list
  }
  function tail() {
    //returns the tail node in the list
  }
  function at(index) {
    //returns the node at the given index
  }
  function pop() {
    //removes the last element from the list
  }
  function contains(value) {
    //returns true if value passed in is found in list. else false
  }
  function find(value) {
    //returns index of node containing value passed in, else null
  }
  function toString() {
    /*
        represents your LinkedList objects as strings, 
        so you can print them out and preview them in the console. 
        The format should be: ( value ) -> ( value ) -> ( value ) -> null
        */
  }
  function insertAt(value, index) {
    //inserts a new node with provided value at the given index
  }
  function removeAt(index) {
    //removes the node at the given index
  }

  return { append };
}

const list = LinkedList();
for(let i = 0; i<10; i++){
    list.append(i)
}

