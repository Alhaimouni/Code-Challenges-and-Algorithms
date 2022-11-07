'use strict';

function breadthFirst(root, target) {
  let queue = [];
  if (target >= root.value) {
    let arr = [];
    queue.push(root);
    while (queue.length) {
      let node = queue.shift();
      arr.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return arr;
  } else {
    let newRoot = root.left;
    return breadthFirst(newRoot, target);
  }
}

function findSum(binarySearchTree, target) {
  let array = breadthFirst(binarySearchTree, target);
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] < target) {
      let com = target - array[i];
      obj[com] = array[i];
    }
    if (obj[array[i + 1]]) {
      return true;
    }
  }
  return false;
}



module.exports = {
  breadthFirst,
  findSum
}