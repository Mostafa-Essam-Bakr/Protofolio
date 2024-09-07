// App.js

import React, { useEffect, useState } from "react";
import { FaUtensils, FaSmileBeam, FaList, FaStar } from "react-icons/fa";
import { MdTipsAndUpdates } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { SiFuturelearn } from "react-icons/si";

const CountUpAnimation = ({
  iconComponent,
  initialValue,
  targetValue,
  text,
}) => {
  const [count, setCount] = useState(initialValue);
  const duration = 4000; // 4 seconds

  useEffect(() => {
    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue, initialValue]);

  return (
    <div className="container">
      <div className="icon">{iconComponent}</div>
      <span className="num">{count}+</span>
      <span className="text">{text}</span>
    </div>
  );
};

function Count() {
  return (
    <div className="parentcount">
      <h1>About me </h1>
      <h2>
        With over 3 years focused on developing websites that achieve business
        <br />
        goals, I've established myself as a trusted professional in the
        industry.
      </h2>
      <div className="wrapper">
        <CountUpAnimation
          iconComponent={<MdTipsAndUpdates />}
          initialValue={0}
          targetValue={3}
          text="Years Of Experience"
        />
        <CountUpAnimation
          iconComponent={<FaProjectDiagram />}
          initialValue={0}
          targetValue={7}
          text="Complete Projects
"
        />
        <CountUpAnimation
          iconComponent={<SiFreelancer />}
          initialValue={0}
          targetValue={70}
          text="Freelancer"
        />
        <CountUpAnimation
          iconComponent={<SiFuturelearn />}
          initialValue={0}
          targetValue={3.5}
          text="GPA EDUCATION"
        />
      </div>
    </div>
  );
}

export default Count;
