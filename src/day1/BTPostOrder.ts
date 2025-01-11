type Path<T> = T[];

const walk = <T>(node: BinaryNode<T> | null, path: Path<T>) => {
    if (!node) {
        return path;
    }

    walk(node.left, path);
    walk(node.right, path);
    path.push(node.value);

    return path;
};

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
