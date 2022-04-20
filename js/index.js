
$(document).ready(function(){
  $('.slider').bxSlider();
});

//헤더 스크롤 적당치 내려갈시 백그라운드 컬러 화이트 보더바텀 1px

function changeMenu(){
    let curPos= document.documentElement.scrollTop;
    if(curPos>500){
        // console.log(curPos)
        document.getElementById('header').classList.add('menu_style');
    } else {
        document.getElementById('header').classList.remove('menu_style');

    }
}
document.addEventListener('scroll',changeMenu);
// 섹션1 목록 좌우로 넘기기

// 섹션2 클릭하면 on처리 그외 on 끄고 메인에 on된 이미지 삽입
let s2main = 5;
$(function(){
  $('.b2sub>div').on("mouseenter",function(){
    $(this).addClass('on');

  })
  $('.b2sub>div').on("mouseleave",function(){
    $(this).removeClass('on');
  })
  $('.b2sub>div').on("click",function(){
    $(this).addClass('pick');
    $('.b2sub>div').not(this).removeClass('pick');

    // s2main = $(this).length;
    // document.console(s2main);
    var j = $(".b2sub>div").index(this);
    // console.log(j);
    //j값을 s2main에 안 넣어도 될듯?
    //그냥 이값으로 `backgrond url('asd${j}.jpg');

    $('.b2Main').css('background-image',`url(img/b2m${j+1}.jpg)`);

    $('.s2textbox').eq(j).addClass('pick');
    $(`.s2textbox:not(:eq(${j}))`).removeClass('pick');
  })
});
// 섹션3
var d = 0;
$(function(){
  //호프만
  $('.b3m>div').on("mouseenter",function(){
    $(this).addClass('on');
  });
  $('.b3m>div').on("mouseleave",function(){
    $(this).removeClass('on');
  })
  //클릭시
  $('.b3m>div').on("click",function(){
    $(this).addClass('pick');
    $('.b3m>div').not(this).removeClass('pick');

    //메뉴에서 누른 인덱스값 가져오기
    d = $(".b3m>div").index(this);
    // console.log(d);
    // 배경이미지
    $('.s3').css('background-image',`url(img/bg3${d+1}.jpg)`);
    // 가운데 텍스트
    $('.b3textbox>div').eq(d).addClass('pick');
    $(`.b3textbox>div:not(:eq(${d}))`).removeClass('pick');

  })
});


// 섹션2 3 배경이미지 페럴럭스 