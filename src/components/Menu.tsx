import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__info">
        <div className="menu__greeting">
          {/* 添加图片 */}
          <img
            src="https://www.example.com/your-image.jpg" // 替换为你的图片链接
            alt="Introduction"
            className="menu__image" // 给图片一个类名，便于样式控制
          />
          <h2>Introduction</h2>
          <p>
            ANIMAT is the first AI platform to integrate MMD and facial
            tracking for dynamic 3D Model, enabling realistic
            customization and upgrade of AgentAI.
          </p>
        </div>
      </div>

      {/* 其余部分保持不变 */}
      <a
        href="https://github.com/Apcoev/AnimatAI"
        className="menu__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="menu__header">GitHub</span>
        <span className="menu__subheader">View more info</span>
      </a>

      <a
        href="https://x.com/animat_ai"
        className="menu__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="menu__header">Twitter</span>
        <span className="menu__subheader">Animat Twitter</span>
      </a>

      <a
        href="https://t.me/AnimatAI"
        className="menu__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="menu__header">Telegram</span>
        <span className="menu__subheader">Animat Chat</span>
      </a>

      <a
        href="https://www.example.com/contact"
        className="menu__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="menu__header">App</span>
        <span className="menu__subheader">Beta live now</span>
      </a>

      <a
        href="https://www.example.com/contract"
        className="menu__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="menu__header">Contract</span>
        <span className="menu__subheader">Not develop yet</span>
      </a>
    </div>
  );
}
