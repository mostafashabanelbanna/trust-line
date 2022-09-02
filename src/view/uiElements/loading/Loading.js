import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import "./loading.css";

const Loading = () => {
  const [styles, api] = useSpring(() => ({
    from: { x: -50, opacity: 1 },
  }));

  useEffect(() => {
    api({
      x: 50,
      opacity: 1,
      loop: { reverse: true },
    });
  }, []);

  return (
    <div className="loading_container">
      <div className="inner_loading">
        <animated.div
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#019FFE",
            borderRadius: 24,
            ...styles,
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
