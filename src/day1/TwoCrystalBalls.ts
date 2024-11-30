export default function two_crystal_balls(breaks: boolean[]): number {
    const offset = Math.ceil(Math.sqrt(breaks.length));

    let i = offset;
    for (; i < breaks.length; i += offset) {
        if (breaks[i]) {
            i -= offset;
            break;
        }
    }

    for (let j = 0; j < offset && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1; // centinel value
}

