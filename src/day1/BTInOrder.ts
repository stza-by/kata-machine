type Path<T> = T[];

const walk = <T>(node: BinaryNode<T> | null, path: Path<T>) => {
    if (!node) {
        return path;
    }

    walk(node.left, path);
    path.push(node.value);
    walk(node.right, path);

    return path;
};

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
