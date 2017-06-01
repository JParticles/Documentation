import list from 'language/list';

// outputs as: ['cn', 'en']
const languageList = [];
list.forEach(item => {
    languageList.push(item.field);
});


function dispatch(options) {
    switch (options.type) {
        case 'language':
            window.language = options.value;
            break;
    }
}

export default {
    dispatch,
    isMobile() {
        return document.documentElement.clientWidth < 1024;
    },
    get languageList() {
        return languageList;
    },
    get language() {
        return window.language;
    },
    get themeColor() {
        return '#00be70';
    }
}