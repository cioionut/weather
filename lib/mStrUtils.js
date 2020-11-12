const removeDiacritics = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

const replaceSpace = (str, delim='-') => {
    return str.replace(/ /g, delim);
}

const formatForURL = (str, delim='-') => {
    return replaceSpace(removeDiacritics(str), delim).toLowerCase();
}

const checkTime = (i) => {
    return (i < 10) ? "0" + i : i;
}

module.exports = {
    formatForURL
}