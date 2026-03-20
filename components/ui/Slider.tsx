"use client";

interface SliderProps {
  min: number;
  max: number;
  value: number;
  step?: number;
  onChange: (value: number) => void;
  className?: string;
}

export function Slider({
  min,
  max,
  value,
  step = 1,
  onChange,
  className = "",
}: SliderProps) {
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className={`relative h-2 w-full ${className}`}>
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: "#EAF4FB" }}
      />
      <div
        className="absolute left-0 top-0 h-full rounded-l-full transition-[width] duration-75"
        style={{
          width: `${percent}%`,
          background: "linear-gradient(90deg, #4A90E2 0%, #294F7C 100%)",
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range-slider range-slider-track-transparent absolute inset-0 h-full w-full cursor-pointer"
      />
    </div>
  );
}
