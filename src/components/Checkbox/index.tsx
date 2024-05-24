import "./Checkbox.css";

type CheckboxProps = {
  id: string;
  checked: boolean;
};

export const Checkbox = ({ id, checked }: CheckboxProps) => {
  return (
    <div className="checkbox-wrapper-46">
      <input className="inp-cbx" id={id} type="checkbox" checked={checked} />
      <label className="cbx" htmlFor={id}>
        <span>
          <svg width="18px" height="18px" viewBox="0 0 18 18">
            <polyline points="2.5 8 7 13 16 1"></polyline>
          </svg>
        </span>
        <span></span>
      </label>
    </div>
  );
};
