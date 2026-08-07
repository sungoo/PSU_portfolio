const contentBox = document.getElementById("mainCnt");
const infoBox = document.getElementById("infome");
const icon = [
    document.getElementById("unreal"),
    document.getElementById("constele"),
    document.getElementById("planetae")
];
const PSU = document.getElementById("PSU");
const psuOgCnt = PSU.getElementsByTagName("p")[0];

const contTitle = ["언리얼 포트폴리오", "콘스텔라티오", "플라네타에"];
let isContHiding = true;
let isInfoHiding = true;
const contCNT = [
    "개발 기간: 3개월<br>역할: 인벤토리와 상점 기능 구현, 아이템 데이터 관리<br>언리얼5 수업을 다니며, 마지막 과제로 3명이서 팀을 짜 만들어낸 RPG 게임입니다.<br>아이템 테이블의 구조를 짜, 여러 종류의 아이템을 관리하고,<br>아이템이 겹치지 않고 인벤토리에 잘 표현되게 구현, 장비의 착용과 해제, 상점 기능을 구현하였고, 그 해에 우수 포트폴리오로 발탁되었습니다.<br><br><a href='https://www.youtube.com/watch?v=BUtgGE3BodQ&feature=youtu.be' target='_blank'>영상 보러가기</a>",
    "개발 기간: 1주일<br>역할: 게임 기획, 보드 시스템 구현<br>지난 추석 기간, '달'을 주제로 일주일간 진행된 게임잼에서 4명이 팀을 짜 만들어낸 덱빌딩 퍼즐게임 입니다.<br>팀의 프로그래머로 참여하였으며,<br>게임의 전체적인 흐름을 구상하고 기획하였으며, 지난 언리얼 프로젝트의 경험을 살려, 카드의 종류를 분류하고, 데이터를 관리하는 역할을 해냈습니다.<br><br><a href='https://eatch.dev/archive/Constellatio.zip'>게임 다운로드</a><br><a href='https://blog.naver.com/qkrtjddn234/224044967053' target='_blank'>후기(네이버 블로그)</a>",
    "개발 기간: 26년 2월~ 진행중<br>역할: 총괄, 전체 프로그래밍<br>아트, 스크립터, 기획 등등, 저 스스로를 포함, 총 7명의 사람을 모아 시작한 인디게임 개발 프로젝트입니다.<br>한국 콘텐츠 진흥원 인디게임 지원사업에도 도전하였으며, 비록 발탁되진 못했으나, 좌절하지 않고 여전히 진행중인 프로젝트입니다.<br>물건을 수리하는 것을 메인 컨텐츠로 내세운 네러티브형 퍼즐게임입니다.<br><a href='https://bsky.app/profile/team-bluelemonade.bsky.social' target='_blank'>프로젝트 계정(Bluesky)</a>"
];

function MainCntBooP(whatIcon){
    Boing(icon[whatIcon]);
    const title = contentBox.getElementsByTagName("h3")[0];
    const cnt = contentBox.getElementsByTagName("p")[0];
    title.textContent = contTitle[whatIcon];
    cnt.innerHTML = contCNT[whatIcon];
    if(isContHiding){
        contentBox.style.opacity = 1;
        contentBox.style.transform = 'scale(1)'
        contentBox.style.pointerEvents = 'auto';
        isContHiding = false;
    }
}

function copyFunc(int) {
    const copyTxt = [];
    copyTxt[0] = "https://blog.naver.com/qkrtjddn234";
    copyTxt[1] = "#cheesemousepsu";
    copyTxt[2] = "@psudots.bsky.social";
    copyTxt[3] = "@bookof_psu";

    navigator.clipboard.writeText(copyTxt[int]);

    alert(copyTxt[int] + "가 복사되었습니다.");
}

function infoClose(){
    setTimeout(function () {
        infoBox.style.opacity = 0;
        infoBox.style.transform = 'scale(0.1)';
        infoBox.style.pointerEvents = 'none';
        //PSU.textContent = '';
        //psuOgCnt.style.display = '';
        isInfoHiding = true;
    }, 4000);
}
function Boing(thing){
    thing.style.transform = 'scaleX(1.2)'
    thing.style.transform = 'scaleY(0.8)'
    setTimeout(() => {
        thing.style.transform = 'scaleX(0.8)'
        thing.style.transform = 'scaleY(1.2)'
        setTimeout(() => {
            thing.style.transform = 'scaleX(1)'
            thing.style.transform = 'scaleY(1)'
        }, 200);
    }, 200);
}
function BooP(){
    Boing(PSU);
    if(isInfoHiding){
        infoBox.style.opacity = 1;
        infoBox.style.transform = 'scale(1)'
        infoBox.style.pointerEvents = 'auto';
        isInfoHiding = false;
        infoClose();
    }
}
function BBooPP(){
    const blabla = [
        "이 페이지의 도트, 다 제가 찍었어요!",
        "이스터 에그를 다 찾을 수 있겠어요?",
        "[고민할 시간에 일단 저질러 보는게 낫다.] 제 신조예요.",
        "저는 그림 그리는게 좋아요.",
        "움쮝 땃쮝 쥑 쥑",
    ];
    if(isInfoHiding){
        psuOgCnt.style.display = 'none';
        PSU.textContent = blabla[Math.floor(Math.random()*5)];
        infoBox.style.opacity = 1;
        infoBox.style.transform = 'scale(1)'
        infoBox.style.pointerEvents = 'auto';
        isInfoHiding = false;
        infoClose(infoBox, 1);
    }
}

PSU.addEventListener("click", BooP);
//PSU.addEventListener("dblclick", BBooPP);