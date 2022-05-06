import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const scrollItems = [
  {
    title: "Bathrooms.",
    description: "Go and discover luxury bathrooms",
    img: "https://themeforest.unitedthemes.com/wpversions/brooklyn/demo29/wp-content/uploads/2017/07/amazing-spacious-bathroom-PT5MNTL.jpg",
  },
  {
    title: "Sinks and things.",
    description: "Go and discover luxury bathrooms",
    img: "https://themeforest.unitedthemes.com/wpversions/brooklyn/demo29/wp-content/uploads/2017/07/big-porcelain-sink-in-modern-bathroom-PZNYTPA.jpg",
  },
  {
    title: "Other bathrooms.",
    description: "Go and discover luxury bathrooms",
    img: "https://themeforest.unitedthemes.com/wpversions/brooklyn/demo29/wp-content/uploads/2017/07/Fotolia_28425609_Subscription_XL-1.jpg",
  },
];

export default function Home() {
  const [count, setCount] = React.useState(0);
  const [menuOpen, setMenuOpen] = React.useState(false);
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

  React.useEffect(() => {
    const mf = () => {
      gsap.to(".menu-item", {
        opacity: 1,
        duration: 0.5,
        ease: "power3.in",
        stagger: 0.1,
      });
    };

    const rf = () => {
      gsap.to(".menu-item", {
        opacity: 0,
      });
    };

    menuOpen ? mf() : rf();
  }, [menuOpen]);

  const countLoop = () => {
    var countList = [];
    for (var i = 0; i < scrollItems.length; i++) {
      countList.push(
        <div
          onClick={() => {
            setCount(i);
          }}
          className={i === count ? "count-item active" : "count-item"}
        ></div>
      );
    }
    return countList;
  };

  return (
    <div className="page-container">
      <div className="header">
        <div className={menuOpen ? "logo active" : "logo"}>bathrooms</div>
        <label
          htmlFor="check"
          className={menuOpen ? "burger active" : "burger"}
          onChange={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <input type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className={menuOpen ? "menu active" : "menu"}>
          <ul>
            <li className="menu-item">work</li>
            <li className="menu-item">studio</li>
            <li className="menu-item">contact</li>
          </ul>
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
            else if (count === 2) setCount(0);
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
            else if (count === 0) setCount(2);
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
          className="count"
          style={{ opacity: !hoverState && 0 }}
          onMouseEnter={() => {
            setHoverState(true);
          }}
          onMouseLeave={() => {
            setHoverState(false);
          }}
        >
          {countLoop()}
        </div>
      </div>

      <div className="footer">
        {" "}
        <span>© 2022 Bathrooms</span>
        <div className={menuOpen ? "social-icons active" : "social-icons"}>
          <a href="#" className="social-icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </a>
          <a href="#" className="social-icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
            </svg>
          </a>
          <a href="#" className="social-icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
