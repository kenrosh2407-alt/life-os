// generate-icons.js
const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const path = require("path");

const sizes = [192, 512];
const outDir = path.join(__dirname, "public/icons");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Gradient background
function drawGradient(ctx, size) {
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, "#66A6FF"); // blue
  gradient.addColorStop(1, "#89F7FE"); // light cyan
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
}

// Centered text (LifeOS)
function drawText(ctx, size) {
  ctx.fillStyle = "#fff";
  ctx.font = `${size / 4}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("LifeOS", size / 2, size / 2);
}

sizes.forEach((size) => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");

  // Background gradient
  drawGradient(ctx, size);

  // Add white text
  drawText(ctx, size);

  // Save PNG
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(path.join(outDir, `icon-${size}x${size}.png`), buffer);

  console.log(`✅ Generated icon-${size}x${size}.png`);
});
