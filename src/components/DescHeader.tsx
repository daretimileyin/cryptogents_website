interface DescHeaderProps{
    header: string;
    paragraph: string;
}

const DescHeader = ({header , paragraph}: DescHeaderProps) => {
  return (
    <div className="text-white text-center space-y-4">
        <h1 className="text-5xl font-bold">{header}</h1>
        <p className="w-[50%] mx-auto text-lg">{paragraph}</p>
    </div>
  )
}

export default DescHeader