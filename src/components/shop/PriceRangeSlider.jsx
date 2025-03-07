import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRangeSlider = ({ minValue, maxValue, value, onRangeChange }) => {
  // Stato interno per evitare continui re-render nel padre
  const [sliderValue, setSliderValue] = useState(value);

  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  const handleSliderChange = (val) => {
    // Aggiorna solo lo stato locale durante il trascinamento
    setSliderValue(val);
  };

  const handleAfterChange = (val) => {
    // Al termine del trascinamento aggiorna il valore nel padre
    onRangeChange(val);
  };

  return (
    <div className="w-full">
      <Slider
        style={{ touchAction: "pan-x", pointerEvents: "auto", width: "100%" }}
        allowCross={false}
        range
        min={minValue}
        max={maxValue}
        step={10}
        value={sliderValue}
        onChange={handleSliderChange}
        onAfterChange={handleAfterChange}
      />
      <div className="flex justify-between text-sm mt-2">
        <span>{sliderValue[0]}€</span>
        <span>{sliderValue[1]}€</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;