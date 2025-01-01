// A binary search would be faster but we can only break two balls. The fastest
// option is to do square root jumps until the first ball breaks, from then on
// we need to go back and do a linear search.
//
//export default function two_crystal_balls(breaks: boolean[]): number {
//    let jump = Math.floor(Math.sqrt(breaks.length)); // start with big jumps
//    let second_ball = false;
//    for (let i = jump; i < breaks.length; i += jump) {
//        if (breaks[i]) {
//            if (second_ball) {
//                return i;
//            }
//            second_ball = true;
//            i = i - jump - 1; // back to prev safe point, minus 1 because 1 will be added in the next loop
//            jump = 1; // from now on do little jumps
//        }
//    }
//    return -1;
//}

export default function two_crystal_balls(breaks: boolean[]): number {
    let sqrt = Math.floor(Math.sqrt(breaks.length)); // start with big jumps
    let i = sqrt;
    for (; i < breaks.length; i += sqrt) {
        if (breaks[i]) {
            break;
        }
    }
    // do this outside the loop, we might end up surpassing the end of the array
    // without hitting a true value near the end
    i -= sqrt;
    for (; i < breaks.length; i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
