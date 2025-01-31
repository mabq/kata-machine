import quick_sort from "@code/QuickSort";

test("quick-sort", function () {
    //const arr1 = [9, 3, 7, 4, 69, 420, 42];
    //quick_sort(arr1);
    //expect(arr1).toEqual([3, 4, 7, 9, 42, 69, 420]);

    const arr2 = [3, 6, 1, 4, 7, 5, 0, 2];
    quick_sort(arr2);
    expect(arr2).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);

    const arr3 = [
        87, 24, 66, 12, 100, 46, 79, 35, 92, 11, 78, 56, 34, 88, 45, 71, 30, 63,
        82, 51, 97, 38, 15, 75, 27, 70, 41, 94, 20, 58, 85, 33, 73, 48, 64, 25,
        82, 54, 37, 90, 14, 77, 59, 22, 68, 41, 97, 31, 84, 50, 95, 28, 71, 42,
        87, 21, 61, 74, 35, 89, 17, 67, 53, 44, 79, 24, 95, 30, 63, 51, 77, 39,
        85, 18, 67, 46, 93, 27, 72, 33, 89, 15,
    ];
    quick_sort(arr3);
    expect(arr3).toEqual(arr3.sort((a, b) => a - b));
});
