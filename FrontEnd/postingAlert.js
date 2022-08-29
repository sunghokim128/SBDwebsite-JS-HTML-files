function alertMessage() {
    // 사용자의 입력값들을 받아온다
    var squat = document.getElementById("squat").value;
    var benchpress = document.getElementById("benchpress").value;
    var deadlift = document.getElementById("deadlift").value;
    var weight = document.getElementById("weight").value;
    if( document.getElementById("true").checked ){ var gender = "남성" }
    if( document.getElementById("false").checked ){ var gender = "여성" }
    var title = document.getElementById("title").value;
    var body = document.getElementById("body").value;

    var sbdTotal = parseInt(squat) + parseInt(benchpress) + parseInt(deadlift);
    var returnScript = "이용자의 3대와 신체정보 입니다. 확인바랍니다.\n";
    returnScript += "3대: " + sbdTotal + "\n스쿼트: " + squat + "kg\n벤치프레스: " + benchpress +
                    "kg\n데드리프트: "+ deadlift +"kg\n몸무게: " + weight +"kg\n성별: " + gender;

    if( !squat|| !benchpress || !deadlift || !weight || !title || !body){
        alert("빈칸의 값을 채워주시기 바랍니다");
        return false;
    } else if( !/^[0-9]+$/.test(squat) || !/^[0-9]+$/.test(benchpress) || !/^[0-9]+$/.test(deadlift) || !/^[0-9]+$/.test(weight)){
      alert("숫자만 입력해주시기 바랍니다");
      return false;
    } else
    {
         if (confirm("글을 한번 게시하면 수정/삭제가 불가능합니다\n그래도 글을 게시하시겠습니까?") ) {
           //[확인] 누르면 글을 게시하고 메인 페이지로 돌아감
               return true;
              } else {
              //[취소] 누르면 경고 메세지 뜨기 전 상태로 돌아감
              return false;
            }
    }

 }

 function BSChecker() {

     var squat = parseInt(document.getElementById("squat").value);
     var benchpress = parseInt(document.getElementById("benchpress").value);
     var deadlift = parseInt(document.getElementById("deadlift").value);
     var weight = parseInt(document.getElementById("weight").value);

     if( weight < 30 ){
        alert("쇠질을 할 때가 아닙니다. 밥을 먹으러 가십시오");
        return false;
     }else if(benchpress > 355){
        alert("현재 벤치프레스 세계 신기록은 355kg으로 Julius Maddox가 보유하고 있습니다. \n 당신의 벤치기록은 지금 입력한 그것이 아닙니다."
        + "\n Bench T-shirt는 인정하지 않습니다");
        return false;
     }
      else if( deadlift > 501 ){
        alert("현재 데드리프트 세계 신기록은 501kg 으로 Hafþór Júlíus Björnsson이 보유하고 있습니다.\n당신의 데드 기록은 지금 입력한 그것이 아닙니다");
        return false;
      } else if( squat > 592 ){
        alert("현재 스쿼트 세계 신기록은 592kg 으로 Brian Carroll이 보유하고 있습니다.\n당신의 스쿼트 기록은 지금 입력한 그것이 아닙니다");
        return false;
     }

 }
