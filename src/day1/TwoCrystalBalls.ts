export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpSize = Math.floor(Math.sqrt(breaks.length));

    let jumpIndex = jumpSize;
    while (jumpIndex < breaks.length) {
        if (breaks[jumpIndex]) break;

        jumpIndex += jumpSize;
    }

    for (let i = jumpIndex - jumpSize; i <= jumpIndex; i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
