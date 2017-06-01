import JParticles from 'jparticles/production/jparticles';
import 'jparticles/production/wave_loading';
import {dispatch, themeColor, languageList} from 'store';

// multiple language
function getLanguage() {
    let userLanguage = location.hash.replace(/#\/([\w-]*?)\/.*/i, '$1');
    if (userLanguage == 'zh-cn') {
        userLanguage = 'cn';
    } else if (languageList.indexOf(userLanguage) == -1) {
        userLanguage = navigator.language && navigator.language.toLowerCase();
        if (userLanguage == 'zh-cn') userLanguage = 'cn';
        if (languageList.indexOf(userLanguage) == -1) {
            userLanguage = 'en';
        }
    }
    return userLanguage;
}

// get the corresponding language file
// and assign to store.js file.
const userLanguage = getLanguage();
const LANGUAGE = require(`language/${userLanguage}/${userLanguage}`);
dispatch({
    type: 'language',
    value: LANGUAGE
});

// Set language for HTML content.
document.getElementsByTagName('html')[0].lang = userLanguage == 'cn' ? 'zh-cn' : userLanguage;
const progressText = LANGUAGE['progressText'];

const layer = document.getElementById('loading-layer');
const container = document.getElementById('loading-container');
const loading = new JParticles.waveLoading(container, {
    font: 'normal 900 13px Arial',
    color: themeColor,
    fillColor: themeColor,
    duration: 5000,
    resize: false
});

loading
    .onProgress(progress => {

        // set text color to white if the progress more than 60%
        if (progress >= 60) {
            loading.setOptions({
                color: '#fff'
            });
        }

        return progressText + Math.ceil(progress) + '%';
    })
    .onFinished(() => {
        $('body').removeClass('overflow-hidden');
        $(container).empty();
        $(layer).addClass('zoomout');
    });

// load completed
function loadingDone() {
    loading.done();
    window.removeEventListener('load', loadingDone);
}
window.addEventListener('load', loadingDone);
