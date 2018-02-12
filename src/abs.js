const dv = new DataView(new ArrayBuffer(256));
const is = Array.from({
    length: 127
}).map((_, i) => i + 1);
const vs = [].concat(-128, is.concat().reverse(), 0, is);
for (let i = 0; i < 256; ++i) {
    dv.setInt8(i, vs[i]);
}
export const abs = index => dv.getInt8(index + 128);
