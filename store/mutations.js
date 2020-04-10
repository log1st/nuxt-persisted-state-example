export const restoreStoreModule = (state, {module, value}) => {
    const split = module.split('.');
    const last = split.pop();

    (split.length
        ? split.reduce((acc, cur) => acc[cur], state)
        : state)[last] = value;
}