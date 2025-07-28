import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const ButtonInfo = ({ handleWhatsAppClick }: { handleWhatsAppClick: () => void }) => {
    return (
        <Button
            variant="outline"
            className="cursor-pointer border-orange-500 text-white-32 text-md h-10 hover:bg-gradient-to-r from-red-600 to-orange-500 
            hover:text-white hover:border-red-600 rounded-full px-6 transition-all duration-300 bg-transparent"
            onClick={handleWhatsAppClick} >
            <span className="relative z-10 flex items-center justify-center">
                    Inscribirme
                <ArrowRight className="ml-3 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 rounded-xl sm:rounded-2xl transition-transform duration-700"></div>
        </Button>
    );
}
