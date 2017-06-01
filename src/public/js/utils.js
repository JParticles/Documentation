const $ = {

    // check if the element is in the visible area
    checkInView(elem) {
        const $ = jQuery;
        const elemTop = $(elem).offset().top;
        const elemHeight = $(elem).outerHeight();
        const winTop = $(window).scrollTop();
        const winHeight = $(window).height();

        if (
            elemTop + elemHeight > winTop &&
            elemTop < winTop + winHeight
        ) {
            return true;
        }

        return false;
    },

    // throttle resizing and scrolling events.
    throttle(handler, delay, must){
        if (!delay && !must) {
            return handler;
        }

        let startTime = new Date();
        let timer;

        return function (e) {
            if (delay) {
                clearTimeout(timer);

                timer = setTimeout(() => {

                    handler.call(this, e);

                }, delay);

            } else if (new Date() - startTime > must) {
                startTime = new Date();
                handler.call(this, e);
            }
        }
    }
};

export default $;