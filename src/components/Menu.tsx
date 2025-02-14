import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__info">
        <div className="menu__greeting">
          {/* 标题 */}
          <h2>Introduction</h2>

          {/* 添加文字和图片部分 */}
          <div className="menu__text-image">
            <span className="menu__text">ANIMAT </span>
            <img
              src="./chicago.jpg" // 替换为你的图片链接
              alt="Animat AI"
              className="menu__image" // 给图片类名，便于样式控制
            />
          </div>

          {/* 段落 */}
          <p>
            ANIMAT is the first AI platform to integrate MMD and facial tracking for dynamic 3D Model, enabling realistic customization and upgrade of AgentAI.
          </p>
        </div>
      </div>

      {/* 其他链接按钮保持不变 */}
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
        href="https://www.animatai.fun"
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
        <span className="menu__subheader">E3pNvJfG4jiYBSxjDorL7i9GV8XhmzQFMkk6EXrqpump</span>
      </a>
    </div>
  );
}
