import { useState } from "react";
import "./form.css";

const Form = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    label,
    errorMessage,
    onChange,
    val,
    optionsValues,
    selectiveData,
    id,
    ...inputProps
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      {val !== "checkbox" ? (
        <div>
          <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() =>
              inputProps.name === "confirmPassword" && setFocused(true)
            }
            focused={focused.toString()}
          />
          <span>{errorMessage}</span>
        </div>
      ) : (
        <div className="selectClass">
          <select {...inputProps} onChange={onChange}>
            <option hidden disabled value="">
              Select an Option
            </option>
            {optionsValues &&
              optionsValues.map((i, idx) => (
                <option key={idx + 1} value={i}>
                  {i}
                </option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Form;
