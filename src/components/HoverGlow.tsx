 interface HoverGlowProps{
  label : string
 }
const HoverGlow = ({label}: HoverGlowProps) => {
  return (
        <div className="relative w-fit mx-auto rounded-xl">
            {/* Label */}
            <div className="relative z-10 px-6 py-1 text-white text-sm lg:text-base rounded-xl bg-gradient-to-tr from-[#1a1a1a] via-[#2c2c2c] to-[#0f0f0f] shadow-white uppercase font-semibold">
                {label}
            </div>
            {/* Glow */}
            <div className="glow-gradient absolute -inset-[1px] bg-gradient-to-r from-[#1a1a1a] via-[#a9a9a9] to-[#0f0f0f]  rounded-xl shadow-inner"></div>
        </div>
  )
}

export default HoverGlow