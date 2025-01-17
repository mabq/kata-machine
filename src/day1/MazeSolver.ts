// See notes about recursion on the "Learning" repository.

const dir = [
    // x, y - avoids many if statements
    [0, -1], // up
    [1, 0], // right
    [0, 1], // down
    [-1, 0], // left
];

function walk(
    maze: boolean[][],
    current: Point,
    end: Point,
    path: Point[], // keeps track of the taken steps
): boolean {
    const { x, y } = current;

    // 1. Base case section - check the current point

    if (x === end.x && y === end.y) {
        // Goal! Add it to path and return true
        path.push(current);
        return true;
    }
    if (y < 0 || x < 0 || y >= maze.length || x >= maze[0].length) {
        // Current point is off the map
        return false;
    }
    if (maze[y][x] === false) {
        // Current point was previously visited
        return false;
    }

    // 2. Recursion section

    // 2.1. pre - executes on the way in
    path.push(current);

    maze[y][x] = false; // mark point as visited

    // 2.2. recurse
    for (let i = 0; i < dir.length; ++i) {
        const [x_dir, y_dir] = dir[i];
        const next = { x: x + x_dir, y: y + y_dir };
        if (walk(maze, next, end, path)) {
            // Once we reached the goal and return true (see base case), all
            // previous calls must also return true, so that the post section
            // below does not execute for any of them.
            return true;
        }
        // If walk returns false, keep trying with the remaining directions.
    }
    // If any of the four directions is valid, remove point from path and
    // go back to previous recursion iteration to keep trying the remaining
    // directions.

    // 2.3 post - executes on the way out
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const boolean_maze = maze.map((str) =>
        str.split("").map((char) => (char === wall ? false : true)),
    );
    // `path` stores the results, defining it here allow us to edit it through
    // recursion calls without returning it, so that we can return a boolean to
    // determine if we should keep recurring or not.
    const path: Point[] = [];
    walk(boolean_maze, start, end, path);
    return path;
}
