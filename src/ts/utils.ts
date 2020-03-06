import {
    DefalutListType,
    ICompareFunction,
    IEqualsFunction,
    IDiffFunction
} from "./global.d";
export const DOES_NOT_EXIST = -1;
export enum Compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0
}
export const lesserEquals = <T>(a: T, b: T, compareFn: ICompareFunction<T>) => {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
};
export const biggerEquals = <T>(a: T, b: T, compareFn: ICompareFunction<T>) => {
    const comp = compareFn(a, b);
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
};
export const defaultCompare = <T>(a: T, b: T): number => {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};
export const defaultEquals = <T>(a: T, b: T): boolean => {
    return a === b;
};
export const defaultToString = (item: any): string => {
    if (item === null) {
        return "NULL";
    } else if (item === undefined) {
        return "UNDEFINED";
    } else if (typeof item === "string" || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
};
export const Swap = (array: any[], a: number, b: number) => {
    [array[a], array[b]] = [array[b], array[a]];
};
export const reverseCompare = <T>(
    compareFn: ICompareFunction<T>
): ICompareFunction<T> => (a, b) => compareFn(b, a);
export const defaultDiff = <T>(a: T, b: T): number => Number(a) - Number(b);
export const RandomList: number[] = [1, 2, 3, 4, 7, 5];
export const SortedList: number[] = [1, 2, 3, 4, 5, 7];
export const RandomLists: number[][] = [
    [1, 2, 3, 4, 7, 5],
    [3, 9, 8, 7, 5, 1, 2, 3],
    [30, 4, 8, 1, 9, 5, 10, 5, 9, 3, 7],
    [5, 8, 9, 7, 2, 3, 6, 4, 5, 1, 22, 88, 66, 102, 1024],
    [5, 9, 8, 7, 3, 2, 0, 1, 88, 5, 125, 98, 127, 888, 555]
];
export const SortedLists: number[][] = [
    [1, 2, 3, 4, 5, 7],
    [1, 2, 3, 3, 5, 7, 8, 9],
    [1, 3, 4, 5, 5, 7, 8, 9, 9, 10, 30],
    [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 22, 66, 88, 102, 1024],
    [0, 1, 2, 3, 5, 5, 7, 8, 9, 88, 98, 125, 127, 555, 888]
];
