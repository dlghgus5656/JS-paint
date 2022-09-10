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
ctx.fillRect(100, 100, 100, 200);

// 비어지게
ctx.strokeRect(200, 100, 100, 200);
