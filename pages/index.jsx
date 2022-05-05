import React from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const scrollItems = [
  {
    title: "Bathroom.",
    description: "Go and discover luxury bathrooms",
    img: "https://themeforest.unitedthemes.com/wpversions/brooklyn/demo29/wp-content/uploads/2017/07/amazing-spacious-bathroom-PT5MNTL.jpg",
  },
  {
    title: "Sinks and things.",
    description: "Go and discover luxury bathrooms",
    img: "https://themeforest.unitedthemes.com/wpversions/brooklyn/demo29/wp-content/uploads/2017/07/big-porcelain-sink-in-modern-bathroom-PZNYTPA.jpg",
  },
  {
    title: "Other bathroom.",
    description: "Go and discover luxury bathrooms",
    img: "https://themeforest.unitedthemes.com/wpversions/brooklyn/demo29/wp-content/uploads/2017/07/Fotolia_28425609_Subscription_XL-1.jpg",
  },
];

export default function Home() {
  const [count, setCount] = React.useState(0);
  const [hoverState, setHoverState] = React.useState(false);
  const ref = React.useRef(0);

  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.to(".scroll-inner", {
      xPercent: count * (-100 / 3),
      ease: "power1.inOut",
      duration: 1,
      delay: 0.4,
    });
  }, [count]);

  return (
    <div className="page-container">
      <div className="header">
        <div className="logo">bathrooms</div>
        <div className="burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <div className="scroll-container">
        <div
          className="scroll-inner"
          onMouseEnter={() => {
            setHoverState(true);
          }}
          onMouseLeave={() => {
            setHoverState(false);
          }}
          ref={ref}
        >
          {scrollItems.map((item, i) => (
            <div className="scroll-item" key={i}>
              <div className="item-inner">
                <div className="inner-title">
                  <h2 style={{ transform: count === i && "translateY(0)" }}>
                    {item.title}
                  </h2>
                </div>
                <div className="inner-description">
                  <p style={{ transform: count === i && "translateY(0)" }}>
                    {item.description}
                  </p>
                </div>
                <div className="inner-button">
                  <a
                    className="link"
                    style={{ transform: count === i && "translateY(0)" }}
                  >
                    latest bathrooms
                  </a>
                </div>
              </div>
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </div>
        <div
          className="nav forw"
          style={{ opacity: !hoverState && 0 }}
          onClick={() => {
            if (count <= 1) setCount(count + 1);
          }}
          onMouseEnter={() => {
            setHoverState(true);
          }}
          onMouseLeave={() => {
            setHoverState(false);
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        </div>
        <div
          className="nav back"
          style={{ opacity: !hoverState && 0 }}
          onClick={() => {
            if (count >= 1) setCount(count - 1);
          }}
          onMouseEnter={() => {
            setHoverState(true);
          }}
          onMouseLeave={() => {
            setHoverState(false);
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="footer">
        {" "}
        <span>© 2022 Bathrooms</span> {count}
      </div>
    </div>
  );
}
