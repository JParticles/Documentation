"use strict";

;

(function () {
  var languages = {
    "cn": {
      "languageName": "中文简体",
      "languageCode": "cn",
      "languageCodeOnHtml": "zh-cn",
      "progressText": "正在加载...",
      "title": "JParticles - 简洁，高效，轻量级的 Canvas 粒子运动特效库。",
      "header": {
        "smallScreen": {
          "menu": "菜单"
        },
        "common": ["首页", "实例及API", "下载", "GitHub", {
          "name": "更新日志",
          "title": "路漫漫其修远兮吾将上下而求索"
        }]
      },
      "footer": {
        "support": "开源不易，支持作者（Star on GitHub）"
      },
      "home": {
        "description": "一个简洁，高效，轻量级的 Canvas 粒子运动特效库。",
        "seeMore": {
          "text": "了解更多",
          "href": "https://github.com/Barrior/JParticles/blob/master/README.md"
        },
        "quickStart": "立即使用"
      },
      "noData": "数据未找到",
      "notFound": {
        "toHomePage": "返回首页",
        "toPrevPage": "返回上一页"
      },
      "examples": {
        "required": "必读",
        "menu": ["5分钟上手JParticles", "粒子运动", "波浪运动", "波纹进度条", "雪花飘落"]
      }
    },
    "en": {
      "languageName": "English",
      "languageCode": "en",
      "languageCodeOnHtml": "en",
      "progressText": "Loading...",
      "title": "JParticles - succinct, efficient and lightweight Canvas library for building some cool particle effects.",
      "header": {
        "smallScreen": {
          "menu": "Menu"
        },
        "common": ["Home", "Examples & API", "Download", "GitHub", {
          "name": "Changelog",
          "title": "The way ahead is long, I see no ending, yet high and low I will search with my will unbending."
        }]
      },
      "footer": {
        "support": ""
      },
      "home": {
        "description": "A concise, lightweight, and efficient Canvas library for building some cool particle effects.",
        "seeMore": {
          "text": "see more",
          "href": "https://github.com/Barrior/JParticles/blob/master/README_en.md"
        },
        "quickStart": "Quick Start"
      },
      "noData": "Not Found",
      "notFound": {
        "toHomePage": "Home Page",
        "toPrevPage": "Previous Page"
      },
      "examples": {
        "required": "Required",
        "menu": ["Quick Start", "Particle", "Wave", "WaveLoading", "Snow"]
      }
    }
  };

  for (var key in languages) {
    var lang = languages[key];
    lang.languageFlag = "/i18n/".concat(lang.languageCode, "/images/flag.png");
  }

  var globalConfig = window.globalConfig = {
    themeColor: '#00be70',
    languages: languages,
    language: {},
    routeHasLanguage: false,
    routeLanguage: '',
    setCurrentLanguage: function setCurrentLanguage() {
      var userLanguage = location.hash.substring(2).split('/')[0];

      if (userLanguage === 'zh-cn') {
        userLanguage = 'cn';
      }

      if (globalConfig.languages[userLanguage]) {
        globalConfig.routeHasLanguage = true;
        globalConfig.routeLanguage = userLanguage;
      } else {
        userLanguage = navigator.language && navigator.language.toLowerCase();
        if (userLanguage === 'zh-cn') userLanguage = 'cn';
      }

      if (!globalConfig.languages[userLanguage]) {
        userLanguage = 'en';
      }

      globalConfig.language = globalConfig.languages[userLanguage];
    },
    setDocumentLanguage: function setDocumentLanguage() {
      var language = globalConfig.language;
      document.title = language.title;
      document.getElementsByTagName('html')[0].lang = language.languageCodeOnHtml;
    }
  };
  globalConfig.setCurrentLanguage();
  globalConfig.setDocumentLanguage();
  var $body = document.getElementsByTagName('body')[0];
  var $layer = document.getElementById('loading-layer');
  var $container = document.getElementById('loading-container');
  var progressText = globalConfig.language.progressText;
  var loading = new window.JParticles.WaveLoading($container, {
    font: 'normal 900 13px Arial',
    color: globalConfig.themeColor,
    fillColor: globalConfig.themeColor,
    formatter: progressText + '%d%',
    duration: 5000,
    resize: false
  });
  loading.onProgress(function (progress) {
    // set white text when the progress more than 60%
    if (progress >= 60) {
      loading.setOptions({
        color: '#fff'
      });
    }
  }).onFinished(function () {
    $body.classList.remove('overflow-hidden');
    $layer.classList.add('zoom-out');
  });

  function animationendHandler() {
    $layer.removeEventListener('animationend', animationendHandler);
    $body.removeChild($layer);
  }

  $layer.addEventListener('animationend', animationendHandler);

  function loadingDone() {
    window.removeEventListener('load', loadingDone);
    loading.done();
  }

  window.addEventListener('load', loadingDone);
})();