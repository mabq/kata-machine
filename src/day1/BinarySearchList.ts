export default function bs_list(haystack: number[], needle: number): boolean {
	let lo = 0
	let hi = haystack.length
	while (lo < hi) {
		const i = Math.floor(lo + (hi - lo) / 2)
		const v = haystack[i]
		if (v === needle) {
			return true
		} else if (v > needle) {
			hi = i
		} else {
			lo = i + 1
		}
	}
	return false
}
