export const valueOf = (() => {
    const vs = Array.from({length: 126}).map((_, i) => Math.pow(2, (i - 63) / 6));
    const values = [].concat(
        NaN,
        -Infinity,
        vs.map(v => -v).reverse(),
        0,
        vs,
        Infinity
    );
    return x => values[x + 128];
})();
