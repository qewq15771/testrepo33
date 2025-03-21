export class Helper {
    static maximumDecimalPlacesForCoverageQuotas: number;

    static roundNumber(number: number): number {
        return Math.floor(number * Math.pow(10, Helper.maximumDecimalPlacesForCoverageQuotas)) / Math.pow(10, Helper.maximumDecimalPlacesForCoverageQuotas);
    }

    static getNthOrLastIndexOf(text: string, substring: string, n: number): number {
        const times: number = 0;
        const index: number = -1;
        const currentIndex: number = -1;

        while (times < n) {
            currentIndex = text.indexOf(substring, index + 1);
            if (currentIndex === -1) {
                break;
            } else {
                index = currentIndex;
            }

            times++;
        }

        return index;
    }
}