function preference_ranking(current: Point, end: Point) {
    // preference ranking goes from 0..3, lower being better
    const xDelta = end.x - current.x;
    const yDelta = end.y - current.y;
    let ranking;
    // prefer longest remaining path, when equal prefer vertical movement
    if (Math.abs(yDelta) >= Math.abs(xDelta)) {
        if (yDelta < 0) {
            if (xDelta < 0) {
                ranking = { u: 0, l: 1, d: 2, r: 3 };
            } else {
                ranking = { u: 0, r: 1, d: 2, l: 3 };
            }
        } else {
            if (xDelta < 0) {
                ranking = { d: 0, l: 1, u: 2, r: 3 };
            } else {
                ranking = { d: 0, r: 1, u: 2, l: 3 };
            }
        }
    } else {
        if (xDelta < 0) {
            if (yDelta < 0) {
                ranking = { l: 0, u: 1, r: 2, d: 3 };
            } else {
                ranking = { l: 0, d: 1, r: 2, u: 3 };
            }
        } else {
            if (yDelta < 0) {
                ranking = { r: 0, u: 1, l: 2, d: 3 };
            } else {
                ranking = { r: 0, d: 1, l: 2, u: 3 };
            }
        }
    }
    return ranking;
}

function neighbor_to_number(value: any, wall: string): number {
    // neigbor ranking is a number, lower is better
    // matrix offset, walls, or dead ends will be represented with Infinity
    return value === null || value === wall
        ? Infinity // sentinel value denoting that you cannot go there
        : typeof value === "number"
          ? value
          : 0; // empty space means we havn't been there, so 0
}

function neighbors_ranking(maze: string[], wall: string, current: Point) {
    const row_items = maze[current.y].split("");

    const yLimit = maze.length - 1;
    const xLimit = row_items.length - 1;

    // null represents matrix offset (see `neighbor_to_number`)
    const up =
        current.y === 0 ? null : maze[current.y - 1].split("")[current.x];
    const down =
        current.y === yLimit ? null : maze[current.y + 1].split("")[current.x];
    const left = current.x === 0 ? null : row_items[current.x - 1];
    const right = current.x === xLimit ? null : row_items[current.x + 1];

    return {
        u: neighbor_to_number(up, wall),
        d: neighbor_to_number(down, wall),
        r: neighbor_to_number(right, wall),
        l: neighbor_to_number(left, wall),
    };
}

function get_direction(
    maze: string[],
    wall: string,
    current: Point,
    end: Point,
) {
    const a = preference_ranking(current, end);
    const b = neighbors_ranking(maze, wall, current);
    const unsorted = [
        { up: a.u + b.u },
        { down: a.d + b.d },
        { left: a.l + b.l },
        { right: a.r + b.r },
    ];
}

// ...mark with 4 to last visited point
// ...mark with infinity when it is a dead end

//function get_next_point(maze: string[], start: Point, end: Point) {
//    const prefy = end.y === start.y ? 0 : end.y > start.y ? 1 : -1;
//    const prefx = end.x === start.x ? 0 : end.x > start.x ? 1 : -1;
//    if (!prefy && !prefx) {
//        return null; // we are already there
//    }
//    const { up, right, down, left } = get_possible_moves(maze, start);
//    if (prefy === 1) {
//        if (down) {
//            return { x: start.x, y: start.y + 1 };
//        } else if () {
//
//        }else if () {
//
//        }else if () {
//
//        }else if () {
//
//        }
//    } else if (prefy === -1 && up) {
//        return { x: start.x, y: start.y - 1 };
//    }
//    if (prefx) {
//        if (prefx === 1 && right) {
//            return { x: start.x + 1, y: start.y };
//        } else if (prefx === -1 && left) {
//            return { x: start.x - 1, y: start.y };
//        }
//    }
//    // can not move in the preferenced direction, move whereever you can...
//    if (up) {
//        return { x: start.x, y: start.y - 1 };
//    } else if (down) {
//        return { x: start.x, y: start.y + 1 };
//    } else if (right) {
//        return { x: start.x + 1, y: start.y };
//    } else {
//        return { x: start.x + -1, y: start.y };
//    }
//}

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
