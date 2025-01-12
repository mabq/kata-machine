function get_possible_moves(maze: string[], start: Point) {
    let up,
        right,
        down,
        left = false;
    let char;
    if (start.y !== 0) {
        char = maze[start.y - 1].split("")[start.x];
        up = char === " ";
    }
    if (start.y !== maze.length - 1) {
        char = maze[start.y + 1].split("")[start.x];
        down = char === " ";
    }
    const row_items = maze[start.y].split("");
    if (start.x !== 0) {
        char = row_items[start.x - 1];
        left = char === " ";
    }
    if (start.x !== row_items.length - 1) {
        char = row_items[start.x + 1];
        right = char === " ";
    }
    return { up, right, down, left };
}

function get_next_point(maze: string[], start: Point, end: Point) {
    const prefy = end.y === start.y ? 0 : end.y > start.y ? 1 : -1;
    const prefx = end.x === start.x ? 0 : end.x > start.x ? 1 : -1;
    if (!prefy && !prefx) {
        return null; // we are already there
    }
    const { up, right, down, left } = get_possible_moves(maze, start);
    if (prefy) {
        if (prefy === 1 && down) {
            return { x: start.x, y: start.y + 1 };
        } else if (prefy === -1 && up) {
            return { x: start.x, y: start.y - 1 };
        }
    } else if (prefx) {
        if (prefx === 1 && right) {
            return { x: start.x + 1, y: start.y };
        } else if (prefx === -1 && left) {
            return { x: start.x - 1, y: start.y };
        }
    }
    // can not move in the preferenced direction, move whereever you can...
    if (up) {
        return { x: start.x, y: start.y - 1 };
    } else if (down) {
        return { x: start.x, y: start.y + 1 };
    } else if (right) {
        return { x: start.x + 1, y: start.y };
    } else {
        return { x: start.x + -1, y: start.y };
    }
}

function get_trail_maze(maze: string[], start: Point) {
    return maze.map((r, ri) => {
        return ri !== start.y
            ? r
            : r
                  .split("")
                  .map((e, ei) => (ei === start.x ? "o" : e))
                  .join("");
    });
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    // 1. wall
    // 2. visited (drop)
    // 3. offmap
    // 4. end
    const next_point = get_next_point(maze, start, end);
    if (!next_point) {
        return [start];
    }
    const trail_maze = get_trail_maze(maze, start);
    return [start, ...solve(trail_maze, wall, next_point, end)];
}
