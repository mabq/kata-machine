//export default function bubble_sort(arr: number[]): void {
//    let limit = arr.length - 1;
//    let tmp;
//    while (limit > 0) {
//        for (let i = 0; i < limit; ++i) {
//            if (arr[i] > arr[i + 1]) {
//                tmp = arr[i + 1];
//                arr[i + 1] = arr[i];
//                arr[i] = tmp;
//            }
//        }
//        limit -= 1;
//    }
//}

//export default function bubble_sort(arr: number[]): void {
//    let tmp;
//    for (let limit = arr.length - 1; limit > 0; --limit) {
//        for (let j = 0; j < limit; ++j) {
//            if (arr[j] > arr[j + 1]) {
//                tmp = arr[j + 1];
//                arr[j + 1] = arr[j];
//                arr[j] = tmp;
//            }
//        }
//    }
//}

export default function bubble_sort(arr: number[]): void {
    let tmp;
    for (let i = 0; i < arr.length; ++i) {
        // -1 because we compare the current element to the next element and we don't want to go off the array
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}

