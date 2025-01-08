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
    // The first loop must start at 1, otherwise we would go off the array
    // limit when we check `arr[j + 1]`.
    for (let i = 1; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}

