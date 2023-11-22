'use client'
import React, { useEffect } from 'react'

const Animacion = (json: any) => {
    const data = json?.data
    useEffect(()=>{
        const custom = json?.data?.colors || ["rgba(239,204,144, 0.2)", "rgba(239,204,144, 0.3)", "rgba(239,204,144, 0.4)"]
        const colors =  custom
        
        const numBalls = 300;
        const balls = [];

        for (let i = 0; i < numBalls; i++) {
        let ball = document.createElement("div");
        ball.classList.add('animated-balls');
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}%`;
        ball.style.top = `${Math.floor(Math.random() * 100)}%`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `${Math.random()* 10}px`;
        ball.style.height = ball.style.width;

        balls.push(ball);
        document.getElementById("animacion")?.append(ball)
       
        }

        // Keyframes
        balls.forEach((el, i, ra) => {
        let to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 12
        };

        let anim = el.animate(
            [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
            }
        );
        });
        
    } ,[json])
  return (
    <div id='animacion' className={data?.class} style={data?.styles}>
    </div>
  )
}

export default Animacion