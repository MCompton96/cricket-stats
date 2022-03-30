export const isNullOrWhitespace = (str) => {
    return (!str || str.length === 0 || /^\s*$/.test(str));
}