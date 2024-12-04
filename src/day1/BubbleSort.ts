export default function bubble_sort(arr: number[]): void {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let sorted = true;

        for (let j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                sorted = false;
            }
        }

        if (sorted) {
            break;
        }
    }
}
