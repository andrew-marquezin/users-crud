interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({ label, name, value, onChange }: TextInputProps) {
  return (
    <div className="inputLabelContainer">
      <label className="inputLabel">
        {label}
        <input
          type="text"
          name={name}
          className="textInput"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  )
}