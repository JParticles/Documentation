export default function analysis() {

    // cnzz
    (function () {
        var cnzz = document.createElement('script');
        cnzz.type = 'text/javascript';
        cnzz.async = true;
        cnzz.src = 'https://s19.cnzz.com/z_stat.php?id=1262083162';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(cnzz, s);

        window.addEventListener('hashchange', () => {
            _czc.push(["_trackPageview", location.hash.substring(1)]);
        });
    })();

    // Baidu analysis
    (function () {
        window._hmt = window._hmt || [];
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?8e8c9172687affd39edbb31c89ebbf97";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);

        window.addEventListener('hashchange', () => {
            window._hmt.push(['_trackPageview', location.hash.substring(1)]);
        });
    })();

    // Growing IO
    (function () {
        var _vds = _vds || [];
        window._vds = _vds;
        _vds.push(['setAccountId', 'b8678e52a8af5d0f']);
        _vds.push(['trackBot', false]);
        _vds.push(['enableHT', true]);
        (function () {
            var vds = document.createElement('script');
            vds.type = 'text/javascript';
            vds.async = true;
            vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(vds, s);
        })();
    })();

    // google analysis
    (function () {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-100481366-1', 'auto');
        ga('send', 'pageview');
    })();
}