import { Node } from './node'
import { Compare, defaultCompare } from '../utils'

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  search(key) {
  }
  insertNode(node, key) {
    if (this.compareFn(node.key, key) === Compare.LESS_THAN) {
      if (node.left === null) {
        
      }
    } else {

    }
  }
}

export default BinarySearchTree