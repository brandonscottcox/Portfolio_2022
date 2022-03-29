import React from 'react'
import { useSpring, animated } from 'react-spring'
import '../../App.css';

export default function Name() {
    const anim = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1
        },
        config: {
            delay: 2000,
            duration: 2000,
        }
    });

  return (
    <div>
        <animated.h1 style={anim}>
            <p className="WelcomeName">Brandon Scott Cox</p>
        </animated.h1>
    </div>
  )
}