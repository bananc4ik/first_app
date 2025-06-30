import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const PriceSlider = () => {
  const STEP = 10;
  const MIN = 0;
  const MAX = 300;

  const [values, setValues] = useState([50, 200]);

  return (
    <div style={{ padding: "2rem", width: "250px" }}>
      <label style={{ fontWeight: "bold", marginBottom: "1rem", display: "block" }}>
        Price <span style={{ float: "right" }}>▴</span>
      </label>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={setValues}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              background: getTrackBackground({
                values,
                colors: ["#ccc", "black", "#ccc"],
                min: MIN,
                max: MAX
              }),
              borderRadius: "3px",
              margin: "2rem 0"
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              height: "20px",
              width: "20px",
              backgroundColor: "black",
              borderRadius: "50%",
              boxShadow: "0 0 2px #999",
              cursor: "pointer",
              position:"relative",
              bottom:"20px"
            }}
          />
        )}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>${values[0]}</span>
        <span>${values[1]}</span>
      </div>
    </div>
  );
};

export default PriceSlider;