// The test requires that we edit the array being passed as argument, so we
// play with indices instead of creating new sub-arrays.

function partition(arr: number[], start: number, end: number): number {
    // Does the sorting for the given section and returns the split index.
    // Take the last element as the pivot value.
    const pivot = arr[end];
    let pivot_index = start - 1;
    let tmp;
    for (let i = start; i <= end; ++i) {
        if (arr[i] <= pivot) {
            ++pivot_index;
            if (arr[i] < arr[pivot_index]) {
                tmp = arr[i];
                arr[i] = arr[pivot_index];
                arr[pivot_index] = tmp;
            }
        }
    }
    return pivot_index;
}

function qs(arr: number[], start: number, end: number): void {
    if (start >= end) {
        return;
    }
    const pivot_index = partition(arr, start, end);
    qs(arr, start, pivot_index - 1);
    qs(arr, pivot_index + 1, end);
}

export default function quick_sort(arr: number[]) {
    qs(arr, 0, arr.length - 1); // end is inclusive
}
