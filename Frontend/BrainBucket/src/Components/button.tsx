
type ButtonProps = {
  bgColor: string;       
  hoverColor: string;   
  children?: React.ReactNode;
  onClick : React.MouseEventHandler<HTMLDivElement>

};

export function Button({ bgColor, hoverColor, children, onClick  }: ButtonProps) {
  return (
    <div onClick={onClick}
      style={{ backgroundColor: bgColor }}
      className="w-40 h-12 rounded-2xl cursor-pointer flex justify-center items-center font-semibold transition-colors duration-300 ease-in-out text-[#111827]"
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = hoverColor;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = bgColor;
      }}
    >
      <div className="flex gap-1 items-center">
        
        {children}
      </div>
    </div>
  );
}
