const { Node } = require('../Node');

function isSame(tree1, tree2) {
  let queue = [];
  let queue2 = [];
  queue.push(tree1);
  queue2.push(tree2);
  if (tree1.left && tree2.left) {
    while (queue.length !== 0 && queue2.length !== 0) {
      let popped = queue.pop();
      let popped2 = queue2.pop();
      if (popped.value !== popped2.value) {
        return false;
      }
      if (popped.left) {
        queue.push(popped.left);
      }
      if (popped2.left) {
        queue2.push(popped2.left);
      }
      if (popped.right) {
        queue.push(popped.right);
      }
      if (popped2.right) {
        queue2.push(popped2.right);
      }
    }
  } else {
    return false;
  }
  return true;
}


module.exports = {
  isSame
};