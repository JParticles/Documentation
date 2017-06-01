import {languageList, language, isMobile} from 'store';

export const splitPath = (path) => {
    return path.charAt(0) == '/' ? path.substring(1) : path;
};

export const parseRouter = () => {
    const hash = location.hash.split('/');
    let path = '/' + hash[1];
    let hasLanguage = false;
    let language = '';

    if (hash.length > 2) {
        if (languageList.indexOf(hash[1]) == -1) {
            hash.splice(0, 1);
        } else {
            hasLanguage = true;
            language = hash[1];
            hash.splice(0, 2);
        }
        path = '/' + hash.join('/');
    }

    return {
        hasLanguage,
        language,
        path,
        fullPath: hasLanguage ? `/${language}/${splitPath(path)}` : path
    }
};

export const createHash = (language, path) => {
    return `#/${language}/${splitPath(path)}`;
};