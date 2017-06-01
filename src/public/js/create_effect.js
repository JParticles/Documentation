import utils from 'utils';

const instanceBox = [];

export const clearThrottle = () => {
    instanceBox.length = 0;
};

export const throttle = () => {
    $(window).on('resize.instance, scroll.instance', utils.throttle(() => {
        instanceBox.forEach($instance => {
            const effect = $instance.data('effect');
            if (!$instance.data('useClickPaused') && utils.checkInView($instance)) {
                effect.open();
            } else {
                effect.pause();
            }
        });
    }, 200));
};

export const createEffect = (selector, callback) => {
    const $instance = $(selector);
    const $demo = $instance.find('.demo');
    const effect = callback($demo[0]);

    $instance
        .data('effect', effect)
        .find('.open').click(() => {
            $instance.data('useClickPaused', false);
            effect.open();
        })
        .end().find('.pause').click(() => {
            $instance.data('useClickPaused', true);
            effect.pause();
        });

    instanceBox.push($instance);
};