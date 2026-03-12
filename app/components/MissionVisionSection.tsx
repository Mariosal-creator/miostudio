"use client";

import { useEffect, useRef, useState } from "react";

export default function MissionVisionSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d", { alpha: true });

    if (!context) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let frameId = 0;
    let startTime = 0;

    const drawRoundedRectPath = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      w: number,
      h: number,
      r: number
    ) => {
      const radius = Math.max(0, Math.min(r, Math.min(w, h) / 2));
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + w - radius, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
      ctx.lineTo(x + w, y + h - radius);
      ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
      ctx.lineTo(x + radius, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    };

    const setCanvasSize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(1, Math.floor(bounds.width));
      height = Math.max(1, Math.floor(bounds.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawCubistWordmark = (x: number, y: number, elapsedMs: number, scaleOverride?: number) => {
      const glyphs: Record<string, Array<[number, number, number, number]>> = {
        M: [[0, 10, 0, 0], [0, 0, 3, 5], [3, 5, 6, 0], [6, 0, 6, 10]],
        O: [[0, 2, 2, 0], [2, 0, 5, 0], [5, 0, 7, 2], [7, 2, 7, 8], [7, 8, 5, 10], [5, 10, 2, 10], [2, 10, 0, 8], [0, 8, 0, 2]],
        I: [[0, 0, 7, 0], [3.5, 0, 3.5, 10], [0, 10, 7, 10]],
        S: [[7, 1, 5, 0], [5, 0, 2, 0], [2, 0, 0, 2], [0, 2, 0, 4], [0, 4, 7, 6], [7, 6, 7, 8], [7, 8, 5, 10], [5, 10, 2, 10], [2, 10, 0, 9]],
        T: [[0, 0, 8, 0], [4, 0, 4, 10]],
        U: [[0, 0, 0, 8], [0, 8, 2, 10], [2, 10, 6, 10], [6, 10, 8, 8], [8, 8, 8, 0]],
        D: [[0, 0, 0, 10], [0, 0, 5, 0], [5, 0, 8, 3], [8, 3, 8, 7], [8, 7, 5, 10], [5, 10, 0, 10]],
        " ": [],
      };

      const letters = "MOI STUDIO";
      const scale = scaleOverride ?? 1.25;
      const spacing = 10;
      const wordmarkAlpha = prefersReducedMotion
        ? 0.72
        : 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(elapsedMs * 0.0022));

      context.save();
      context.translate(x, y);
      context.scale(scale, scale);
      context.strokeStyle = `rgba(255, 255, 255, ${wordmarkAlpha.toFixed(3)})`;
      context.lineWidth = 1.2;
      context.lineCap = "round";
      context.lineJoin = "round";

      let cursorX = 0;
      for (const letter of letters) {
        const segments = glyphs[letter] ?? [];

        if (letter === " ") {
          cursorX += spacing;
          continue;
        }

        context.beginPath();
        for (const [x1, y1, x2, y2] of segments) {
          context.moveTo(cursorX + x1, y1);
          context.lineTo(cursorX + x2, y2);
        }
        context.stroke();
        cursorX += spacing;
      }

      context.restore();
    };

    const drawClapper = (elapsedMs: number) => {
      const isMobile = width < 768;
      const centerX = isMobile ? width * 0.5 : width * 0.5;
      const centerY = isMobile ? height * 0.28 : height * 0.30;
      const baseW = isMobile
        ? Math.max(96, Math.min(126, width * 0.24))
        : Math.max(160, Math.min(250, width * 0.22));
      const baseH = baseW * 0.58;
      const hingeX = centerX - baseW * 0.45;
      const hingeY = centerY - baseH * 0.47;
      const swing = prefersReducedMotion ? 0.04 : Math.sin(elapsedMs * 0.002) * 0.22;

      context.save();
      context.translate(centerX, centerY);
      context.rotate(-0.12);
      context.translate(-centerX, -centerY);

      context.strokeStyle = "rgba(255, 255, 255, 0.74)";
      context.lineWidth = 1.6;

      // Cubist base (trapezoid)
      context.beginPath();
      context.moveTo(centerX - baseW / 2 + 6, centerY - baseH / 2 + 18);
      context.lineTo(centerX + baseW / 2 - 8, centerY - baseH / 2 + 14);
      context.lineTo(centerX + baseW / 2 - 2, centerY + baseH / 2 + 16);
      context.lineTo(centerX - baseW / 2 - 4, centerY + baseH / 2 + 20);
      context.closePath();
      context.stroke();

      context.beginPath();
      context.moveTo(centerX - baseW / 2 + 12, centerY - baseH / 2 + 28);
      context.lineTo(centerX + baseW / 2 - 12, centerY - baseH / 2 + 23);
      context.stroke();

      // Cubist line-art label on clapper body.
      // Calculate proper centering: "MOI STUDIO" width = 9 letters * 10 spacing = ~90 units base
      const wordmarkWidth = 90;
      const scale = isMobile ? 0.82 : 1.08;
      const scaledWordmarkWidth = wordmarkWidth * scale;
      const wordmarkOffsetX = (scaledWordmarkWidth / 2);
      drawCubistWordmark(
        centerX - wordmarkOffsetX,
        isMobile ? centerY + 6 : centerY + 4,
        elapsedMs,
        scale
      );

      context.save();
      context.translate(hingeX, hingeY);
      context.rotate(-0.22 + swing);
      context.translate(-hingeX, -hingeY);

      context.strokeStyle = "rgba(255, 255, 255, 0.82)";
      context.lineWidth = 1.4;

      // Cubist top clap bar
      context.beginPath();
      context.moveTo(centerX - baseW / 2 - 2, centerY - baseH / 2 - 12);
      context.lineTo(centerX + baseW / 2 + 2, centerY - baseH / 2 - 18);
      context.lineTo(centerX + baseW / 2 + 4, centerY - baseH / 2 + 10);
      context.lineTo(centerX - baseW / 2 - 5, centerY - baseH / 2 + 16);
      context.closePath();
      context.stroke();

      const stripeCount = 7;
      const stripeWidth = baseW / stripeCount;
      for (let index = 0; index < stripeCount; index += 1) {
        if (index % 2 === 0) {
          context.beginPath();
          context.moveTo(centerX - baseW / 2 + index * stripeWidth, centerY - baseH / 2 - 11);
          context.lineTo(centerX - baseW / 2 + (index + 1) * stripeWidth, centerY - baseH / 2 + 11);
          context.stroke();
        }
      }

      // Hinge circles
      context.beginPath();
      context.arc(centerX - baseW * 0.43, centerY - baseH / 2 + 2, 2.2, 0, Math.PI * 2);
      context.arc(centerX + baseW * 0.43, centerY - baseH / 2 + 2, 2.2, 0, Math.PI * 2);
      context.stroke();

      context.restore();
      context.restore();
    };

    const drawSonyCamera = (elapsedMs: number) => {
      const isMobile = width < 768;
      const anchorX = isMobile ? width * 0.3 : width * 0.33;
      const anchorY = isMobile ? height * 0.28 : height * 0.30;
      const bob = isMobile ? 0 : (prefersReducedMotion ? 0 : Math.sin(elapsedMs * 0.0018) * 5);
      const cameraScale = isMobile ? 0.56 : 0.95;
      const focusPulse = prefersReducedMotion ? 0 : Math.sin(elapsedMs * 0.002) * 0.8;

      context.save();
      context.translate(anchorX, anchorY + bob);
      context.scale(cameraScale, cameraScale);

      context.strokeStyle = "rgba(255, 255, 255, 0.74)";
      context.lineWidth = 1.5;

      // Camera body
      context.beginPath();
      context.moveTo(-68, -10);
      context.lineTo(62, -14);
      context.lineTo(70, 56);
      context.lineTo(-74, 60);
      context.closePath();
      context.stroke();

      // Top hump / EVF section
      context.beginPath();
      context.moveTo(-18, -22);
      context.lineTo(20, -24);
      context.lineTo(22, -8);
      context.lineTo(-20, -6);
      context.closePath();
      context.stroke();

      // Lens outer ring
      context.beginPath();
      context.arc(8, 22, 26, 0, Math.PI * 2);
      context.stroke();

      // Lens inner rings + subtle focus pulse
      context.strokeStyle = "rgba(255, 255, 255, 0.62)";
      context.lineWidth = 1.2;
      context.beginPath();
      context.arc(8, 22, 16 + focusPulse, 0, Math.PI * 2);
      context.stroke();
      context.beginPath();
      context.arc(8, 22, 8, 0, Math.PI * 2);
      context.stroke();

      // Lens polygon facets (cubist)
      context.beginPath();
      context.moveTo(8, 6);
      context.lineTo(20, 14);
      context.lineTo(18, 30);
      context.lineTo(6, 38);
      context.lineTo(-6, 30);
      context.lineTo(-4, 14);
      context.closePath();
      context.stroke();

      // Non-crossing facet separators (orthogonal)
      context.beginPath();
      context.moveTo(8, 6);
      context.lineTo(8, 38);
      context.moveTo(-4, 14);
      context.lineTo(20, 14);
      context.moveTo(-6, 30);
      context.lineTo(18, 30);
      context.stroke();

      // Remove diagonal intersections by using only vertical and horizontal guides
      context.beginPath();
      context.moveTo(0, 10);
      context.lineTo(0, 34);
      context.moveTo(16, 10);
      context.lineTo(16, 34);
      context.moveTo(-2, 22);
      context.lineTo(18, 22);
      context.stroke();

      // Brand plate (Sony style wordmark area)
      context.strokeStyle = "rgba(255, 255, 255, 0.7)";
      context.lineWidth = 1.1;
      context.beginPath();
      drawRoundedRectPath(context, -58, -2, 30, 10, 2);
      context.stroke();
      context.font = "bold 7px Arial";
      context.fillStyle = "rgba(255,255,255,0.72)";
      context.fillText("SONY", -54, 5);

      // Buttons / dials
      context.beginPath();
      context.arc(-8, -15, 4, 0, Math.PI * 2);
      context.arc(34, -16, 3.2, 0, Math.PI * 2);
      context.stroke();

      // Top panel guides without crossing
      context.beginPath();
      context.moveTo(-16, -12);
      context.lineTo(18, -14);
      context.moveTo(-12, -9);
      context.lineTo(14, -11);
      context.stroke();

      // Grip lines
      context.beginPath();
      context.moveTo(44, -5);
      context.lineTo(52, 47);
      context.moveTo(50, -7);
      context.lineTo(58, 45);
      context.stroke();

      // Hotshoe
      context.beginPath();
      context.moveTo(-4, -28);
      context.lineTo(10, -29);
      context.lineTo(9, -24);
      context.lineTo(-5, -23);
      context.closePath();
      context.stroke();

      // Strap lines
      context.strokeStyle = "rgba(255, 255, 255, 0.5)";
      context.beginPath();
      context.moveTo(-74, 8);
      context.lineTo(-90, 20);
      context.moveTo(70, 10);
      context.lineTo(86, 22);
      context.stroke();

      context.restore();
    };

    const drawStudioHeadphones = (elapsedMs: number) => {
      const isMobile = width < 768;
      const anchorX = isMobile ? width * 0.7 : width * 0.64;
      const anchorY = isMobile ? height * 0.28 : height * 0.30;
      const bob = isMobile ? 0 : (prefersReducedMotion ? 0 : Math.sin(elapsedMs * 0.0019 + 1.2) * 5);
      const scale = isMobile ? 0.64 : 1;

      context.save();
      context.translate(anchorX, anchorY + bob);
      context.scale(scale, scale);

      context.strokeStyle = "rgba(255, 255, 255, 0.74)";
      context.lineWidth = 1.5;

      // Headband outer arc (angular approximation)
      context.beginPath();
      context.moveTo(-52, 8);
      context.lineTo(-42, -18);
      context.lineTo(-18, -36);
      context.lineTo(18, -36);
      context.lineTo(42, -18);
      context.lineTo(52, 8);
      context.stroke();

      // Headband inner arc
      context.strokeStyle = "rgba(255, 255, 255, 0.52)";
      context.beginPath();
      context.moveTo(-42, 8);
      context.lineTo(-34, -10);
      context.lineTo(-14, -24);
      context.lineTo(14, -24);
      context.lineTo(34, -10);
      context.lineTo(42, 8);
      context.stroke();

      context.strokeStyle = "rgba(255, 255, 255, 0.74)";

      // Left earcup (cubist polygon)
      context.beginPath();
      context.moveTo(-58, 6);
      context.lineTo(-34, 4);
      context.lineTo(-30, 40);
      context.lineTo(-56, 44);
      context.closePath();
      context.stroke();

      // Right earcup (cubist polygon)
      context.beginPath();
      context.moveTo(34, 4);
      context.lineTo(58, 6);
      context.lineTo(56, 44);
      context.lineTo(30, 40);
      context.closePath();
      context.stroke();

      // Inner cushions
      context.strokeStyle = "rgba(255, 255, 255, 0.58)";
      context.beginPath();
      context.moveTo(-51, 12);
      context.lineTo(-40, 11);
      context.lineTo(-38, 34);
      context.lineTo(-50, 36);
      context.closePath();
      context.stroke();

      context.beginPath();
      context.moveTo(40, 11);
      context.lineTo(51, 12);
      context.lineTo(50, 36);
      context.lineTo(38, 34);
      context.closePath();
      context.stroke();

      // Yokes / hinges
      context.strokeStyle = "rgba(255, 255, 255, 0.68)";
      context.beginPath();
      context.moveTo(-40, 6);
      context.lineTo(-33, -4);
      context.moveTo(40, 6);
      context.lineTo(33, -4);
      context.stroke();

      // Pro cable
      context.strokeStyle = "rgba(255, 255, 255, 0.46)";
      context.beginPath();
      context.moveTo(52, 42);
      context.lineTo(70, 56);
      context.lineTo(62, 74);
      context.lineTo(82, 88);
      context.stroke();

      context.restore();
    };

    const drawFilmStrip = (elapsedMs: number) => {
      const isMobile = width < 768;
      const stripHeight = isMobile ? 32 : 38;
      const stripGap = isMobile ? 30 : 36;
      const startY = isMobile ? height * 0.45 : height * 0.48;
      const speed = prefersReducedMotion ? 0.02 : 0.09;
      const offset = (elapsedMs * speed) % (stripGap * 2);

      context.save();
      context.lineWidth = 2;
      context.lineCap = "round";
      context.lineJoin = "round";

      // Helper function: cubic bezier point calculation
      const bezierPoint = (t: number, p0: number, p1: number, p2: number, p3: number): number => {
        const mt = 1 - t;
        return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3;
      };

      // Helper function: find t parameter for a given x on a bezier curve (via binary search)
      const findTForX = (targetX: number, p0x: number, p1x: number, p2x: number, p3x: number): number => {
        let t = 0.5;
        let dt = 0.25;
        for (let i = 0; i < 16; i++) {
          const x = bezierPoint(t, p0x, p1x, p2x, p3x);
          if (x < targetX) t += dt;
          else t -= dt;
          dt *= 0.5;
        }
        return t;
      };

      // Top ribbon
      context.strokeStyle = "rgba(255, 255, 255, 0.75)";
      context.beginPath();
      context.moveTo(-120 + offset, startY);
      context.bezierCurveTo(width * 0.22, startY - 12, width * 0.42, startY + 10, width * 0.62, startY - 8);
      context.bezierCurveTo(width * 0.8, startY - 22, width * 0.92, startY - 6, width + 120 + offset, startY - 14);
      context.stroke();

      // Bottom ribbon
      context.beginPath();
      context.moveTo(-120 + offset, startY + stripHeight);
      context.bezierCurveTo(width * 0.22, startY + stripHeight - 12, width * 0.42, startY + stripHeight + 10, width * 0.62, startY + stripHeight - 8);
      context.bezierCurveTo(width * 0.8, startY + stripHeight - 22, width * 0.92, startY + stripHeight - 6, width + 120 + offset, startY + stripHeight - 14);
      context.stroke();

      // Closure lines around perforations to frame the circular holes
      context.strokeStyle = "rgba(255, 255, 255, 0.48)";
      context.lineWidth = 1.1;

      context.beginPath();
      context.moveTo(-120 + offset, startY - 14);
      context.bezierCurveTo(width * 0.22, startY - 26, width * 0.42, startY - 4, width * 0.62, startY - 22);
      context.bezierCurveTo(width * 0.8, startY - 36, width * 0.92, startY - 20, width + 120 + offset, startY - 28);
      context.stroke();

      context.beginPath();
      context.moveTo(-120 + offset, startY + stripHeight + 14);
      context.bezierCurveTo(width * 0.22, startY + stripHeight + 2, width * 0.42, startY + stripHeight + 24, width * 0.62, startY + stripHeight + 6);
      context.bezierCurveTo(width * 0.8, startY + stripHeight - 8, width * 0.92, startY + stripHeight + 8, width + 120 + offset, startY + stripHeight);
      context.stroke();

      // Perforations - circular holes that follow the exact curve
      context.fillStyle = "rgba(0, 0, 0, 0.7)";
      context.strokeStyle = "rgba(255, 255, 255, 0.5)";
      context.lineWidth = 0.8;
      
      for (let i = 0, x = -80 + offset; x < width + 120; x += stripGap, i++) {
        // First bezier curve segment
        const curve1_p0x = -120 + offset, curve1_p0y = startY;
        const curve1_p1x = width * 0.22, curve1_p1y = startY - 12;
        const curve1_p2x = width * 0.42, curve1_p2y = startY + 10;
        const curve1_p3x = width * 0.62, curve1_p3y = startY - 8;

        // Second bezier curve segment
        const curve2_p0x = width * 0.62, curve2_p0y = startY - 8;
        const curve2_p1x = width * 0.8, curve2_p1y = startY - 22;
        const curve2_p2x = width * 0.92, curve2_p2y = startY - 6;
        const curve2_p3x = width + 120 + offset, curve2_p3y = startY - 14;

        let curveYTop, curveYBottom: number;

        // Determine which curve and calculate Y
        if (x >= curve1_p0x && x <= curve1_p3x) {
          const t = findTForX(x, curve1_p0x, curve1_p1x, curve1_p2x, curve1_p3x);
          curveYTop = bezierPoint(t, curve1_p0y, curve1_p1y, curve1_p2y, curve1_p3y);
          curveYBottom = bezierPoint(t, curve1_p0y + stripHeight, curve1_p1y + stripHeight, curve1_p2y + stripHeight, curve1_p3y + stripHeight);
        } else if (x > curve1_p3x && x <= curve2_p3x) {
          const t = findTForX(x, curve2_p0x, curve2_p1x, curve2_p2x, curve2_p3x);
          curveYTop = bezierPoint(t, curve2_p0y, curve2_p1y, curve2_p2y, curve2_p3y);
          curveYBottom = bezierPoint(t, curve2_p0y + stripHeight, curve2_p1y + stripHeight, curve2_p2y + stripHeight, curve2_p3y + stripHeight);
        } else {
          continue;
        }

        // Center dividers for each frame segment
        if (i % 2 === 0) {
          context.strokeStyle = "rgba(255, 255, 255, 0.34)";
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(x, curveYTop + 2);
          context.lineTo(x, curveYBottom - 2);
          context.stroke();
        }

        // Top row perforations - offset from curve line
        context.strokeStyle = "rgba(255, 255, 255, 0.5)";
        context.lineWidth = 0.8;
        context.beginPath();
        context.arc(x, curveYTop - 4, 3.5, 0, Math.PI * 2);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(x, curveYTop - 9, 3.5, 0, Math.PI * 2);
        context.fill();
        context.stroke();

        // Bottom row perforations - offset from curve line
        context.beginPath();
        context.arc(x, curveYBottom + 4, 3.5, 0, Math.PI * 2);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(x, curveYBottom + 9, 3.5, 0, Math.PI * 2);
        context.fill();
        context.stroke();
      }

      context.restore();
    };

    const drawCubistNames = (elapsedMs: number) => {
      const isMobile = width < 768;

      const glyphs: Record<string, Array<[number, number, number, number]>> = {
        A: [[0, 10, 4, 0], [4, 0, 8, 10], [1.5, 6, 6.5, 6]],
        B: [[0, 0, 0, 10], [0, 0, 5, 0], [5, 0, 7, 2], [7, 2, 5, 5], [5, 5, 0, 5], [5, 5, 7, 7], [7, 7, 5, 10], [5, 10, 0, 10]],
        C: [[7, 2, 5, 0], [5, 0, 2, 0], [2, 0, 0, 2], [0, 2, 0, 8], [0, 8, 2, 10], [2, 10, 5, 10], [5, 10, 7, 8]],
        E: [[0, 0, 0, 10], [0, 0, 7, 0], [0, 5, 5, 5], [0, 10, 7, 10]],
        I: [[0, 0, 7, 0], [3.5, 0, 3.5, 10], [0, 10, 7, 10]],
        L: [[0, 0, 0, 10], [0, 10, 7, 10]],
        N: [[0, 10, 0, 0], [0, 0, 6, 10], [6, 10, 6, 0]],
        Ñ: [[0, 10, 0, 0], [0, 0, 6, 10], [6, 10, 6, 0], [1, -3, 3, -5], [3, -5, 5, -3]],
        O: [[0, 2, 2, 0], [2, 0, 5, 0], [5, 0, 7, 2], [7, 2, 7, 8], [7, 8, 5, 10], [5, 10, 2, 10], [2, 10, 0, 8], [0, 8, 0, 2]],
        P: [[0, 0, 0, 10], [0, 0, 5, 0], [5, 0, 7, 2], [7, 2, 7, 4], [7, 4, 5, 5], [5, 5, 0, 5]],
        R: [[0, 0, 0, 10], [0, 0, 5, 0], [5, 0, 7, 2], [7, 2, 5, 5], [5, 5, 0, 5], [5, 5, 7, 10]],
        S: [[7, 1, 5, 0], [5, 0, 2, 0], [2, 0, 0, 2], [0, 2, 0, 4], [0, 4, 7, 6], [7, 6, 7, 8], [7, 8, 5, 10], [5, 10, 2, 10], [2, 10, 0, 9]],
        Z: [[0, 0, 7, 0], [7, 0, 0, 10], [0, 10, 7, 10]],
        " ": [],
      };

      const drawName = (
        text: string,
        normX: number,
        normY: number,
        scale: number,
        rotation: number,
        phase: number
      ) => {
        const alpha = prefersReducedMotion
          ? 0.08
          : 0.04 + 0.07 * (0.5 + 0.5 * Math.sin(elapsedMs * 0.0014 + phase));

        context.save();
        context.translate(width * normX, height * normY);
        context.rotate(rotation);
        context.scale(scale, scale);
        context.strokeStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
        context.lineWidth = 0.9;
        context.lineCap = "round";
        context.lineJoin = "round";

        let cursorX = 0;
        for (const letter of text) {
          const segments = glyphs[letter] ?? [];
          if (letter === " ") { cursorX += 8; continue; }
          context.beginPath();
          for (const [x1, y1, x2, y2] of segments) {
            context.moveTo(cursorX + x1, y1);
            context.lineTo(cursorX + x2, y2);
          }
          context.stroke();
          cursorX += 9;
        }
        context.restore();
      };

      // Fixed scatter positions across the illustration zone (top ~28% of canvas)
      // Each entry: [normX, normY, rotation, phase]
      const s = isMobile ? 0.6 : 0.85;
      const placements: Array<[string, number, number, number, number]> = [
        ["SALAZAR",  0.03, 0.02, -0.18, 0.3],
        ["PIERRE",   0.20, 0.01,  0.10, 1.2],
        ["BRICE\u00d1O", 0.42, 0.03, -0.08, 2.1],
        ["SALAZAR",  0.64, 0.02,  0.14, 3.0],
        ["PIERRE",   0.82, 0.01, -0.12, 1.7],
        ["BRICE\u00d1O", 0.08, 0.07,  0.06, 0.8],
        ["SALAZAR",  0.30, 0.06, -0.20, 2.6],
        ["PIERRE",   0.52, 0.08,  0.08, 4.0],
        ["BRICE\u00d1O", 0.72, 0.06, -0.05, 1.4],
        ["SALAZAR",  0.90, 0.07,  0.16, 3.5],
        ["PIERRE",   0.15, 0.12, -0.10, 0.5],
        ["BRICE\u00d1O", 0.38, 0.13,  0.05, 2.8],
        ["SALAZAR",  0.58, 0.11,  0.12, 4.2],
        ["PIERRE",   0.78, 0.13, -0.15, 1.9],
        ["BRICE\u00d1O", 0.02, 0.17,  0.09, 3.3],
        ["SALAZAR",  0.24, 0.18, -0.14, 0.6],
        ["PIERRE",   0.46, 0.17,  0.11, 2.4],
        ["BRICE\u00d1O", 0.66, 0.19, -0.07, 1.1],
        ["SALAZAR",  0.86, 0.18,  0.18, 3.8],
        ["PIERRE",   0.10, 0.22, -0.09, 2.0],
        ["BRICE\u00d1O", 0.33, 0.23,  0.13, 0.4],
        ["SALAZAR",  0.55, 0.24, -0.16, 3.1],
        ["PIERRE",   0.74, 0.22,  0.07, 1.6],
        ["BRICE\u00d1O", 0.92, 0.23, -0.12, 4.4],
        ["SALAZAR",  0.18, 0.26,  0.10, 2.7],
        ["PIERRE",   0.44, 0.27, -0.06, 0.9],
        ["BRICE\u00d1O", 0.70, 0.25,  0.15, 3.6],
      ];

      for (const [word, nx, ny, rot, ph] of placements) {
        if (isMobile && nx > 0.85) continue;
        drawName(word, nx, ny, s, rot, ph);
      }
    };

    const drawOuterMicroMotifs = (elapsedMs: number) => {
      const isMobile = width < 768;
      const basePulse = prefersReducedMotion ? 0.62 : 0.38 + 0.28 * (0.5 + 0.5 * Math.sin(elapsedMs * 0.003));

      const drawFlash = (x: number, y: number, size: number) => {
        context.beginPath();
        context.moveTo(x, y - size);
        context.lineTo(x, y + size);
        context.moveTo(x - size, y);
        context.lineTo(x + size, y);
        context.moveTo(x - size * 0.7, y - size * 0.7);
        context.lineTo(x + size * 0.7, y + size * 0.7);
        context.moveTo(x + size * 0.7, y - size * 0.7);
        context.lineTo(x - size * 0.7, y + size * 0.7);
        context.stroke();
      };

      const drawPlay = (x: number, y: number, w: number, h: number) => {
        context.beginPath();
        context.moveTo(x - w / 2, y - h / 2);
        context.lineTo(x + w / 2, y);
        context.lineTo(x - w / 2, y + h / 2);
        context.closePath();
        context.stroke();
      };

      const drawReel = (x: number, y: number, r: number) => {
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2);
        context.moveTo(x + r * 0.6, y);
        context.arc(x, y, r * 0.35, 0, Math.PI * 2);
        context.stroke();
      };

      const drawWave = (x: number, y: number, w: number, h: number) => {
        context.beginPath();
        context.moveTo(x - w / 2, y);
        context.lineTo(x - w * 0.25, y - h * 0.45);
        context.lineTo(x, y + h * 0.45);
        context.lineTo(x + w * 0.25, y - h * 0.35);
        context.lineTo(x + w / 2, y + h * 0.2);
        context.stroke();
      };

      const motifs: Array<{ t: "flash" | "play" | "reel" | "wave"; x: number; y: number; s: number; p: number }> = [
        // Upper strip
        { t: "flash", x: 0.05, y: 0.08, s: 6, p: 0.1 },
        { t: "play", x: 0.1, y: 0.11, s: 10, p: 1.1 },
        { t: "reel", x: 0.14, y: 0.08, s: 6, p: 2.2 },
        { t: "wave", x: 0.19, y: 0.1, s: 13, p: 3.2 },
        { t: "flash", x: 0.24, y: 0.08, s: 5, p: 1.8 },
        { t: "play", x: 0.29, y: 0.1, s: 8, p: 2.6 },
        { t: "reel", x: 0.34, y: 0.09, s: 5, p: 3.4 },
        { t: "wave", x: 0.39, y: 0.11, s: 12, p: 0.7 },
        { t: "flash", x: 0.44, y: 0.08, s: 5.4, p: 2.4 },
        { t: "play", x: 0.49, y: 0.1, s: 8.5, p: 1.3 },
        { t: "reel", x: 0.54, y: 0.08, s: 5.2, p: 2.9 },
        { t: "wave", x: 0.6, y: 0.1, s: 13, p: 1.9 },
        { t: "flash", x: 0.66, y: 0.08, s: 5.2, p: 0.4 },
        { t: "play", x: 0.72, y: 0.1, s: 8.8, p: 2.7 },
        { t: "reel", x: 0.78, y: 0.09, s: 5.6, p: 1.7 },
        { t: "wave", x: 0.84, y: 0.1, s: 14, p: 3.1 },
        { t: "flash", x: 0.9, y: 0.08, s: 5.4, p: 0.9 },
        { t: "play", x: 0.95, y: 0.11, s: 8.2, p: 2.1 },
        // Extra top corners and side accents
        { t: "flash", x: 0.02, y: 0.06, s: 4.8, p: 0.3 },
        { t: "reel", x: 0.98, y: 0.07, s: 4.6, p: 2.0 },
        { t: "wave", x: 0.04, y: 0.16, s: 10, p: 1.8 },
        { t: "play", x: 0.96, y: 0.17, s: 7.2, p: 3.5 },
        { t: "flash", x: 0.06, y: 0.2, s: 4.2, p: 1.6 },
        { t: "flash", x: 0.94, y: 0.2, s: 4.2, p: 2.4 },
        { t: "reel", x: 0.09, y: 0.04, s: 4.4, p: 0.7 },
        { t: "play", x: 0.9, y: 0.04, s: 6.8, p: 1.9 },
        { t: "flash", x: 0.01, y: 0.03, s: 3.8, p: 0.2 },
        { t: "play", x: 0.04, y: 0.03, s: 5.8, p: 1.0 },
        { t: "reel", x: 0.07, y: 0.02, s: 3.9, p: 2.0 },
        { t: "wave", x: 0.12, y: 0.03, s: 8.0, p: 1.2 },
        { t: "flash", x: 0.18, y: 0.02, s: 3.7, p: 2.7 },
        { t: "play", x: 0.24, y: 0.03, s: 5.8, p: 1.9 },
        { t: "reel", x: 0.3, y: 0.02, s: 3.9, p: 0.8 },
        { t: "wave", x: 0.36, y: 0.03, s: 8.2, p: 2.3 },
        { t: "flash", x: 0.42, y: 0.02, s: 3.8, p: 1.4 },
        { t: "play", x: 0.48, y: 0.03, s: 5.9, p: 2.9 },
        { t: "reel", x: 0.54, y: 0.02, s: 3.9, p: 1.1 },
        { t: "wave", x: 0.6, y: 0.03, s: 8.1, p: 2.5 },
        { t: "flash", x: 0.66, y: 0.02, s: 3.8, p: 0.9 },
        { t: "play", x: 0.72, y: 0.03, s: 5.9, p: 2.1 },
        { t: "reel", x: 0.78, y: 0.02, s: 3.9, p: 1.6 },
        { t: "wave", x: 0.84, y: 0.03, s: 8.0, p: 2.8 },
        { t: "flash", x: 0.9, y: 0.02, s: 3.7, p: 1.3 },
        { t: "play", x: 0.95, y: 0.03, s: 5.7, p: 2.2 },
        { t: "reel", x: 0.99, y: 0.03, s: 3.8, p: 0.6 },
        // Fill around camera/clapper/headphones zone
        { t: "flash", x: 0.12, y: 0.18, s: 4.2, p: 0.4 },
        { t: "reel", x: 0.17, y: 0.2, s: 4.4, p: 2.2 },
        { t: "wave", x: 0.22, y: 0.18, s: 8.8, p: 1.5 },
        { t: "play", x: 0.26, y: 0.2, s: 6.6, p: 2.7 },
        { t: "flash", x: 0.3, y: 0.16, s: 4, p: 1.9 },
        { t: "reel", x: 0.35, y: 0.19, s: 4.4, p: 0.8 },
        { t: "wave", x: 0.39, y: 0.17, s: 8.6, p: 2.8 },
        { t: "play", x: 0.44, y: 0.2, s: 6.5, p: 1.3 },
        { t: "flash", x: 0.57, y: 0.19, s: 4.2, p: 0.9 },
        { t: "reel", x: 0.61, y: 0.17, s: 4.3, p: 2.6 },
        { t: "wave", x: 0.66, y: 0.2, s: 8.8, p: 1.1 },
        { t: "play", x: 0.7, y: 0.18, s: 6.8, p: 2.3 },
        { t: "flash", x: 0.75, y: 0.2, s: 4.1, p: 0.6 },
        { t: "reel", x: 0.79, y: 0.17, s: 4.5, p: 1.8 },
        { t: "wave", x: 0.84, y: 0.19, s: 9, p: 2.9 },
        { t: "play", x: 0.88, y: 0.18, s: 6.6, p: 1.4 },
        // Corner fillers
        { t: "flash", x: 0.02, y: 0.16, s: 3.8, p: 1.8 },
        { t: "reel", x: 0.03, y: 0.22, s: 3.9, p: 0.7 },
        { t: "wave", x: 0.97, y: 0.16, s: 7.8, p: 2.6 },
        { t: "play", x: 0.98, y: 0.22, s: 5.8, p: 1.2 },
        // Band below clapper/camera/headphones
        { t: "flash", x: 0.08, y: 0.27, s: 4.8, p: 1.1 },
        { t: "play", x: 0.14, y: 0.29, s: 7.2, p: 2.4 },
        { t: "reel", x: 0.2, y: 0.28, s: 4.9, p: 0.7 },
        { t: "wave", x: 0.27, y: 0.29, s: 10.4, p: 3.0 },
        { t: "flash", x: 0.34, y: 0.27, s: 4.6, p: 1.8 },
        { t: "play", x: 0.41, y: 0.29, s: 7, p: 2.9 },
        { t: "reel", x: 0.48, y: 0.28, s: 5, p: 0.3 },
        { t: "wave", x: 0.55, y: 0.29, s: 10.6, p: 2.2 },
        { t: "flash", x: 0.62, y: 0.27, s: 4.7, p: 1.4 },
        { t: "play", x: 0.69, y: 0.29, s: 7.2, p: 2.6 },
        { t: "reel", x: 0.76, y: 0.28, s: 5, p: 0.9 },
        { t: "wave", x: 0.83, y: 0.29, s: 10.2, p: 3.4 },
        { t: "flash", x: 0.9, y: 0.27, s: 4.6, p: 1.9 },
        // Middle fill zone - dense pattern below main elements
        { t: "wave", x: 0.1, y: 0.35, s: 9, p: 1.4 },
        { t: "flash", x: 0.2, y: 0.38, s: 5.2, p: 0.8 },
        { t: "play", x: 0.3, y: 0.36, s: 7, p: 2.1 },
        { t: "reel", x: 0.42, y: 0.39, s: 5, p: 1.2 },
        { t: "wave", x: 0.55, y: 0.37, s: 9.5, p: 2.8 },
        { t: "flash", x: 0.67, y: 0.38, s: 5.4, p: 0.9 },
        { t: "play", x: 0.78, y: 0.36, s: 7.2, p: 2.3 },
        { t: "reel", x: 0.88, y: 0.39, s: 5.1, p: 1.6 },
        { t: "flash", x: 0.05, y: 0.42, s: 4.8, p: 1.3 },
        { t: "wave", x: 0.18, y: 0.44, s: 8.8, p: 2.5 },
        { t: "play", x: 0.32, y: 0.42, s: 6.8, p: 0.7 },
        { t: "reel", x: 0.45, y: 0.45, s: 4.9, p: 2.0 },
        { t: "flash", x: 0.58, y: 0.43, s: 5.3, p: 1.4 },
        { t: "wave", x: 0.71, y: 0.44, s: 9.2, p: 2.6 },
        { t: "play", x: 0.84, y: 0.42, s: 6.9, p: 0.9 },
        { t: "reel", x: 0.96, y: 0.45, s: 5.0, p: 1.8 },
        { t: "wave", x: 0.12, y: 0.50, s: 8.5, p: 1.7 },
        { t: "flash", x: 0.28, y: 0.51, s: 5.1, p: 2.2 },
        { t: "play", x: 0.4, y: 0.50, s: 7.1, p: 1.1 },
        { t: "reel", x: 0.53, y: 0.52, s: 5.2, p: 2.4 },
        { t: "wave", x: 0.65, y: 0.50, s: 8.9, p: 1.5 },
        { t: "flash", x: 0.78, y: 0.51, s: 5.3, p: 2.0 },
        { t: "play", x: 0.9, y: 0.50, s: 7.0, p: 1.3 },
        { t: "reel", x: 0.02, y: 0.56, s: 4.7, p: 1.9 },
        { t: "wave", x: 0.15, y: 0.57, s: 8.7, p: 2.3 },
        { t: "flash", x: 0.26, y: 0.58, s: 5.0, p: 0.8 },
        { t: "play", x: 0.38, y: 0.57, s: 7.3, p: 2.1 },
        { t: "reel", x: 0.5, y: 0.59, s: 5.1, p: 1.5 },
        { t: "wave", x: 0.62, y: 0.57, s: 9.0, p: 2.6 },
        { t: "flash", x: 0.74, y: 0.58, s: 5.2, p: 1.0 },
        { t: "play", x: 0.86, y: 0.57, s: 7.1, p: 2.3 },
        { t: "reel", x: 0.98, y: 0.59, s: 4.8, p: 1.7 },
        { t: "wave", x: 0.08, y: 0.63, s: 8.6, p: 1.8 },
        { t: "flash", x: 0.22, y: 0.64, s: 5.3, p: 2.1 },
        { t: "play", x: 0.34, y: 0.63, s: 6.9, p: 0.9 },
        { t: "reel", x: 0.46, y: 0.65, s: 5.0, p: 2.2 },
        { t: "wave", x: 0.58, y: 0.63, s: 8.8, p: 1.6 },
        { t: "flash", x: 0.7, y: 0.64, s: 5.1, p: 2.0 },
        { t: "play", x: 0.82, y: 0.63, s: 7.2, p: 1.2 },
        { t: "reel", x: 0.04, y: 0.70, s: 4.9, p: 1.9 },
        { t: "wave", x: 0.16, y: 0.71, s: 8.9, p: 2.4 },
        { t: "flash", x: 0.3, y: 0.70, s: 5.2, p: 1.0 },
        { t: "play", x: 0.42, y: 0.71, s: 7.0, p: 2.2 },
        { t: "reel", x: 0.54, y: 0.72, s: 5.1, p: 1.6 },
        { t: "wave", x: 0.66, y: 0.71, s: 9.1, p: 2.5 },
        { t: "flash", x: 0.78, y: 0.70, s: 5.3, p: 0.9 },
        { t: "play", x: 0.90, y: 0.71, s: 7.1, p: 2.0 },
        // Lower strip
        { t: "reel", x: 0.05, y: 0.86, s: 6, p: 2.3 },
        { t: "flash", x: 0.1, y: 0.9, s: 5, p: 0.6 },
        { t: "wave", x: 0.15, y: 0.88, s: 13, p: 1.4 },
        { t: "play", x: 0.21, y: 0.9, s: 8, p: 2.8 },
        { t: "flash", x: 0.27, y: 0.87, s: 5, p: 0.2 },
        { t: "reel", x: 0.33, y: 0.9, s: 5, p: 3.3 },
        { t: "wave", x: 0.39, y: 0.89, s: 12, p: 1.1 },
        { t: "play", x: 0.45, y: 0.88, s: 8, p: 2.5 },
        { t: "flash", x: 0.51, y: 0.9, s: 4.8, p: 0.8 },
        { t: "reel", x: 0.57, y: 0.87, s: 5.2, p: 2.2 },
        { t: "wave", x: 0.63, y: 0.9, s: 12, p: 1.9 },
        { t: "play", x: 0.69, y: 0.88, s: 7.8, p: 3.2 },
        { t: "flash", x: 0.75, y: 0.9, s: 4.8, p: 0.5 },
        { t: "reel", x: 0.81, y: 0.87, s: 5.4, p: 2.6 },
        { t: "wave", x: 0.87, y: 0.9, s: 13, p: 1.6 },
        { t: "play", x: 0.92, y: 0.88, s: 8, p: 3.1 },
        { t: "flash", x: 0.97, y: 0.86, s: 4.8, p: 1.2 },
        // Extra bottom corners and side accents
        { t: "play", x: 0.03, y: 0.8, s: 6.8, p: 2.2 },
        { t: "flash", x: 0.08, y: 0.95, s: 4.4, p: 0.6 },
        { t: "reel", x: 0.12, y: 0.8, s: 4.8, p: 3.1 },
        { t: "wave", x: 0.9, y: 0.81, s: 10.5, p: 1.2 },
        { t: "flash", x: 0.95, y: 0.95, s: 4.4, p: 2.9 },
        { t: "reel", x: 0.98, y: 0.82, s: 4.6, p: 1.7 },
        { t: "play", x: 0.04, y: 0.74, s: 6.6, p: 0.9 },
        { t: "wave", x: 0.96, y: 0.73, s: 9.8, p: 2.6 },
        // Extra lower fill to make bottom more visible
        { t: "flash", x: 0.16, y: 0.96, s: 4.3, p: 1.4 },
        { t: "play", x: 0.22, y: 0.94, s: 6.8, p: 2.1 },
        { t: "reel", x: 0.28, y: 0.96, s: 4.8, p: 0.5 },
        { t: "wave", x: 0.34, y: 0.95, s: 10, p: 2.8 },
        { t: "flash", x: 0.4, y: 0.97, s: 4.1, p: 1.7 },
        { t: "play", x: 0.46, y: 0.95, s: 6.6, p: 2.9 },
        { t: "reel", x: 0.52, y: 0.97, s: 4.7, p: 1.1 },
        { t: "wave", x: 0.58, y: 0.95, s: 9.7, p: 3.3 },
        { t: "flash", x: 0.64, y: 0.97, s: 4.2, p: 0.9 },
        { t: "play", x: 0.7, y: 0.94, s: 6.7, p: 2.5 },
        { t: "reel", x: 0.76, y: 0.96, s: 4.8, p: 1.6 },
        { t: "wave", x: 0.82, y: 0.95, s: 10.2, p: 3.0 },
        { t: "flash", x: 0.02, y: 0.98, s: 3.8, p: 0.4 },
        { t: "reel", x: 0.05, y: 0.98, s: 4.0, p: 1.9 },
        { t: "play", x: 0.95, y: 0.98, s: 5.8, p: 2.7 },
        { t: "flash", x: 0.98, y: 0.98, s: 3.8, p: 1.5 },
      ];

      context.save();
      context.lineWidth = isMobile ? 0.9 : 1.1;

      for (let index = 0; index < motifs.length; index += 1) {
        const motif = motifs[index];
        // Reduce visual noise on small screens.
        if (isMobile && index % 2 === 1) {
          continue;
        }

        const lowerBoost = motif.y >= 0.9 ? 0.12 : 0;
        const midBoost = motif.y >= 0.26 && motif.y <= 0.3 ? 0.08 : 0;
        const localAlpha = Math.max(
          0.16,
          basePulse + lowerBoost + midBoost + (prefersReducedMotion ? 0 : 0.14 * Math.sin(elapsedMs * 0.003 + motif.p))
        );
        const dx = prefersReducedMotion ? 0 : Math.sin(elapsedMs * 0.0009 + motif.p) * (isMobile ? 1.4 : 2.2);
        const dy = prefersReducedMotion ? 0 : Math.cos(elapsedMs * 0.0012 + motif.p) * (isMobile ? 0.9 : 1.4);
        const x = width * motif.x + dx;
        const y = height * motif.y + dy;
        const size = motif.s * (isMobile ? 0.82 : 1);

        context.strokeStyle = `rgba(255, 255, 255, ${localAlpha.toFixed(3)})`;

        if (motif.t === "flash") {
          drawFlash(x, y, size);
        } else if (motif.t === "play") {
          drawPlay(x, y, size, size * 1.15);
        } else if (motif.t === "reel") {
          drawReel(x, y, size);
        } else {
          drawWave(x, y, size * 1.4, size * 0.8);
        }
      }

      context.restore();
    };

    const draw = (time: number) => {
      if (!startTime) {
        startTime = time;
      }

      const elapsed = time - startTime;
      context.clearRect(0, 0, width, height);

      drawCubistNames(elapsed);
      drawOuterMicroMotifs(elapsed);
      drawFilmStrip(elapsed);
      drawSonyCamera(elapsed);
      drawStudioHeadphones(elapsed);
      drawClapper(elapsed);
      frameId = window.requestAnimationFrame(draw);
    };

    setCanvasSize();
    frameId = window.requestAnimationFrame(draw);

    const ro = new ResizeObserver(setCanvasSize);
    ro.observe(canvas);

    return () => {
      ro.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#050505] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-px w-full bg-gradient-to-r from-transparent via-[#f20c0c]/60 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-0 w-full h-[700px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
        <div className="animated-bg absolute inset-0" />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-85 mix-blend-normal" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.34),rgba(5,5,5,0.12),rgba(5,5,5,0.34))]" />
        <div className="scanline absolute inset-0 opacity-25" />
        <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl pt-80 sm:pt-72 md:pt-80 lg:pt-96">
        <div className="mt-6 mb-14 flex flex-col items-center gap-6 text-center sm:mt-16 sm:mb-20 sm:gap-8 md:mt-20 md:mb-24 lg:mt-24 lg:mb-28">
          <h2 className="max-w-5xl text-2xl font-extrabold leading-[1.08] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Nuestra Misión y Visión
          </h2>

          {/* Single trigger button */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold tracking-widest text-white uppercase backdrop-blur-sm transition-all duration-500 hover:border-white/40 hover:bg-white/10"
          >
            {/* Shimmer sweep on hover */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-3">
              <span
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="8" y1="2" x2="8" y2="14" />
                  <line x1="2" y1="8" x2="14" y2="8" />
                </svg>
              </span>
              {open ? "Cerrar" : "Descubrir"}
            </span>
          </button>
        </div>

        <div
          className="grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="grid gap-5 pb-2 sm:gap-6 lg:grid-cols-[1.08fr_0.92fr]">

              {/* MISIÓN */}
              <article
                className="relative overflow-hidden rounded-2xl border bg-[linear-gradient(150deg,rgba(242,12,12,0.2),rgba(8,8,8,0.98)_50%,rgba(15,15,15,0.97)_100%)] transition-all duration-700"
                style={{
                  borderColor: "rgba(242,12,12,0.75)",
                  boxShadow: "0 0 0 1px rgba(242,12,12,0.2), 0 0 50px rgba(242,12,12,0.15), 0 24px 90px rgba(0,0,0,0.65)",
                }}
              >
                <div className="pointer-events-none absolute right-[-90px] top-[-90px] h-44 w-44 rounded-full border border-[#ff8a8a]/30" />
                <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-[#f20c0c] via-[#ff6060] to-transparent" />
                {open && <div className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left mv-scan-red" />}

                <div className="p-4 sm:p-6 md:p-8">
                  <span
                    className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffd0d0] sm:text-xs${open ? " mv-fade-up" : ""}`}
                    style={open ? ({ "--mv-delay": "0s" } as React.CSSProperties) : {}}
                  >
                    <span className="inline-block h-px w-6 bg-[#f20c0c]" />
                    Misión
                  </span>
                  <p
                    className={`mt-3 text-xl font-extrabold leading-[1.08] text-white sm:text-2xl md:text-3xl${open ? " mv-fade-up" : ""}`}
                    style={open ? ({ "--mv-delay": "0.06s" } as React.CSSProperties) : {}}
                  >
                    Convertir cada idea en una imagen que impacta y perdura
                  </p>
                  <p
                    className={`mt-4 max-w-xl text-sm leading-relaxed text-zinc-200 sm:text-base${open ? " mv-fade-up" : ""}`}
                    style={open ? ({ "--mv-delay": "0.13s" } as React.CSSProperties) : {}}
                  >
                    Producimos contenido audiovisual con estrategia, técnica y pasión creativa. Cada proyecto es una oportunidad de contar una historia que motive, inspire y genere resultados reales para nuestros clientes.
                  </p>
                  <div className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-3">
                    {([
                      ["Narrativa poderosa", "0.20s"],
                      ["Dominio técnico",    "0.27s"],
                      ["Ritmo y emoción",    "0.34s"],
                      ["Resultados medibles","0.41s"],
                    ] as [string, string][]).map(([label, delay]) => (
                      <div
                        key={label}
                        className={`rounded-lg border border-[#f20c0c]/25 bg-black/40 p-3 text-xs font-semibold text-zinc-200 sm:text-sm${open ? " mv-fade-up" : ""}`}
                        style={open ? ({ "--mv-delay": delay } as React.CSSProperties) : {}}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* VISIÓN */}
              <article
                className="relative overflow-hidden rounded-2xl border bg-[linear-gradient(140deg,rgba(22,28,38,0.98),rgba(8,8,8,0.98)_65%,rgba(0,117,156,0.2)_100%)] transition-all duration-700"
                style={{
                  borderColor: "rgba(103,232,249,0.65)",
                  boxShadow: "0 0 0 1px rgba(103,232,249,0.15), 0 0 50px rgba(0,191,255,0.10), 0 24px 90px rgba(0,0,0,0.65)",
                }}
              >
                <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 border-b border-l border-cyan-300/50" />
                <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-cyan-200 to-transparent" />
                {open && <div className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left mv-scan-cyan" />}

                <div className="p-4 sm:p-6 md:p-8">
                  <span
                    className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-100 sm:text-xs${open ? " mv-fade-up" : ""}`}
                    style={open ? ({ "--mv-delay": "0.05s" } as React.CSSProperties) : {}}
                  >
                    <span className="inline-block h-px w-6 bg-cyan-400" />
                    Visión
                  </span>
                  <p
                    className={`mt-3 text-xl font-extrabold leading-[1.08] text-white sm:text-2xl md:text-3xl${open ? " mv-fade-up" : ""}`}
                    style={open ? ({ "--mv-delay": "0.11s" } as React.CSSProperties) : {}}
                  >
                    Ser el estudio audiovisual de referencia que eleva el estándar regional
                  </p>
                  <p
                    className={`mt-4 text-sm leading-relaxed text-zinc-200 sm:text-base${open ? " mv-fade-up" : ""}`}
                    style={open ? ({ "--mv-delay": "0.18s" } as React.CSSProperties) : {}}
                  >
                    Aspiramos a posicionarnos como el equipo creativo más reconocido por transformar marcas y proyectos en referentes visuales de clase mundial, sin importar el tamaño del cliente.
                  </p>
                  <div className="mt-6 space-y-2.5 sm:mt-7 sm:space-y-3">
                    {([
                      ["Innovación continua", "Adoptamos nuevas tecnologías y formatos para mantenernos a la vanguardia del mercado audiovisual.", "0.25s"],
                      ["Impacto y crecimiento", "Construimos relaciones duraderas donde el éxito visual del cliente es también el nuestro.", "0.33s"],
                    ] as [string, string, string][]).map(([title, desc, delay]) => (
                      <div
                        key={title}
                        className={`rounded-lg border border-white/10 bg-white/[0.04] p-4${open ? " mv-fade-up" : ""}`}
                        style={open ? ({ "--mv-delay": delay } as React.CSSProperties) : {}}
                      >
                        <p className="text-sm font-semibold text-white">{title}</p>
                        <p className="mt-1 text-sm text-zinc-300">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ── Accordion reveal animations ── */
        @keyframes mvFadeUp {
          from { opacity: 0; transform: translateY(18px); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0);   }
        }
        @keyframes mvScanRed {
          0%   { transform: scaleX(0); opacity: 1;
                 background: linear-gradient(90deg, transparent, #f20c0c 55%, transparent); }
          75%  { transform: scaleX(1); opacity: 0.9; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        @keyframes mvScanCyan {
          0%   { transform: scaleX(0); opacity: 1;
                 background: linear-gradient(90deg, transparent, #67e8f9 55%, transparent); }
          75%  { transform: scaleX(1); opacity: 0.9; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        .mv-fade-up {
          animation: mvFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: var(--mv-delay, 0s);
        }
        .mv-scan-red  { animation: mvScanRed  0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .mv-scan-cyan { animation: mvScanCyan 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        .scanline {
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.07) 0px,
            rgba(255, 255, 255, 0.07) 1px,
            transparent 1px,
            transparent 4px
          );
          mix-blend-mode: soft-light;
        }
        .animated-bg {
          background: radial-gradient(circle at 12% 18%, rgba(242,12,12,0.32), transparent 40%),
                      radial-gradient(circle at 88% 20%, rgba(0,191,255,0.2), transparent 35%),
                      linear-gradient(145deg, #050505 0%, #0a0a0a 50%, #050505 100%);
          animation: bgShift 12s ease-in-out infinite alternate;
        }
        @keyframes bgShift {
          0%   { background: radial-gradient(circle at 12% 18%, rgba(242,12,12,0.32), transparent 40%),
                             radial-gradient(circle at 88% 20%, rgba(0,191,255,0.2), transparent 35%),
                             linear-gradient(145deg, #050505 0%, #0a0a0a 50%, #050505 100%); }
          25%  { background: radial-gradient(circle at 28% 30%, rgba(242,12,12,0.28), transparent 42%),
                             radial-gradient(circle at 72% 12%, rgba(0,191,255,0.22), transparent 38%),
                             linear-gradient(155deg, #050505 0%, #0a0a0a 50%, #050505 100%); }
          50%  { background: radial-gradient(circle at 8% 10%, rgba(242,12,12,0.36), transparent 38%),
                             radial-gradient(circle at 92% 35%, rgba(0,191,255,0.18), transparent 32%),
                             linear-gradient(135deg, #050505 0%, #080808 50%, #050505 100%); }
          75%  { background: radial-gradient(circle at 22% 25%, rgba(242,12,12,0.24), transparent 44%),
                             radial-gradient(circle at 78% 8%, rgba(0,191,255,0.26), transparent 40%),
                             linear-gradient(150deg, #050505 0%, #0c0c0c 50%, #050505 100%); }
          100% { background: radial-gradient(circle at 16% 22%, rgba(242,12,12,0.30), transparent 36%),
                             radial-gradient(circle at 84% 18%, rgba(0,191,255,0.20), transparent 33%),
                             linear-gradient(140deg, #050505 0%, #0a0a0a 50%, #050505 100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animated-bg { animation: none; }
        }
      `}</style>
    </section>
  );
}
