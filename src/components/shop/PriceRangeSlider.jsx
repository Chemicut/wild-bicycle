import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const rail = { backgroundColor: "rgba(238, 235, 220, 0.2)", height: 3 };
const track = { backgroundColor: "#facc15", height: 3 };
const handle = {
  backgroundColor: "#facc15",
  borderColor: "#13200f",
  borderWidth: 2,
  opacity: 1,
  width: 16,
  height: 16,
  marginTop: -6.5,
  boxShadow: "none",
};

const PriceRangeSlider = ({ minValue, maxValue, value, onRangeChange }) => {
  const [sliderValue, setSliderValue] = useState(value);

  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  return (
    <div className="w-full px-1">
      <Slider
        style={{ touchAction: "pan-x", width: "100%" }}
        allowCross={false}
        range
        min={minValue}
        max={maxValue}
        step={50}
        value={sliderValue}
        onChange={setSliderValue}
        onChangeComplete={onRangeChange}
        styles={{ rail, track, handle }}
      />
    </div>
  );
};

export default PriceRangeSlider;
