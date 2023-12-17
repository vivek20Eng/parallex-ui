
let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains_behind=document.getElementById('mountains_behind');
let text1=document.getElementById('text1');
let text2=document.getElementById('text2');
let btn=document.getElementById('btn');
let mountains_front=document.getElementById('mountains_front');
let header=document.querySelector('header');

window.addEventListener('scroll',function(){
    let value=window.scrollY;
    stars.style.left=value *'0.25'+'px';
    moon.style.top=value *'1.05'+'px';
    mountains_behind.style.top=value * '0.05'+'px';
    mountains_front.style.top=value * '0.4'+'px';
    text1.style.marginRight=value * '4'+'px';
    text1.style.marginTop=value *'1.5'+'px';
    text2.style.marginTop=value *'1.4'+'px';
    btn.style.marginTop=value*'1.5'+'px';
    header.style.top=value* '0.0'+'px';
})
