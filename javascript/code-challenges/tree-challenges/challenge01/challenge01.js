'use strict';

const { Node } = require('../Node');




function constructTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let root = new Node(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);
  root.left = constructTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = constructTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
}

module.exports = { constructTree };