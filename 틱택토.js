var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 = [];
var 칸들 = [];
var 턴 = 'X';

var 비동기콜백 = function(이벤트) {
 var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
 console.log('몇줄', 몇줄);
 var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
 console.log('몇칸', 몇칸);

if (칸들[몇줄][몇칸].textContent !== '') { //칸이 이미 채워져 있는가?
 console.log('빈 칸아닙니다.');
} else {
   console.log('빈 칸입니다');
   칸들[몇줄][몇칸].textContent = 턴;
     // 세칸 다 채워졌나?   
  var 다참 = false;
  // 가로줄 검사
  if (
    칸들[몇줄][0].textContent === 턴 && 
    칸들[몇줄][1].textContent === 턴 && 
    칸들[몇줄][2].textContent === 턴 
   ) {
    다참 = true;
  }
  // 세로줄 검사
  if (
    칸들[0][몇칸].textContent === 턴 && 
    칸들[1][몇칸].textContent === 턴 &&
    칸들[2][몇칸].textContent === 턴 
  ) {
    다참 = true;
  }
  // 대각선 검사
  if (몇줄 - 몇칸 === 0) { //대각선 검사 필요한 경우
    if (
      칸들[0][0].textContent === 턴 &&
      칸들[1][1].textContent === 턴 &&
      칸들[2][2].textContent === 턴 
    ) {
      다참 = true;
    } 
  }
  if (Math.abs(몇줄 - 몇칸) === 2) { //대각선 검사 필요한 경우
   if (
    칸들[0][2].textContent === 턴 &&
    칸들[1][1].textContent === 턴 &&
    칸들[2][0].textContent === 턴 
  ) {
    다참 = true;
  } 
}
   // 다 찼으면
   if (다참) {
     console.log(턴 + '님이 승리!');
     // 초기화
     턴 ='X'
     칸들.forEach(function (줄) {
       줄.forEach(function (칸) {
        칸.textContent ='';
      });
    });
   } else { // 다 안 찼으면
     if (턴 === 'X') {
    턴 = '0';
  } else {
    턴 ='X';
  }
}
}
};
  
for (var i = 1; i <=3; i+= 1) {
   var 줄 = document.createElement('tr');
   줄들.push(줄);
   칸들.push([]);
   for (var j = 1; j <= 3; j+= 1) {
   var 칸 = document.createElement('td');
   칸.addEventListener('click', 비동기콜백);
   칸들[i - 1].push(칸);
   줄.appendChild(칸);
 }
   테이블.appendChild(줄)
}
바디.appendChild(테이블);
console.log(칸들);
console.log('줄들', 줄들, '칸들', 칸들);
