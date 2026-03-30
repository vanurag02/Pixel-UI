import "./Label.css";

function Label({ children, htmlFor, size = "md", required = false }) {
  return (
    <label htmlFor={htmlFor} className={`label label--${size}`}>
      {children}
      {required && <span className="label__required">*</span>}
    </label>
  );
}

export default Label;
