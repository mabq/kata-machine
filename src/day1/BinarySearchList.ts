// Always treat one end as inclusive and the other as exclusive to avoid off-by-one bugs
export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0; // inclusive, the zero position contains a value
    let hi = haystack.length; // exclusive, the `arr.lenght` position does not contain a value
    let i;
    let value;
    while (low < hi) {
        i = low + Math.floor((hi - low) / 2); // second addend will be zero when `lo` and `hi` are next to each other
        value = haystack[i];
        if (value === needle) {
            return true;
        } else if (value < needle) {
            low = i + 1; // inclusive (like `0`). Avoid infinite loop.
        } else {
            hi = i; // exclusive (like `haystack.length`)
        }
    }
    return false;
}
