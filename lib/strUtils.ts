export const removeDiacritics = (str: String) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export const replaceSpace = (str: String, delim='-') => {
    return str.replace(/ /g, delim);
}

export const formatForURL = (str: String, delim='-') => {
    return replaceSpace(removeDiacritics(str), delim).toLowerCase();
}

export const checkTime = (i: Number) => {
    return (i < 10) ? "0" + i : i;
}

export const capitalizeFirstL = (word: String) => word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word;