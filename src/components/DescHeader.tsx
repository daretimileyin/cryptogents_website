// interface DescHeaderProps{
//     header: string;
//     paragraph?: string;
// }

// const DescHeader = ({header , paragraph}: DescHeaderProps) => {
//   return (
//     <div className="w-full text-white text-center space-y-4">
//         <h1 className="lg:w-[85%] mx-auto text-[28px] tracking-tighter leading-tight lg:text-5xl font-medium">{header}</h1>
//         <p className="lg:w-[70%] mx-auto text-[1.15rem] lg:text-lg">{paragraph}</p>
//     </div>
//   )
// }

// export default DescHeader


interface DescHeaderProps {
  header?: string;
  paragraph?: string;
}

const DescHeader = ({ header, paragraph }: DescHeaderProps) => {
  const decodeHeadInfo = header?.split(",") || [];

  return (
    <div className="w-full text-center space-y-5">
      <h1 className="lg:w-[85%] mx-auto text-[32px] md:text-[42px] lg:text-[50px] font-semibold leading-tight tracking-tight">
        {decodeHeadInfo[0] && (
          <span className="block bg-gradient-to-r from-[#f0f0f0] via-[#ccc] to-[#f0f0f0] bg-clip-text text-transparent">
            {decodeHeadInfo[0]}
          </span>
        )}
        {decodeHeadInfo[1] && (
          <span className="block bg-gradient-to-r from-[#f0f0f0] via-[#ccc] to-[#f0f0f0] bg-clip-text text-transparent">
            {decodeHeadInfo[1]}
          </span>
        )}
      </h1>
      {paragraph && (
        <p className="lg:w-[65%] mx-auto text-[1.05rem] lg:text-lg text-center text-white">
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default DescHeader;
