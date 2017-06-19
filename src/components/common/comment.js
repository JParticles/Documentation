import React, {Component} from 'react';
import {parseRouter} from 'js/parse_router';

export default class Comment extends Component {
    componentDidMount() {
        const router = parseRouter();

        window.disqus_config = function () {

            // Replace PAGE_URL with your page's canonical URL variable
            this.page.url = 'https://jparticles.js.org' + router.fullPath;

            // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            this.page.identifier = router.fullPath;
        };

        // DON'T EDIT BELOW THIS LINE
        (function() {
            var d = document, s = d.createElement('script');
            s.src = 'https://jparticles.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    }

    render() {
        return (
            <div className="comment">
                <div id="disqus_thread"></div>
                <noscript>
                    Please enable JavaScript to view the
                    <a href="https://disqus.com/?ref_noscript">
                        comments powered by Disqus.
                    </a>
                </noscript>
            </div>
        )
    }
}