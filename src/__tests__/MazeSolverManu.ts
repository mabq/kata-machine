import maze_solver from "@code/MazeSolver";

test("maze solver", function () {
    const maze = [
        "x xxxxxxxxxx",
        "x   x      x",
        "x x xx x x x",
        "x x    x x x",
        "xxxxxxxxxx x",
        "x          x",
        "xxxxx xxxxxx",
    ];

    const mazeResult = [
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 1, y: 3 },
        { x: 1, y: 2 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
        { x: 3, y: 1 },
        { x: 3, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 3 },
        { x: 5, y: 3 },
        { x: 6, y: 3 },
        { x: 6, y: 2 },
        { x: 6, y: 1 },
        { x: 5, y: 1 },
        { x: 6, y: 1 },
        { x: 7, y: 1 },
        { x: 8, y: 1 },
        { x: 8, y: 2 },
        { x: 8, y: 3 },
        { x: 8, y: 2 },
        { x: 8, y: 1 },
        { x: 9, y: 1 },
        { x: 10, y: 1 },
        { x: 10, y: 2 },
        { x: 10, y: 3 },
        { x: 10, y: 4 },
        { x: 10, y: 5 },
        { x: 9, y: 5 },
        { x: 8, y: 5 },
        { x: 7, y: 5 },
        { x: 6, y: 5 },
        { x: 5, y: 5 },
        { x: 5, y: 6 },
    ];

    // there is only one path through
    const result = maze_solver(maze, "x", { x: 1, y: 0 }, { x: 5, y: 6 });
    console.log(result);
    expect(drawPath(maze, result)).toEqual(drawPath(maze, mazeResult));
});

function drawPath(data: string[], path: Point[]) {
    const data2 = data.map((row) => row.split(""));
    path.forEach((p) => {
        if (data2[p.y] && data2[p.y][p.x]) {
            data2[p.y][p.x] = "*";
        }
    });
    return data2.map((d) => d.join(""));
}
