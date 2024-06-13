$(function(){
    $("#enroll").click(function(){
        let todo = $("#work").val();
        let time = $("#time").val();
        let state = $("#state").val();
        addList(todo, time, state);
    });
    $("#state").keyup(function(){
        if($("#state").val() === "완료" || $("#state").val() === "진행중"){
            $("#enroll").removeAttr('disabled');
        }else{
            $("#enroll").attr('disabled', 'disabled');
        }
    });
    
});

function addList(todo, time, state){
    $(".todo").append('<li>' + todo + '</li>');
    $(".todoTime").append('<li>' + time + '</li>');
    $(".todoState").append('<li>' + state + '</li>');
}

/*
$("#enroll").attr("disabled", "disabled");

$("#work").keyup( check );  // 할 일 입력시
$("#time").change( check ); // 시간 입력시
$("#state").keyup( check ); // 상태 입력시

function add(){
    var work = $("#work").val();
    var time = $("#time").val();
    var state = $("#state").val();

    if ( state === '완료' || state === '진행중'){
    $("#todoList").append(`<li class="todo">${work}</li>
        <li class="todoTime">${time}</li>
        <li class="todoState">$(state)</li>`);

        $("#work").val(''); // 할일 input 비우기
        $("#time").val(''); // 시간 비우기
        $("#work").val(''); // 상태 비우기
        $("#work").focus(); // 할일에 포커스 두기
    } else{
        alert("상태는 완료 또는 진행중 만 입력하세요")
    }
}



*/