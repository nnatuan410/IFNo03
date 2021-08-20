$(document).ready(function(){
    let header_text = document.getElementById('header-content');
    let btn_movie = document.getElementById('btn-movie');
    let btn_scroll = document.getElementById('btn-scroll');

    window.addEventListener('scroll',function(){
        var val = window.scrollY;

        header_text.style.top = 50 + val * .06 + '%';
        btn_movie.style.bottom = 8 + -val * .055 + 'rem';
        btn_scroll.style.bottom = 1.9 + -val * .055 + 'rem';
    })
    // show/hide btn when scroll
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 19 && scrollTop > lastScrollTop) {
            $('#btn-scroll').addClass('hidden');
            $('#btn-movie').addClass('hidden');
        } else if(scrollTop <= 19) {
            $('#btn-scroll').removeClass('hidden');
            $('#btn-movie').removeClass('hidden');
        }
        lastScrollTop = scrollTop;
    });
    // scroll top btn
    $(window).scroll(function(){
        if ($(window).scrollTop() > 1000) {
            $('#btn-scrollTop').addClass('show');
          } else {
            $('#btn-scrollTop').removeClass('show');
          }
    })
    $('#btn-scrollTop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    // READ MORE BTN 
    $('#read-more01').click(function(){
        $('#text-more01').toggle();
        $('#more-name01').text(function(i, oldText) {
            return oldText == '続きを読む' ? '閉じる' : '続きを読む';
        });
        $('#more-icon01').toggleClass("roteIcon");
    })
    $('#read-more02').click(function(){
        $('#text-more02').toggle();
        $('#more-name02').text(function(i, oldText) {
            return oldText == '続きを読む' ? '閉じる' : '続きを読む';
        });
        $('#more-icon02').toggleClass("roteIcon");
    })
    $('#read-more03').click(function(){
        $('#text-more03').toggle();
        $('#more-name03').text(function(i, oldText) {
            return oldText == '続きを読む' ? '閉じる' : '続きを読む';
        });
        $('#more-icon03').toggleClass("roteIcon");
    })
})