import React, { useRef, useEffect } from 'react';

function convertAngle2Radian(angle) {
  return Math.PI / 180 * angle;
}

function drawFan(ctx) {
  ctx.beginPath();
  ctx.moveTo(100, 300);
  ctx.arc(100, 300, 90, convertAngle2Radian(45), convertAngle2Radian(90));
  ctx.closePath();
  ctx.stroke();
}

const Draw = () => {
  const canvasRef = useRef();

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    drawFan(canvasRef.current.getContext('2d'));
  }, []);

  return (
    <>
      <canvas ref={canvasRef} width="500" height="500" />
    </>
  );
}

export default Draw;