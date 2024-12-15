const directions = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 },
];

function walk(
    maze: string[],
    wall: string,
    current: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    if (
        current.y < 0 ||
        current.y >= maze.length ||
        current.x < 0 ||
        current.x >= maze[0].length
    ) {
        return false;
    }

    if (maze[current.y][current.x] === wall) {
        return false;
    }

    if (seen[current.y][current.x]) {
        return false;
    }

    seen[current.y][current.x] = true;
    path.push(current);

    if (current.x === end.x && current.y === end.y) {
        return true;
    }

    for (const d of directions) {
        if (
            walk(
                maze,
                wall,
                { x: current.x + d.x, y: current.y + d.y },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = Array.from({ length: maze.length }).map(
        () => Array.from({ length: maze[0].length }).fill(false) as boolean[],
    );

    walk(maze, wall, start, end, seen, path);

    return path;
}
