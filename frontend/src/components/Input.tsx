
type InputProps = {
  value: string;
  setValue: (value: string) => void;
};

const Input = ({ value, setValue }: InputProps) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ease-in-out bg-white text-gray-900 placeholder-gray-500 shadow-sm"
    />
  );
};

export default Input;
