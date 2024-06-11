// 브라우저에 모두 표시되면 발생하는 이벤트 onload
window.onload = function(){
    document.getElementById('calc').addEventListener('click', function(){
        출력();
    });
}

function 총점계산(a, b, c, d){    // 총점 계산만 하는 함수
   
    var total = a + b + c + d;
    return total;

}
    

function 평균계산( total ){    // 평균 계산만 하는 함수
    var div = total / 4;
    return div;
}
function 출력(){            // 총점과 평균을 화면에 출력하는 함수
    var a = Number(document.querySelector('#kor').value);
    var b = Number(document.querySelector('#mat').value);
    var c = Number(document.querySelector('#eng').value);
    var d = Number(document.querySelector('#his').value);
    
    let total = 총점계산(a, b, c, d);
    let div = 평균계산( total );
    document.getElementById("total").innerText = "총점 : " + total;
    document.getElementById("avg").innerText = "평균 : " + div;
}