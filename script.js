// تأثير "Matrix Rain" باللون الأخضر
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

// مجموعة الأحرف (يمكنك تعديلها)
const letters = 'あアカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&+=<>/\\';
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

function draw() {
  // خلفية شبه شفافة لعمل الذيل
  ctx.fillStyle = 'rgba(0, 0, 0, 0.09)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00ff88';
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    // إعادة التتالي عشوائياً
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = Math.floor(Math.random() * -40);
    } else {
      drops[i]++;
    }
  }
  requestAnimationFrame(draw);
}
draw();
