import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./styles.module.css";

/*
0 % { transform: scale(1); }
25 % { transform: scale(.97); }
35 % { transform: scale(.9); }
45 % { transform: scale(1.1); }
55 % { transform: scale(.9); }
65 % { transform: scale(1.1); }
75 % { transform: scale(1.03); }
100 % { transform: scale(1); }
`*/

export default function App() {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  const color = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#aaffd2" },
      { opacity: 1, color: "#ffaaee" },
      { opacity: 1, color: "#aab7ff" },
      { opacity: 1, color: "#aaf9ff" },
      { opacity: 1, color: "#f8ffaa" },
      { opacity: 1, color: "#aab7ff" },

    ],
    from: { opacity: 1, color: "#aab7ff" },
    config: { duration: 2000 },

  });
  return (
    
    <div onClick={() => toggle(!state)}>
      <animated.div
        className={styles.text}
        style={{
          color: x.to({ range: [0, 1], output: [0.3, 1] }),
          opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        }}
      >
        <animated.div style={color}>Frontend Developer</animated.div>
      </animated.div>
    </div>
  );
}
