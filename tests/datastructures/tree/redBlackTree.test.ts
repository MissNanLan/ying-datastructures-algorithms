import { RBNode } from 'core/node'
import { Colors } from 'core/utils'
import RedBlackTree from 'core/datastructures/tree/redBlackTree'

describe('RedBlackTree', () => {
    let tree: RedBlackTree<number>

    const assertNode = (node: RBNode<any>, key: any, color: Colors) => {
        expect(node.color).toEqual(color)
        expect(node.key).toEqual(key)
    }

    beforeEach(() => {
        tree = new RedBlackTree<number>()
    })

    it('starts empty', () => {
        expect(tree.getRoot()).toEqual(undefined)
    })

    it('inserts elements in the RedBlackTree', () => {
        expect(tree.getRoot()).toEqual(undefined)

        let node: RBNode<number>

        tree.insert(1)
        assertNode(tree.getRoot(), 1, Colors.BLACK)

        tree.insert(2)
        assertNode(tree.getRoot(), 1, Colors.BLACK)
        assertNode(tree.getRoot().right, 2, Colors.RED)

        tree.insert(3)
        assertNode(tree.getRoot(), 2, Colors.BLACK)
        assertNode(tree.getRoot().right, 3, Colors.RED)
        assertNode(tree.getRoot().left, 1, Colors.RED)

        tree.insert(4)
        assertNode(tree.getRoot(), 2, Colors.BLACK)
        assertNode(tree.getRoot().left, 1, Colors.BLACK)
        assertNode(tree.getRoot().right, 3, Colors.BLACK)
        assertNode(tree.getRoot().right.right, 4, Colors.RED)

        tree.insert(5)
        assertNode(tree.getRoot(), 2, Colors.BLACK)
        assertNode(tree.getRoot().left, 1, Colors.BLACK)
        node = tree.getRoot().right
        assertNode(node, 4, Colors.BLACK)
        assertNode(node.left, 3, Colors.RED)
        assertNode(node.right, 5, Colors.RED)

        tree.insert(6)
        assertNode(tree.getRoot(), 2, Colors.BLACK)
        assertNode(tree.getRoot().left, 1, Colors.BLACK)
        node = tree.getRoot().right
        assertNode(node, 4, Colors.RED)
        assertNode(node.left, 3, Colors.BLACK)
        assertNode(node.right, 5, Colors.BLACK)
        assertNode(node.right.right, 6, Colors.RED)

        tree.insert(7)
        assertNode(tree.getRoot(), 2, Colors.BLACK)
        assertNode(tree.getRoot().left, 1, Colors.BLACK)
        node = tree.getRoot().right
        assertNode(node, 4, Colors.RED)
        assertNode(node.left, 3, Colors.BLACK)
        assertNode(node.right, 6, Colors.BLACK)
        assertNode(node.right.right, 7, Colors.RED)
        assertNode(node.right.left, 5, Colors.RED)

        tree.insert(8)
        assertNode(tree.getRoot(), 4, Colors.BLACK)
        node = tree.getRoot().left
        assertNode(node, 2, Colors.RED)
        assertNode(node.left, 1, Colors.BLACK)
        assertNode(node.right, 3, Colors.BLACK)
        node = tree.getRoot().right
        assertNode(node, 6, Colors.RED)
        assertNode(node.left, 5, Colors.BLACK)
        assertNode(node.right, 7, Colors.BLACK)
        assertNode(node.right.right, 8, Colors.RED)

        tree.insert(9)
        assertNode(tree.getRoot(), 4, Colors.BLACK)
        node = tree.getRoot().left
        assertNode(node, 2, Colors.RED)
        assertNode(node.left, 1, Colors.BLACK)
        assertNode(node.right, 3, Colors.BLACK)
        node = tree.getRoot().right
        assertNode(node, 6, Colors.RED)
        assertNode(node.left, 5, Colors.BLACK)
        assertNode(node.right, 8, Colors.BLACK)
        assertNode(node.right.left, 7, Colors.RED)
        assertNode(node.right.right, 9, Colors.RED)

        tree.insert(10)
        assertNode(tree.getRoot(), 4, Colors.BLACK)
        node = tree.getRoot().left
        assertNode(node, 2, Colors.BLACK)
        assertNode(node.left, 1, Colors.BLACK)
        assertNode(node.right, 3, Colors.BLACK)
        node = tree.getRoot().right
        assertNode(node, 6, Colors.BLACK)
        assertNode(node.left, 5, Colors.BLACK)
        assertNode(node.right, 8, Colors.RED)
        assertNode(node.right.left, 7, Colors.BLACK)
        assertNode(node.right.right, 9, Colors.BLACK)
        assertNode(node.right.right.right, 10, Colors.RED)
    })
})
