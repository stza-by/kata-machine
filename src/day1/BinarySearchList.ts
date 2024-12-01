export default function bs_list(haystack: number[], needle: number): boolean {
    let result = false;

    let l = 0;
    let h = haystack.length;

    do {
        const m = Math.floor((l + h) / 2);
        const v = haystack[m];

        if (v === needle) {
            result = true;
            break;
        } else if (v > needle) {
            h = m;
        } else {
            l = m + 1;
        }
    } while (l < h);

    return result;
}
