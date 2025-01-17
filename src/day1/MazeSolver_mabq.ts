export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    // No need to actually use the data structures passed as input. Transform
    // the string[] into a number[][]. This makes all other functions simpler
    // and faster. At the beginning, everything is just walls (Infinity) or
    // empty characters (0).
    const number_maze = maze.map((str) =>
        str.split("").map((char) => (char === wall ? Infinity : 0)),
    );
    const result = local_solve(number_maze, start, end);
    console.log(result);
    return result;
}

function local_solve(maze: number[][], current: Point, end: Point): Point[] {
    const result = calc_step(maze, current, end);
    if (result === null) {
        return [current];
    }
    // For every new iteration we pass an updated maze and starting position
    maze[current.y][current.x] = result.mark;
    return [current, ...local_solve(maze, result.next, end)];
}

function calc_step(
    maze: number[][],
    current: Point,
    end: Point,
): null | { next: Point; mark: number } {
    if (current.x === end.x && current.y === end.y) {
        // the goal has been reached, the job is done!
        return null;
    }

    const r1 = rank_coordinates(current, end);
    const r2 = rank_neighbors(maze, current);
    const rankings = r1.map((v, i) => v + r2[i]);

    let index = 0; // index of lowest value
    let infinity_count = 0;
    rankings.forEach((v, i) => {
        if (v < rankings[index]) {
            index = i;
        }
        if (v === Infinity) {
            infinity_count += 1;
        }
    });

    // Visited spots get 4 points (preference over rank_coordinates)
    const mark =
        infinity_count >= 3 ? Infinity : maze[current.y][current.x] + 4;

    const [xDir, yDir] = dir[index];
    const next = {
        x: current.x + xDir,
        y: current.y + yDir,
    };

    return { next, mark };
}

function rank_coordinates(current: Point, end: Point): number[] {
    // Assigns a ranking from 0 to 3 (lower is better) to all cardinal
    // directions, based only on current and end points.
    const delta_x = end.x - current.x;
    const delta_y = end.y - current.y;
    let ranking;
    // Priorityze longest remaining path
    if (Math.abs(delta_y) >= Math.abs(delta_x)) {
        // Must be clockwise: [up, right, down, left]
        if (delta_y < 0) {
            if (delta_x < 0) {
                ranking = [0, 3, 2, 1];
            } else {
                ranking = [0, 1, 2, 3];
            }
        } else {
            if (delta_x < 0) {
                ranking = [2, 3, 0, 1];
            } else {
                ranking = [2, 1, 0, 3];
            }
        }
    } else {
        if (delta_x < 0) {
            if (delta_y < 0) {
                ranking = [1, 2, 3, 0];
            } else {
                ranking = [3, 2, 1, 0];
            }
        } else {
            if (delta_y < 0) {
                ranking = [1, 0, 3, 2];
            } else {
                ranking = [3, 0, 1, 2];
            }
        }
    }
    return ranking;
}

function rank_neighbors(maze: number[][], current: Point): number[] {
    const { x, y } = current;

    const bottom_limit = maze.length - 1;
    const right_limit = maze[0].length - 1; // all rows are the same length

    // Must be clockwise: [up, right, down, left]
    return [
        current.y === 0 ? Infinity : maze[y - 1][x], // up
        current.x === right_limit ? Infinity : maze[y][x + 1], // right
        current.y === bottom_limit ? Infinity : maze[y + 1][x], // down
        current.x === 0 ? Infinity : maze[y][x - 1], // left
    ];
}

const dir = [
    [0, -1], // up
    [1, 0], // right
    [0, 1], // down
    [-1, 0], // left
];
