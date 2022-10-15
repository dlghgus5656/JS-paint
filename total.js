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

// 채워지게
// ctx.fillRect(100, 100, 100, 200);

// 비어지게
// ctx.strokeRect(200, 100, 100, 200);

// 선을 그린다.
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
// 색을 채운다.
ctx.fill();

// 기존 경로와 다른 경로를 생성한다.
ctx.beginPath();
// 선을 그린다.
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
// 채울 색을 설정한다.
ctx.fillStyle = "red";
// 색을 채운다.
ctx.fill();
