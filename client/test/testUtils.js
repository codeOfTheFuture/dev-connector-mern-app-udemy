/**
 * Return node(s) with the given data-test attribute.
 * @param {ShalloWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} value - Value of data-test attribute for search
 * @returns {ShalloWrapper}
 */

export const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test='${value}']`);
