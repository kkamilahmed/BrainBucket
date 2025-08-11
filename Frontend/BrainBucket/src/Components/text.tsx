type TextBoxProps = {
  placeholder: string;
  refer : React.Ref<HTMLInputElement>;

};

export function TextBox({ placeholder,refer}: TextBoxProps) {
  return (
    <input
      type="text"
      ref = {refer}
      placeholder={placeholder}
      className="w-full max-w-md px-4 py-2 border border-[#56CBF9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3FB3E1] focus:border-transparent transition"
    />
  );
}
