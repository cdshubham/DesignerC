const Roundbutton = ({className,text}:{className?:string,text:string}) => {
  return (
    <button
      className={`py-[12px] px-[55px] w-[270px] h-[48px]  text-[#1700E6] rounded-full ${className}`}
    >
     {text}
    </button>
  );
}

export default Roundbutton;