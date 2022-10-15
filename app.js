// 1) 붓 소환 : canvas.getContext("2d");
// 2) 필드 세팅 :
// - canvas.width = 800;
// - canvas.height = 800;
// 3) 사각형 그리기 : ctx.fillRect(0,0,200,400);
const canvas = document.querySelector("canvas");
// 붓 브러쉬 역할
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 처음 시작점은 0, 0이다
// moveTo로 시작점을 바꾼다.
ctx.moveTo(50, 50);
// lineTo로 시작점에서부터 이동시킨다.
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.stroke();
ctx.fill();

//ctx.moveTo(50,50);  선을 긋지 않으면서 연필위치 이동
//ctx.lineTo(150,50); // 선을 그으면서 연필위치 이동
//ctx.stroke(); // 그은 선을 보여줌(내부 색 채우지 않음)
//ctx.fill(); // 내부 색을 채움
