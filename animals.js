/* 十二支の土人形。原点中心、大きさは R。ctx は呼び出し側が save/restore する */
(function (global) {
  const TAU = Math.PI * 2;
  const FUR = '#f3ead6';
  const INK = '#2a231c';
  const PINK = '#d4808f';
  const SHU = '#b7392a';

  function ell(ctx, x, y, rx, ry) {
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, TAU);
  }
  function ink(ctx, R) {
    ctx.fillStyle = INK;
    ctx.strokeStyle = INK;
    ctx.lineWidth = Math.max(1, R * 0.055);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
  }
  function outline(ctx, R) {
    ctx.strokeStyle = 'rgba(21,17,13,.5)';
    ctx.lineWidth = Math.max(1.1, R * 0.07);
  }
  function eyes(ctx, R, x, y, gap, rx, ry) {
    ink(ctx, R);
    ell(ctx, x - gap, y, rx, ry); ctx.fill();
    ell(ctx, x + gap, y, rx, ry); ctx.fill();
    ctx.fillStyle = '#fff';
    ell(ctx, x - gap - rx * 0.25, y - ry * 0.28, rx * 0.35, ry * 0.35); ctx.fill();
    ell(ctx, x + gap - rx * 0.25, y - ry * 0.28, rx * 0.35, ry * 0.35); ctx.fill();
  }

  function ne(ctx, R) { // 子 ねずみ
    ctx.fillStyle = FUR;
    ctx.beginPath();
    ctx.moveTo(R * 0.15, R * 0.18);
    ctx.quadraticCurveTo(R * 0.85, R * 0.05, R * 0.72, R * 0.55);
    ctx.quadraticCurveTo(R * 0.35, R * 0.42, R * 0.15, R * 0.18);
    ctx.fill();
    outline(ctx, R); ctx.stroke();
    ell(ctx, -R * 0.02, R * 0.08, R * 0.46, R * 0.38); ctx.fillStyle = FUR; ctx.fill(); outline(ctx, R); ctx.stroke();
    ell(ctx, -R * 0.28, -R * 0.22, R * 0.16, R * 0.18); ctx.fill(); ctx.stroke();
    ell(ctx, R * 0.10, -R * 0.28, R * 0.15, R * 0.17); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PINK;
    ell(ctx, -R * 0.28, -R * 0.22, R * 0.07, R * 0.08); ctx.fill();
    ell(ctx, R * 0.10, -R * 0.28, R * 0.06, R * 0.07); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-R * 0.42, R * 0.12);
    ctx.quadraticCurveTo(-R * 0.70, R * 0.18, -R * 0.52, R * 0.32);
    ctx.quadraticCurveTo(-R * 0.32, R * 0.22, -R * 0.38, R * 0.14);
    ctx.fillStyle = FUR; ctx.fill();
    eyes(ctx, R, -R * 0.06, 0, R * 0.16, R * 0.055, R * 0.07);
    ink(ctx, R);
    ell(ctx, -R * 0.48, R * 0.20, R * 0.05, R * 0.04); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-R * 0.22, R * 0.16); ctx.lineTo(-R * 0.62, R * 0.10);
    ctx.moveTo(-R * 0.20, R * 0.22); ctx.lineTo(-R * 0.58, R * 0.26);
    ctx.stroke();
  }

  function ushi(ctx, R) { // 丑 うし
    ctx.fillStyle = FUR;
    ctx.beginPath();
    ctx.moveTo(-R * 0.38, -R * 0.18);
    ctx.quadraticCurveTo(-R * 0.62, -R * 0.62, -R * 0.22, -R * 0.48);
    ctx.lineTo(-R * 0.08, -R * 0.22);
    ctx.closePath(); ctx.fill(); outline(ctx, R); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(R * 0.38, -R * 0.18);
    ctx.quadraticCurveTo(R * 0.62, -R * 0.62, R * 0.22, -R * 0.48);
    ctx.lineTo(R * 0.08, -R * 0.22);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ell(ctx, 0, R * 0.08, R * 0.50, R * 0.42); ctx.fill(); ctx.stroke();
    ell(ctx, -R * 0.42, R * 0.02, R * 0.10, R * 0.14); ctx.fill(); ctx.stroke();
    ell(ctx, R * 0.42, R * 0.02, R * 0.10, R * 0.14); ctx.fill(); ctx.stroke();
    ell(ctx, 0, R * 0.28, R * 0.32, R * 0.18); ctx.fillStyle = '#e4d4b4'; ctx.fill();
    eyes(ctx, R, 0, -R * 0.02, R * 0.18, R * 0.06, R * 0.07);
    ink(ctx, R);
    ell(ctx, -R * 0.10, R * 0.30, R * 0.05, R * 0.04); ctx.fill();
    ell(ctx, R * 0.10, R * 0.30, R * 0.05, R * 0.04); ctx.fill();
  }

  function tora(ctx, R) { // 寅 とら
    ctx.fillStyle = '#f0d39a';
    ell(ctx, 0, R * 0.06, R * 0.48, R * 0.42); ctx.fill(); outline(ctx, R); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-R * 0.22, -R * 0.22); ctx.lineTo(-R * 0.42, -R * 0.55); ctx.lineTo(-R * 0.02, -R * 0.32);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(R * 0.22, -R * 0.22); ctx.lineTo(R * 0.42, -R * 0.55); ctx.lineTo(R * 0.02, -R * 0.32);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = '#7a4a18'; ctx.lineWidth = Math.max(1.4, R * 0.08);
    ctx.beginPath();
    ctx.moveTo(0, -R * 0.28); ctx.lineTo(0, R * 0.02);
    ctx.moveTo(-R * 0.12, -R * 0.22); ctx.lineTo(-R * 0.08, -R * 0.02);
    ctx.moveTo(R * 0.12, -R * 0.22); ctx.lineTo(R * 0.08, -R * 0.02);
    ctx.stroke();
    eyes(ctx, R, 0, R * 0.02, R * 0.16, R * 0.055, R * 0.07);
    ctx.fillStyle = SHU;
    ctx.beginPath();
    ctx.moveTo(0, R * 0.14); ctx.lineTo(-R * 0.07, R * 0.22); ctx.lineTo(R * 0.07, R * 0.22);
    ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#7a4a18'; ctx.lineWidth = Math.max(1, R * 0.055);
    ctx.beginPath();
    ctx.moveTo(-R * 0.32, R * 0.18); ctx.lineTo(-R * 0.18, R * 0.12);
    ctx.moveTo(R * 0.32, R * 0.18); ctx.lineTo(R * 0.18, R * 0.12);
    ctx.stroke();
  }

  function u(ctx, R) { // 卯 うさぎ
    ctx.fillStyle = FUR;
    ell(ctx, -R * 0.16, -R * 0.38, R * 0.12, R * 0.34); ctx.fill(); outline(ctx, R); ctx.stroke();
    ell(ctx, R * 0.16, -R * 0.40, R * 0.11, R * 0.32); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PINK;
    ell(ctx, -R * 0.16, -R * 0.38, R * 0.05, R * 0.22); ctx.fill();
    ell(ctx, R * 0.16, -R * 0.40, R * 0.045, R * 0.20); ctx.fill();
    ctx.fillStyle = FUR;
    ell(ctx, 0, R * 0.12, R * 0.44, R * 0.38); ctx.fill(); outline(ctx, R); ctx.stroke();
    eyes(ctx, R, 0, R * 0.04, R * 0.15, R * 0.055, R * 0.07);
    ctx.fillStyle = PINK;
    ell(ctx, 0, R * 0.20, R * 0.06, R * 0.045); ctx.fill();
    ink(ctx, R);
    ctx.beginPath();
    ctx.moveTo(0, R * 0.24); ctx.lineTo(0, R * 0.34);
    ctx.moveTo(0, R * 0.30); ctx.quadraticCurveTo(-R * 0.12, R * 0.36, -R * 0.16, R * 0.32);
    ctx.moveTo(0, R * 0.30); ctx.quadraticCurveTo(R * 0.12, R * 0.36, R * 0.16, R * 0.32);
    ctx.stroke();
  }

  function tatsu(ctx, R) { // 辰 たつ
    ctx.fillStyle = '#d8c07a';
    ctx.beginPath();
    ctx.moveTo(R * 0.35, R * 0.42);
    ctx.quadraticCurveTo(-R * 0.05, R * 0.55, -R * 0.38, R * 0.18);
    ctx.quadraticCurveTo(-R * 0.55, -R * 0.20, -R * 0.10, -R * 0.08);
    ctx.quadraticCurveTo(R * 0.35, R * 0.08, R * 0.18, -R * 0.12);
    ctx.quadraticCurveTo(R * 0.02, -R * 0.35, R * 0.22, -R * 0.42);
    ctx.quadraticCurveTo(R * 0.48, -R * 0.18, R * 0.28, R * 0.10);
    ctx.quadraticCurveTo(R * 0.55, R * 0.22, R * 0.35, R * 0.42);
    ctx.fill(); outline(ctx, R); ctx.stroke();
    ctx.fillStyle = FUR;
    ell(ctx, R * 0.18, -R * 0.22, R * 0.22, R * 0.20); ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(R * 0.08, -R * 0.38); ctx.lineTo(R * 0.02, -R * 0.62); ctx.lineTo(R * 0.18, -R * 0.42);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(R * 0.28, -R * 0.36); ctx.lineTo(R * 0.38, -R * 0.62); ctx.lineTo(R * 0.36, -R * 0.38);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    eyes(ctx, R, R * 0.20, -R * 0.24, R * 0.08, R * 0.045, R * 0.055);
    ctx.strokeStyle = '#f6f1e6'; ctx.lineWidth = Math.max(1, R * 0.045);
    ctx.beginPath();
    ctx.moveTo(R * 0.00, -R * 0.18); ctx.quadraticCurveTo(-R * 0.22, -R * 0.10, -R * 0.28, R * 0.08);
    ctx.moveTo(R * 0.32, -R * 0.16); ctx.quadraticCurveTo(R * 0.55, -R * 0.02, R * 0.52, R * 0.16);
    ctx.stroke();
  }

  function mi(ctx, R) { // 巳 み
    ctx.strokeStyle = '#6f5f9e';
    ctx.lineWidth = R * 0.28;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-R * 0.38, R * 0.38);
    ctx.bezierCurveTo(-R * 0.55, R * 0.05, R * 0.10, R * 0.05, R * 0.08, -R * 0.12);
    ctx.bezierCurveTo(R * 0.06, -R * 0.38, R * 0.42, -R * 0.42, R * 0.32, -R * 0.18);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(21,17,13,.35)';
    ctx.lineWidth = R * 0.08;
    ctx.beginPath();
    ctx.moveTo(-R * 0.30, R * 0.28);
    ctx.bezierCurveTo(-R * 0.40, R * 0.08, R * 0.04, 0, R * 0.10, -R * 0.14);
    ctx.stroke();
    ctx.fillStyle = '#8a79b8';
    ell(ctx, R * 0.28, -R * 0.28, R * 0.18, R * 0.16); ctx.fill(); outline(ctx, R); ctx.stroke();
    eyes(ctx, R, R * 0.30, -R * 0.30, R * 0.06, R * 0.04, R * 0.05);
    ctx.strokeStyle = SHU; ctx.lineWidth = Math.max(1.2, R * 0.06);
    ctx.beginPath();
    ctx.moveTo(R * 0.42, -R * 0.22); ctx.lineTo(R * 0.58, -R * 0.08);
    ctx.moveTo(R * 0.42, -R * 0.22); ctx.lineTo(R * 0.56, -R * 0.28);
    ctx.stroke();
  }

  function uma(ctx, R) { // 午 うま
    ctx.fillStyle = '#e8c9a0';
    ctx.beginPath();
    ctx.moveTo(R * 0.08, -R * 0.08);
    ctx.quadraticCurveTo(R * 0.55, -R * 0.18, R * 0.62, R * 0.18);
    ctx.quadraticCurveTo(R * 0.48, R * 0.38, R * 0.18, R * 0.22);
    ctx.quadraticCurveTo(-R * 0.05, R * 0.12, R * 0.08, -R * 0.08);
    ctx.fill(); outline(ctx, R); ctx.stroke();
    ell(ctx, -R * 0.12, R * 0.04, R * 0.32, R * 0.36); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#6a3a22';
    ctx.beginPath();
    ctx.moveTo(-R * 0.08, -R * 0.28);
    ctx.quadraticCurveTo(-R * 0.42, -R * 0.55, -R * 0.48, -R * 0.05);
    ctx.quadraticCurveTo(-R * 0.22, -R * 0.18, -R * 0.02, -R * 0.08);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#e8c9a0';
    ell(ctx, -R * 0.18, -R * 0.32, R * 0.08, R * 0.12); ctx.fill(); outline(ctx, R); ctx.stroke();
    ell(ctx, R * 0.02, -R * 0.30, R * 0.07, R * 0.11); ctx.fill(); ctx.stroke();
    eyes(ctx, R, -R * 0.02, -R * 0.02, R * 0.10, R * 0.045, R * 0.06);
    ink(ctx, R);
    ell(ctx, R * 0.52, R * 0.12, R * 0.05, R * 0.035); ctx.fill();
  }

  function hitsuji(ctx, R) { // 未 ひつじ
    ctx.fillStyle = FUR;
    ell(ctx, -R * 0.18, -R * 0.02, R * 0.28, R * 0.28); ctx.fill();
    ell(ctx, R * 0.18, -R * 0.06, R * 0.26, R * 0.26); ctx.fill();
    ell(ctx, -R * 0.02, R * 0.18, R * 0.38, R * 0.28); ctx.fill();
    ell(ctx, R * 0.22, R * 0.16, R * 0.24, R * 0.22); ctx.fill();
    outline(ctx, R);
    ctx.beginPath();
    ctx.arc(0, R * 0.04, R * 0.48, 0, TAU); ctx.stroke();
    ctx.strokeStyle = '#c8b48a'; ctx.lineWidth = Math.max(2, R * 0.09);
    ctx.beginPath();
    ctx.arc(-R * 0.18, -R * 0.28, R * 0.16, 0.2, 3.4); ctx.stroke();
    ctx.beginPath();
    ctx.arc(R * 0.18, -R * 0.28, R * 0.16, -0.4, 2.9); ctx.stroke();
    ctx.fillStyle = '#e8d5b0';
    ell(ctx, 0, R * 0.10, R * 0.22, R * 0.20); ctx.fill();
    eyes(ctx, R, 0, R * 0.06, R * 0.09, R * 0.04, R * 0.05);
    ctx.fillStyle = PINK;
    ell(ctx, 0, R * 0.18, R * 0.05, R * 0.035); ctx.fill();
  }

  function saru(ctx, R) { // 申 さる
    ctx.fillStyle = '#c48a52';
    ell(ctx, 0, R * 0.04, R * 0.46, R * 0.44); ctx.fill(); outline(ctx, R); ctx.stroke();
    ell(ctx, -R * 0.46, R * 0.02, R * 0.14, R * 0.18); ctx.fill(); ctx.stroke();
    ell(ctx, R * 0.46, R * 0.02, R * 0.14, R * 0.18); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#f3ead6';
    ell(ctx, 0, R * 0.12, R * 0.32, R * 0.28); ctx.fill();
    ell(ctx, 0, -R * 0.08, R * 0.22, R * 0.18); ctx.fill();
    eyes(ctx, R, 0, -R * 0.04, R * 0.12, R * 0.05, R * 0.06);
    ctx.fillStyle = PINK;
    ell(ctx, 0, R * 0.14, R * 0.05, R * 0.04); ctx.fill();
    ink(ctx, R);
    ctx.beginPath();
    ctx.arc(0, R * 0.22, R * 0.12, 0.15, Math.PI - 0.15); ctx.stroke();
  }

  function tori(ctx, R) { // 酉 とり
    ctx.fillStyle = '#f0d9a8';
    ell(ctx, 0, R * 0.10, R * 0.42, R * 0.34); ctx.fill(); outline(ctx, R); ctx.stroke();
    ell(ctx, R * 0.22, -R * 0.12, R * 0.22, R * 0.20); ctx.fill(); ctx.stroke();
    ctx.fillStyle = SHU;
    ctx.beginPath();
    ctx.moveTo(R * 0.12, -R * 0.28);
    ctx.lineTo(R * 0.18, -R * 0.55); ctx.lineTo(R * 0.28, -R * 0.28);
    ctx.lineTo(R * 0.38, -R * 0.48); ctx.lineTo(R * 0.36, -R * 0.22);
    ctx.closePath(); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(R * 0.38, -R * 0.02); ctx.lineTo(R * 0.62, R * 0.08); ctx.lineTo(R * 0.36, R * 0.10);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#d4a843';
    ctx.beginPath();
    ctx.moveTo(R * 0.40, -R * 0.12); ctx.lineTo(R * 0.62, -R * 0.06); ctx.lineTo(R * 0.40, 0);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#c45a3a';
    ctx.beginPath();
    ctx.moveTo(-R * 0.30, R * 0.10);
    ctx.quadraticCurveTo(-R * 0.62, -R * 0.05, -R * 0.48, R * 0.22);
    ctx.quadraticCurveTo(-R * 0.55, R * 0.38, -R * 0.22, R * 0.28);
    ctx.closePath(); ctx.fill();
    eyes(ctx, R, R * 0.22, -R * 0.14, 0, R * 0.05, R * 0.06);
  }

  function inu(ctx, R) { // 戌 いぬ
    ctx.fillStyle = FUR;
    ctx.beginPath();
    ctx.moveTo(-R * 0.18, -R * 0.18);
    ctx.quadraticCurveTo(-R * 0.55, -R * 0.08, -R * 0.48, R * 0.28);
    ctx.quadraticCurveTo(-R * 0.22, R * 0.08, -R * 0.08, -R * 0.02);
    ctx.closePath(); ctx.fill(); outline(ctx, R); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(R * 0.16, -R * 0.22);
    ctx.lineTo(R * 0.42, -R * 0.52); ctx.lineTo(R * 0.38, -R * 0.08);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ell(ctx, 0, R * 0.08, R * 0.44, R * 0.40); ctx.fill(); ctx.stroke();
    ell(ctx, R * 0.18, R * 0.22, R * 0.28, R * 0.18); ctx.fill(); ctx.stroke();
    eyes(ctx, R, -R * 0.04, 0, R * 0.14, R * 0.055, R * 0.07);
    ctx.fillStyle = INK;
    ell(ctx, R * 0.36, R * 0.20, R * 0.06, R * 0.045); ctx.fill();
    ctx.fillStyle = PINK;
    ctx.beginPath();
    ctx.moveTo(R * 0.22, R * 0.30); ctx.quadraticCurveTo(R * 0.28, R * 0.46, R * 0.12, R * 0.38);
    ctx.closePath(); ctx.fill();
  }

  function i(ctx, R) { // 亥 いのしし
    ctx.fillStyle = '#c4b08a';
    ell(ctx, 0, R * 0.06, R * 0.50, R * 0.40); ctx.fill(); outline(ctx, R); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-R * 0.22, -R * 0.22); ctx.lineTo(-R * 0.32, -R * 0.52); ctx.lineTo(-R * 0.02, -R * 0.28);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(R * 0.22, -R * 0.22); ctx.lineTo(R * 0.32, -R * 0.52); ctx.lineTo(R * 0.02, -R * 0.28);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#d8c4a0';
    ell(ctx, 0, R * 0.22, R * 0.28, R * 0.18); ctx.fill(); ctx.stroke();
    eyes(ctx, R, 0, -R * 0.04, R * 0.16, R * 0.05, R * 0.06);
    ink(ctx, R);
    ell(ctx, -R * 0.08, R * 0.22, R * 0.04, R * 0.03); ctx.fill();
    ell(ctx, R * 0.08, R * 0.22, R * 0.04, R * 0.03); ctx.fill();
    ctx.fillStyle = '#f6f1e6';
    ctx.beginPath();
    ctx.moveTo(-R * 0.22, R * 0.28); ctx.lineTo(-R * 0.32, R * 0.42); ctx.lineTo(-R * 0.12, R * 0.32);
    ctx.closePath(); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(R * 0.22, R * 0.28); ctx.lineTo(R * 0.32, R * 0.42); ctx.lineTo(R * 0.12, R * 0.32);
    ctx.closePath(); ctx.fill();
  }

  const FNS = [ne, ushi, tora, u, tatsu, mi, uma, hitsuji, saru, tori, inu, i];

  function drawEtoAnimal(ctx, k, R) {
    const fn = FNS[k];
    if (!fn) return;
    ctx.save();
    fn(ctx, R);
    ctx.restore();
  }

  function bakeEtoSprites(size) {
    const out = [];
    for (let k = 0; k < 12; k++) {
      const c = document.createElement('canvas');
      c.width = c.height = size;
      const g = c.getContext('2d');
      g.translate(size / 2, size * 0.54);
      drawEtoAnimal(g, k, size * 0.40);
      out.push(c);
    }
    return out;
  }

  global.drawEtoAnimal = drawEtoAnimal;
  global.bakeEtoSprites = bakeEtoSprites;
})(typeof window !== 'undefined' ? window : globalThis);
