export default function analysis() {

    // cnzz
    (function () {
        var cnzz = document.createElement('script');
        cnzz.type = 'text/javascript';
        cnzz.async = true;
        cnzz.src = 'https://s19.cnzz.com/z_stat.php?id=1262083162';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(cnzz, s);
    })();

    // 百度统计
    (function () {
        window._hmt = window._hmt || [];
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?8e8c9172687affd39edbb31c89ebbf97";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

    // Growing IO
    (function () {
        var _vds = _vds || [];
        window._vds = _vds;
        _vds.push(['setAccountId', 'b8678e52a8af5d0f']);
        (function () {
            var vds = document.createElement('script');
            vds.type = 'text/javascript';
            vds.async = true;
            vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(vds, s);
        })();
    })();
}