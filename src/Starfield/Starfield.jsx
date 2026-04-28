import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import './Starfield.css';

const Starfield = () => {
  const canvasRef = useRef(); // Una "referencia" para decirle a p5 dónde dibujarse

  useEffect(() => {
    // Definimos nuestra "obra" de p5
    const sketch = (p) => {
      let stars = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasRef.current);
        // Creamos 400 estrellas con posiciones aleatorias
        for (let i = 0; i < 500; i++) {
          stars.push({
            x: p.random(p.width),
            y: p.random(p.height),
            size: p.random(1, 3),
            opacity: p.random(100, 255)
          });
        }
      };

      p.draw = () => {
        p.clear(); // Limpiamos el fondo cada frame
        p.noStroke();

        stars.forEach(star => {
          // Efecto de parpadeo sobrio usando una función seno
          let blink = p.sin(p.frameCount * 0.05 + star.x) * 150;
          p.fill(255, star.opacity + blink);
          p.circle(star.x, star.y, star.size);
        });
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const myP5 = new p5(sketch);
    return () => myP5.remove(); // Limpiamos al salir para no gastar memoria
  }, []);

  return <div ref={canvasRef} className="starfield-container" />;
};

export default Starfield;