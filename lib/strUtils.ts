export const removeDiacritics = (str: String) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export const replaceSpace = (str: String, delim='-') => {
    return str.replace(/ /g, delim);
}