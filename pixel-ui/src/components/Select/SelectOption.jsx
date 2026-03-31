function SelectOption({ value, label, disabled = false }) {
  return (
    <option value={value} disabled={disabled}>
      {label}
    </option>
  );
}

export default SelectOption;
