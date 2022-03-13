$(function(){
    $('.outer-menu-item').hover(function () {
        $(this).find('.inner-menu').show()
        $(this).css({
            backgroundColor : 'black',
            color : 'white'
        });
    }, function () {
        $(this).find('.inner-menu').hide()
            $(this).css({
                backgroundColor : '',
                color : ''
            });
    });

    $('.inner-menu-item > a').mouseenter(function(){
        $(this).css({
            backgroundColor : 'black',
            color : 'white'
        });
    });

    $('.inner-menu-item > a').mouseleave(function(){
        $(this).css({
            backgroundColor : '',
            color : 'black'
        });
    });


    // 테이블 색상 변경
    $('.lightgreen').css('background-color', 'lightgreen')
    $('.lightgray').css('background-color', 'lightgray')
    $('.lightblue').css('background-color', 'lightblue')

    // nav css조작
    $('#main').css({
        borderTop : '1px solid #c8c8c8',
        borderBottom : '1px solid #c8c8c8',
        height : '40px',
        position : 'fixed',
        top : '120px',
        backgroundColor : 'white',
        width : '980px'
    });
    $('.pull-left').css({
        float : 'left'
    });
    $('.outer-menu-item').css({
        float : 'left',
        position : 'relative'
    })
    $('.menu-title').css({
        display : 'block',
        height : '30px',
        lineHeight : '30px',
        textAlign : 'center',
        padding : '5px 60px',
        width : '200px'
    });
    $('.inner-menu').css({
        display : 'none',
        width : '100%',
        backgroundColor : 'white',
        boxShadow : '0 2px 6px rgba(5, 5, 5, 0.9)',
        zIndex : '1000',
        textAlign : 'center'
    })
    $('.inner-menu-item > a').css({
        display : 'block',
        padding : '5px 10px',
        color : 'black'
    })
    // $('.inner-menu-item > a:hover').css({
    //     backgroundColor : 'black',
    //     color : 'white'
    // });
});

window.onload = function() {
    // 현재 시간
    setInterval(displayNow, 1000);

    function displayNow() {
        let now = new Date();
        let currentTime = now.toLocaleTimeString();
        document.querySelector('#current').innerHTML = currentTime;
    }
    // 이미지 크게
    let pics = document.getElementsByClassName('pic');
    let bigImg = document.getElementById('bigImg');
    let bigger = document.getElementById('bigger');
    
    for(let i = 0; i < pics.length; i++){
        pics[i].addEventListener('click',showLightBox);
    }
    
    function showLightBox(){
        let big = this.getAttribute('data-src');
        bigger.setAttribute('src', big);
        bigImg.style.display = 'block';
    }
    bigImg.onclick = function(){
        bigImg.style.display = 'none';
    }
}