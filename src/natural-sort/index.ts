import naturalSort from 'javascript-natural-sort';
import { sort as timsort } from 'timsort';

/**
 * Sorts an array in place and returns a reference to the same array.
 *
 * @param array - The array to be sorted.
 * @param comparatorFunction - The function that determines the order of the
 * elements in the sorted array. It should return a negative value if the first
 * argument is less than the second argument, zero if they're equal, and a
 * positive value otherwise.
 * @returns The sorted array.
 */
export const sort = <T>(
    array: T[],
    comparatorFunction: (a: T, b: T) => number,
): T[] => {
    timsort(array, comparatorFunction);
    return array;
};

export const naturalSortComparatorFunction = naturalSort;
