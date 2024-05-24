import "./Checkbox.css";

export const Checkbox = ({
  id,
  checked,
  ...restProps
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="checkbox-wrapper-46 relative">
      <input
        className="inp-cbx"
        id={id}
        type="checkbox"
        checked={checked}
        {...restProps}
      />
      <label className="cbx" htmlFor={id}>
        <span>
          <svg width="18px" height="18px" viewBox="0 0 18 18">
            <polyline points="1.5 8 7 13 15 1"></polyline>
          </svg>
        </span>
        <span className="w-0 h-0 absolute" />
      </label>
    </div>
  );
};
