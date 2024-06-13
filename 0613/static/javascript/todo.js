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

