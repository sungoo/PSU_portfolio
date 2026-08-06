const contentBox = document.getElementById("mainCnt");
const infoBox = document.getElementById("infome");
var icon = [];
icon[0] = document.getElementById("unreal");
icon[1] = document.getElementById("constele");
icon[2] = document.getElementById("planetae");
const PSU = document.getElementById("PSU");

var contTitle = ["언리얼 포트폴리오", "콘스텔라티오", "플라네타에"];
var isContHiding = true;
var isInfoHiding = true;

function copyFunc(int) {
    var copyTxt = [];
    copyTxt[0] = "https://blog.naver.com/qkrtjddn234";
    copyTxt[1] = "#cheesemousepsu";
    copyTxt[2] = "@psudots.bsky.social";
    copyTxt[3] = "@bookof_psu";

    navigator.clipboard.writeText(copyTxt[int]);

    alert(copyTxt[int] + "가 복사되었습니다.");
}

function BooP(){
    var blabla = [];
    blabla[0] = "이 페이지의 도트, 다 제가 찍었어요!"
    blabla[1] = "이스터 에그를 다 찾을 수 있겠어요?"
    blabla[2] = "[고민할 시간에 일단 저질러 보는게 낫다.] 제 신조예요."
    blabla[3] = "저는 그림 그리는게 좋아요."
    blabla[4] = "움쮝 땃쮝 쥑 쥑"
    alert("BooP!")
    if(isInfoHiding){
        infoBox.style.display = 'block';
        isInfoHiding = false;
    }
    else{
        infoBox.style.display = 'none';
        isInfoHiding = true;
    }
}

PSU.addEventListener("click", BooP);