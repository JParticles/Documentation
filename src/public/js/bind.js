import $ from 'jquery';
import throttle from './throttle';

// Demo实例的优化，控制
const ctrlTpl =
    '<div class="ctrl">' +
        '<div class="btn btn-default open">开启·OPEN</div>' +
        '<div class="btn btn-default pause">暂停·PAUSE</div>' +
    '</div>';

function handler( instance ){
    const $this = $(this);
    const eventType = $this.hasClass('open') ? 'open' : 'pause';

    // 如果有clientX，表示是事件处理函数，反之则是函数调用
    instance = instance.clientX ? $this.parents('.instance')[0] : instance;

    if( instance.effect ){
        instance.effect[ eventType ]();
        instance.userClickPaused = eventType === 'pause';
    }
}

// 检查动画元素是否在可视区内，不在则暂停运动，在则打开运动
function checkInViewBox(){
    const scrollTop = $(window).scrollTop();
    const clientHeight= $(window).height();
    $('.instance').each(function(){
        if( this.effect && !this.userClickPaused ){
            const $this = $(this);
            const top = $this.offset().top;
            const outerHeight = $this.outerHeight();

            if( scrollTop > top + outerHeight ||
                scrollTop + clientHeight < top ){

                // 不在可视区范围内
                this.effect.pause();
            }else{
                this.effect.open();
            }

        }
    });
}

function execEventForCommonInstance(){
    if(!execEventForCommonInstance.executed){
        execEventForCommonInstance.executed = true;

        // 让所有的实例都创建完毕再执行 演示Demo的性能优化
        setTimeout(function(){
            checkInViewBox();
            let timer = null;
            function throttle(){
                clearTimeout( timer );
                timer = setTimeout(function(){
                    checkInViewBox();
                }, 200 );
            }
            $(window).resize( throttle )
                .scroll( throttle );
        }, 0 );
    }
}
execEventForCommonInstance.executed = false;

// 创建公共的方式用于创建并关联Demo实例
export default function bind( index, getInstance ){
    const $instance = $('.instance').eq( index );
    $instance[0].effect = null;
    $instance[0].effect = getInstance( $instance.find('.demo')[0] );

    if( $instance.attr('data-ctrl') !== 'none' ){
        $instance.append( ctrlTpl )
            .on('click.ctrl', '.ctrl .btn', handler );
    }

    const $f = $('#first-instance-ctrl');
    !$f.data('run') && $f.on('click', '.btn', function(){
        handler.call( this, $('.instance:first')[0] );
    }).data('run', true);

    execEventForCommonInstance();
};