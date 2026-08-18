"use client";

import { useEffect, useState } from "react";

export default function TechBackground() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x:
          (event.clientX / window.innerWidth - 0.5) *
          20,

        y:
          (event.clientY / window.innerHeight - 0.5) *
          20,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <div className="tech-background">

      <div className="background-glow glow-1" />
      <div className="background-glow glow-2" />
      <div className="background-glow glow-3" />

      <div className="background-grid" />

      <div
        className="floating-monitor"
        style={{
          transform: `
            translate3d(
              ${-mouse.x * 0.4}px,
              ${-mouse.y * 0.4}px,
              0
            )
            rotateY(-12deg)
          `,
        }}
      >
        <div className="monitor-screen">
          <div className="monitor-dots">
            <i />
            <i />
            <i />
          </div>

          <div className="monitor-line big" />
          <div className="monitor-line" />
          <div className="monitor-line small" />

          <div className="monitor-boxes">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="monitor-stand" />
        <div className="monitor-base" />
      </div>

      <div
        className="floating-keyboard"
        style={{
          transform: `
            translate3d(
              ${mouse.x * 0.5}px,
              ${mouse.y * 0.5}px,
              0
            )
            rotateX(55deg)
            rotateZ(-8deg)
          `,
        }}
      >
        {Array.from({ length: 48 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <div
        className="floating-cpu"
        style={{
          transform: `
            translate3d(
              ${-mouse.x * 0.5}px,
              ${-mouse.y * 0.3}px,
              0
            )
            rotateY(-20deg)
          `,
        }}
      >
        <div className="cpu-title">
          SHIVAM
        </div>

        <div className="cpu-light" />

        <div className="cpu-slot" />
        <div className="cpu-slot short" />

        <div className="cpu-button" />
      </div>

      <div className="floating-printer">
        <div className="printer-top" />

        <div className="printer-body">
          <div className="printer-lights">
            <i />
            <i />
          </div>

          <div className="printer-paper">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className="tech-circle circle-1" />
      <div className="tech-circle circle-2" />
      <div className="tech-circle circle-3" />

      <div className="particles">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>

    </div>
  );
}