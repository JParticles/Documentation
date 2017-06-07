import {languageList, language, isMobile} from 'store';

export const splitPath = (path) => {
    return path.charAt(0) == '/' ? path.substring(1) : path;
};

export const parseRouter = () => {
    const realHash = location.hash.split('/');
    let path = '/' + realHash[1];
    let hasLanguage = false;
    let language = '';

    if (realHash.length > 2) {
        if (languageList.indexOf(realHash[1]) == -1) {
            realHash.splice(0, 1);
        } else {
            hasLanguage = true;
            language = realHash[1];
            realHash.splice(0, 2);
        }
        path = '/' + realHash.join('/');
    }

    const split = path.split('#');
    path = split[0];

    return {
        hasLanguage,
        language,
        hash: split[1],
        path,
        fullPath: hasLanguage ? `/${language}/${splitPath(path)}` : path
    }
};

export const createHash = (language, path) => {
    return `#/${language}/${splitPath(path)}`;
};