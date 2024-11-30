// export default function bubble_sort(arr: number[]): void {
//     let limit = arr.length;
//     while (limit > 1) {
//         for (let i = 0; i < limit - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 const temp = arr[i + 1];
//                 arr[i + 1] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//         limit -= 1;
//     }
// }

export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        // this loop is just a counter
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
