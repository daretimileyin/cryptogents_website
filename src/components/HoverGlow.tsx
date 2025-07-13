 interface HoverGlowProps{
  label : string
 }
const HoverGlow = ({label}: HoverGlowProps) => {
  return (
        <div className="group relative w-fit mx-auto rounded-xl">
            {/* Label */}
            <div className="relative z-10 px-6 py-1 text-white text-sm lg:text-base rounded-xl bg-linear-to-tr from-[#1a1a1a] via-[#2c2c2c] to-[#0f0f0f] shadow-white uppercase font-semibold">
                {label}
            </div>
            {/* Base Gradient */}
            <div className="absolute -inset-px bg-gradient-to-r from-[#1a1a1a] via-[#a9a9a9] to-[#0f0f0f] rounded-xl z-0"></div>

            {/* Hover Gradient Overlay (fades in) */}
            <div className="absolute -inset-px bg-gradient-to-tl from-[#1a1a1a] via-[#ffffff66] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-xl z-0 pointer-events-none"></div>
        </div>
  )
}

export default HoverGlow