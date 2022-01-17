import { ImportDeclaration } from '@babel/types';

import { naturalSortComparatorFunction, sort } from '../natural-sort';

/**
 * This function returns import nodes with alphabetically sorted module
 * specifiers
 * @param node Import declaration node
 */
export const getSortedImportSpecifiers = (node: ImportDeclaration) => {
    sort(node.specifiers, (a, b) => {
        if (a.type !== b.type) {
            return a.type === 'ImportDefaultSpecifier' ? -1 : 1;
        }

        return naturalSortComparatorFunction(a.local.name, b.local.name);
    });
    return node;
};
