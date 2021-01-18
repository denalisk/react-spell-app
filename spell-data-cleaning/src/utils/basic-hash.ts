/**
 * A fast string hashing function for Node.JS. This algorithm is quite similar to djb2, by Dan Bernstein available freely.
 * returns a number between 0 and 4294967295 (inclusive).
 * @param targetString the string to hash
 */
export function basicHash(targetString: string): number {
    let hash = 5381,
        i = 0;

    while (i < targetString.length) {
        hash = (hash * 33) ^ targetString.charCodeAt(i);
        i++;
    }

    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
     * integers. Since we want the results to be always positive, convert the
     * signed int to an unsigned by doing an unsigned bitshift. */
    return (hash >>> 0);
}