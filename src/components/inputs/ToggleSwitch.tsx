"use client";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
}) => {
  return (
    <label className="relative inline-block w-14 h-8">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span
        className={`
          absolute cursor-pointer top-0 left-0 right-0 bottom-0 
          ${checked ? "bg-blue-500" : "bg-gray-300"}
          transition-all duration-300 rounded-full
          before:absolute before:content-[''] before:h-6 before:w-6 
          before:left-1 before:bottom-1 before:bg-white before:transition-all 
          before:duration-300 before:rounded-full
          ${checked ? "before:translate-x-6" : ""}
        `}
      ></span>
    </label>
  );
};
