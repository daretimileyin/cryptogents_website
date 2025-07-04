import { Plus, X } from "lucide-react";
import { useState } from "react";

interface DropDownTabProps {
    content: any;
}

export const DropDownTab = ({content}: DropDownTabProps) => {
    const [isShown, setIsShown] = useState(false)

    return(
        <div className="border border-gray-300 rounded-xl">
            <div className={`flex items-center justify-between cursor-pointer text-white ${!isShown ? `p-6` : `px-6 pt-6 pb-2`}`} onClick={() => setIsShown(!isShown)}>
                <p className="text-2xl">{content.question}</p>
                {!isShown 
                    ? (<Plus size={24}/>) 
                    : (<X size={24}/>)

                }
                
            </div>
            <div className={`px-6  text-gray-400 text-lg overflow-hidden ${!isShown ? `h-0` : `pb-6`}`}>
                {content.answer}
            </div>
        </div>
    )
}