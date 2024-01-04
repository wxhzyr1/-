window.onload = function() {
    var a = document.querySelector('.main-1');
    $(document).bind('scroll', fun = function() {
        if (window.pageYOffset >= 140) {
            console.log(1);
            $(document).unbind('scroll', fun);
            var sum = 800;
            var ti = function() {
                $(a).css('padding-top', sum - 10 + 'px');
                sum -= 10;
                if (sum === 0) clearInterval(ti);
            }
            setInterval(ti, 10);
        }
    });
}