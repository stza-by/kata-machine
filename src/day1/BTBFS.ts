import Queue from "@code/Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    let found = false;

    const queue = new Queue<BinaryNode<number>>();

    queue.enqueue(head);

    while (queue.length) {
        const node = queue.deque();

        if (!node) continue;

        if (node.value === needle) {
            found = true;
            break;
        }

        if (node.left) queue.enqueue(node.left);
        if (node.right) queue.enqueue(node.right);
    }

    return found;
}
