var today = new Date(); //오늘 날짜

function prevClaendar() {
  //이전 달력
  today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
  buildCalendar();
}
//다음 달력을 오늘을 저장하고 달력에 뿌려줌
function nextCalendar() {
  today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
  buildCalendar();
}
function buildCalendar() {
  var nMonth = new Date(today.getFullYear(), today.getMonth(), 1); // 이번달의 첫번째날
  var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0); //이번달의 마지막날
  var tblCalendar = document.getElementById("calendar"); //테이블 달력을 만드는 테이블
  var tblCalendarYM = document.getElementById("calendarYM"); ///XXXX년도XX월 출력
  tblCalendarYM.innerHTML =
    today.getFullYear() + "년" + (today.getMonth() + 1) + "월";

  //기존에 테이블에 잇던 달력 내용 삭제
  while (tblCalendar.rows.length > 2) {
    tblCalendar.deleteRow(tblCalendar.rows.length - 1);
  }
  var row = null;
  row = tblCalendar.insertRow();
  var cnt = 0;
  // 1일이 시작되는 칸을 맞추어줌

  for (i = 0; i < nMonth.getDay(); i++) {
    cell = row.insertCell();
    cnt = cnt + 1;
  }
  //달력 출력
  for (i = 1; i <= lastDate.getDate(); i++) {
    cell = row.insertCell();
    cell.innerHTML = i + "<br/>";
    for (var key in data) {
      if (String(i) == key) {
        let title = data[key][0];
        let place = data[key][1];
        let time = data[key][2];
        cell.innerHTML =
          i +
          "<br/>" +
          "<h3>제목: " +
          title +"</h3>"+
          "<br/>" +
          "장소: " +
          place +
          "<br/>" +
          "시간: " +
          time +
          "<br/><br/>";
      }
    }
    cell.innerHtml = cnt = cnt + 1;
    if (cnt % 7 == 0)
      //1주=7일
      row = calendar.insertRow();
  }
}

const data = {
  "3": [
    "『FUN윈드오케스트라 제7회 정기연주회 ‘제주 나팔소리로의 초대’』",
    "문예회관대극장",
    "시간: 18:00",
    "단기",
  ],
  "10": [
    "『제주윈드오케스트라 제13회 정기연주회』",
    "문예회관대극장",
    "시간: 19:30",
    "단기",
  ],
  "16,17": ["『제30회 탐라합창제』", "문예회관대극장", "시간: 14:00", "단기"],

  "23": [
    " 제주도립 서귀포합창단 제66회 정기연주회 연습",
    "예술의전당대극장",
    "시간: 오전 10시 0분~오전 12시 0분",
    "단기",
  ],
  "25": [
    "『제라한싱어즈 제6회 정기연주회』",
    "문예회관대극장",
    "시간: 15:30",
    "단기",
  ],
  "29": [
    "철수 김품창 제주 202020展  (부재-제주20주년기념 展)",
    "예술의전당전시실",
    "시간: 오전 9시 0분~오후 6시 0분",
    "단기",
  ],
  "30": [
    " 성악인재개발프로젝트 문화를 꿈꾸며 삶을 노래하며(온라인 녹화중계)",
    "예술의전당대극장",
    "시간: 오후 7시 30분~오후 9시 30분",
    "단기",
  ],

  "8": [
    "『전국시조 가사가곡 경창대회』",
    "문예회관소극장",
    "시간: 09:00",
    "단기",
  ],
  "11": [
    "『제주 beau piano duo 워크샵』",
    "문예회관소극장",
    "시간: 18:00",
    "단기",
  ],
  "22,25": [
    "『제5회 제주 더불어-놀다 연극제』",
    "문예회관소극장",
    "시간: 19:30",
    "단기",
  ],
  "17": [
    " 건반위은파 앙상블음악회 5회<오르간&피아노Ⅱ>-온라인 녹화 중계",
    "예술의전당대극장",
    "시간: 오후 7시 30분~오후 9시 0분",
    "단기",
  ],
  "20": [
    "『제5회 제주 더불어-놀다 연극제』",
    "문예회관소극장",
    "시간: 19:30",
    "단기",
  ],
  "12": [
    " 김품창 제주 202020展  (부재-제주20주년기념 展)",
    "예술의전당전시실",
    "시간: 오전 9시 0분~오후 6시 0분",
    "단기",
  ],
  "13,28": [
    " 김품창 제주 202020展  (부재-제주20주년기념 展)",
    "예술의전당전시실",
    "시간: 오전 10시 0분~오후 6시 0분",
    "장기",
  ],
  "13,14": [
    " 도립서귀포관악단 제68회 정기연주회 무대설치",
    "예술의전당대극장",
    "시간: 오전 9시 0분~오후 6시 0분",
    "단기",
  ],
  "15": [
    " 도립서귀포관악단 제68회 정기연주회(온라인 녹화중계)",
    "예술의전당대극장",
    "시간: 오후 3시 30분~오후 5시 0분",
    "단기",
  ],
  "16": [
    " 제주도립 서귀포합창단 제66회 정기연주회 연습",
    "예술의전당대극장",
    "시간: 오전 10시 0분~오전 12시 0분",
    "단기",
  ],
  "20,21": [
    " 제주도립 서귀포합창단 제66회 정기연주회 연습",
    "예술의전당대극장",
    "시간: 오전 10시 0분~오후 12시 0분",
    "단기",
  ],
  "24": [
    " 요한세바스찬 바흐 국제페스티벌 콩쿨(비대면 공연)",
    "예술의전당소극장",
    "시간: 오전 9시 30분~오후 5시 0분",
    "단기",
  ],
  "25,26": [
    " 대한민국 해군 호국음악회",
    "예술의전당대극장",
    "시간: 오전 9시 0분~오후 6시 0분",
    "단기",
  ],
  "27": [
    " 대한민국 해군 호국음악회(온라인 실황중계)",
    "예술의전당대극장",
    "시간: 오후 8시 0분~오후 10시 0분",
    "단기",
  ],
  "28,29": [
    " 제주도립 서귀포합창단 제66회 정기연주회 연습",
    "예술의전당대극장",
    "시간: 오전 10시 0분~오전 12시 0분",
    "단기",
  ],
  "31": [
    [
      " 성악인재개발프로젝트 문화를 꿈꾸며 삶을 노래하며(온라인 녹화중계)",
      "예술의전당대극장",
      "시간: 오후 7시 0분~오후 9시 0분",
      "단기",
    ],
    ["『2020 제주전국국악대전』", "문예회관소극장", "시간: 10:30", "단기"],
  ],
  "6": ["음악극-해녀 양의헌", "제주아트센터 대극장", "단기"],
  "7": ["제59회 탐라문화제 개막공연", "제주아트센터 대극장", "단기"],
  "18": [
    ["창작연극-홍윤애의  비가", "제주아트센터 대극장", "단기"],
    [
      "『제12회 제주색소폰 앙상블 정기연주회』",
      "문예회관대극장",
      "시간: 16:00",
      "단기",
    ],
  ],
  "27": ["우리가곡-제주의노래", "제주아트센터 대극장", "단기"],
  "29": ["도립교향악단 제151정기연주회", "제주아트센터 대극장", "단기"],
};
