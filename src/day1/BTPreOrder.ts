import Stack from "@code/Stack";

type Path<T> = T[];

const walk = <T>(node: BinaryNode<T> | null, path: Path<T>) => {
    if (!node) return path;

    path.push(node.value);

    walk(node.left, path);
    walk(node.right, path);

    return path;
};

const walkNotRecursive = <T>(node: BinaryNode<T>) => {
    const path: Path<T> = [];
    const stack = new Stack<BinaryNode<T>>();
    stack.push(node);

    while (stack.length) {
        const node = stack.pop();

        if (!node) continue;

        path.push(node.value);

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return path;
};

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path = walkNotRecursive(head);

    return path;
}
