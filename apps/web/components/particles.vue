<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';

interface MousePosition {
  x: number;
  y: number;
}

interface Circle {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
}

interface Props {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  quantity: 30,
  staticity: 50,
  ease: 50,
  refresh: false,
  color: '#ffffff',
  vx: 0,
  vy: 0,
});

const canvasRef = ref<HTMLCanvasElement | null>(null);
const canvasContainerRef = ref<HTMLDivElement | null>(null);
const context = ref<CanvasRenderingContext2D | null>(null);
const circles = ref<Circle[]>([]);
const mousePosition = ref<MousePosition>({ x: 0, y: 0 });
const mouse = ref<MousePosition>({ x: 0, y: 0 });
const canvasSize = ref<{ w: number; h: number }>({ w: 0, h: 0 });
const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

const rgb = computed(() => hexToRgb(props.color));

function hexToRgb(hex: string): number[] {
  hex = hex.replace("#", "");
  const hexInt = parseInt(hex, 16);
  const red = (hexInt >> 16) & 255;
  const green = (hexInt >> 8) & 255;
  const blue = hexInt & 255;
  return [red, green, blue];
}

function initCanvas() {
  resizeCanvas();
  drawParticles();
}

function onMouseMove(event: MouseEvent) {
  mousePosition.value = { x: event.clientX, y: event.clientY };
  if (canvasRef.value) {
    const rect = canvasRef.value.getBoundingClientRect();
    const { w, h } = canvasSize.value;
    const x = mousePosition.value.x - rect.left - w / 2;
    const y = mousePosition.value.y - rect.top - h / 2;
    const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
    if (inside) {
      mouse.value.x = x;
      mouse.value.y = y;
    }
  }
}

function resizeCanvas() {
  if (canvasContainerRef.value && canvasRef.value && context.value) {
    circles.value = [];
    canvasSize.value.w = canvasContainerRef.value.offsetWidth;
    canvasSize.value.h = canvasContainerRef.value.offsetHeight;
    canvasRef.value.width = canvasSize.value.w * dpr;
    canvasRef.value.height = canvasSize.value.h * dpr;
    canvasRef.value.style.width = `${canvasSize.value.w}px`;
    canvasRef.value.style.height = `${canvasSize.value.h}px`;
    context.value.scale(dpr, dpr);
  }
}

function circleParams(): Circle {
  const x = Math.floor(Math.random() * canvasSize.value.w);
  const y = Math.floor(Math.random() * canvasSize.value.h);
  const translateX = 0;
  const translateY = 0;
  const size = Math.floor(Math.random() * 2) + 1;
  const alpha = 0;
  const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
  const dx = (Math.random() - 0.5);
  const dy = (Math.random() - 0.5);
  const magnetism = 0.1 + Math.random() * 4;
  return { x, y, translateX, translateY, size, alpha, targetAlpha, dx, dy, magnetism };
}

function drawCircle(circle: Circle, update = false) {
  if (context.value) {
    const { x, y, translateX, translateY, size, alpha } = circle;
    context.value.translate(translateX, translateY);
    context.value.beginPath();
    context.value.arc(x, y, size, 0, 2 * Math.PI);
    context.value.fillStyle = `rgba(${rgb.value.join(", ")}, ${alpha})`;
    context.value.fill();
    context.value.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (!update) {
      circles.value.push(circle);
    }
  }
}

function clearContext() {
  if (context.value) {
    context.value.clearRect(0, 0, canvasSize.value.w, canvasSize.value.h);
  }
}

function drawParticles() {
  clearContext();
  const particleCount = props.quantity;
  for (let i = 0; i < particleCount; i++) {
    const circle = circleParams();
    drawCircle(circle);
  }
}

function remapValue(
  value: number,
  start1: number,
  end1: number,
  start2: number,
  end2: number,
): number {
  const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
  return remapped > 0 ? remapped : 0;
}

function animate() {
  clearContext();
  circles.value.forEach((circle: Circle, i: number) => {
    const edge = [
      circle.x + circle.translateX - circle.size,
      canvasSize.value.w - circle.x - circle.translateX - circle.size,
      circle.y + circle.translateY - circle.size,
      canvasSize.value.h - circle.y - circle.translateY - circle.size,
    ];
    const closestEdge = edge.reduce((a, b) => Math.min(a, b));
    const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));
    if (remapClosestEdge > 1) {
      circle.alpha += 0.02;
      if (circle.alpha > circle.targetAlpha) {
        circle.alpha = circle.targetAlpha;
      }
    } else {
      circle.alpha = circle.targetAlpha * remapClosestEdge;
    }
    circle.x += circle.dx + props.vx;
    circle.y += circle.dy + props.vy;
    circle.translateX +=
      (mouse.value.x / (props.staticity / circle.magnetism) - circle.translateX) / props.ease;
    circle.translateY +=
      (mouse.value.y / (props.staticity / circle.magnetism) - circle.translateY) / props.ease;
    
    if (
      circle.x < -circle.size ||
      circle.x > canvasSize.value.w + circle.size ||
      circle.y < -circle.size ||
      circle.y > canvasSize.value.h + circle.size
    ) {
      circles.value.splice(i, 1);
      const newCircle = circleParams();
      drawCircle(newCircle);
    } else {
      drawCircle(
        {
          ...circle,
          x: circle.x,
          y: circle.y,
          translateX: circle.translateX,
          translateY: circle.translateY,
          alpha: circle.alpha,
        },
        true,
      );
    }
  });
  requestAnimationFrame(animate);
}

onMounted(() => {
  if (canvasRef.value) {
    context.value = canvasRef.value.getContext('2d');
  }
  initCanvas();
  animate();
  window.addEventListener('resize', initCanvas);
  window.addEventListener('mousemove', onMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('resize', initCanvas);
  window.removeEventListener('mousemove', onMouseMove);
});

watch(() => props.refresh, initCanvas);
</script>

<template>
  <div :class="className" ref="canvasContainerRef" aria-hidden="true">
    <canvas ref="canvasRef" />
  </div>
</template>