import "./Checkbox.css";

type CheckboxProps = {
  id: string;
};

export const Checkbox = ({ id }: CheckboxProps) => {
  return (
    <div className="checkbox-wrapper-46">
      <input className="inp-cbx" id={id} type="checkbox" />
      <label className="cbx" htmlFor={id}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span>Checkbox</span>
      </label>
    </div>
  );
};
