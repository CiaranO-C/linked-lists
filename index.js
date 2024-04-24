import { LinkedList } from "./list.js";

const list = LinkedList();
for (let i = 0; i < 10; i++) {
  list.append(i);
}
list.toString(); //prints list in string format
console.log(list.size()); //logs length of list

// prepend new nodes to list
list.prepend("a");
list.prepend("b");
list.toString();
console.log(list.size());

// retrieve nodes by head, tail and index
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(0));
console.log(list.at(2));
console.log(list.at(6));

//pops tail node from list 
list.pop();
list.toString();
console.log(list.size());

//true/false if list contains value, indexes of nodes containing values
console.log(list.contains(4));
console.log(list.contains("a"));
console.log(list.find("a"));
console.log(list.find(3));
console.log(list.find("8"));

//inserts node with value at index
list.insertAt("g", 5);
list.toString();
console.log(list.size());

//removes node at index
list.removeAt(5);
list.toString();
console.log(list.size());
