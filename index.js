export const valueOf = (() => {
    const is = Array.from({length: 126}).map((_, i) => i);
    const values = [].concat(
        NaN,
        -Infinity,
        is.map(i => -1 * 2 ** ((62 - i) / 6)),
        0,
        is.map(i => 2 ** ((i - 63) / 6)),
        Infinity,
    );
    return x => values[x + 128];
})();
