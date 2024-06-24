// 초기 세팅
let boardInit;      // 게임판 초기화 함수
let stateInit;      // 게임 현황 초기화 함수
let imgLocation;    // 이미지 배치
let start           // 게임 시작 함수

$(function(){
    boardInit();
    $("#start").click(start);
});

// 게임판 초기화 함수
boardInit = function(){
    $(".item").each(function( i, v ){
        $(this).append(`<div class="itemHide></div>`);
    });
}

// 게임 시작 함수
start = function(){

}