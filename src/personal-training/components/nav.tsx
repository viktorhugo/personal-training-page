import { useState } from "react";
import { Link } from "react-router";
import {
    ArrowRight,
    Star,
    Target,
    Award,
    Activity,
    Sparkles,
    Zap,
} from "lucide-react"
import { getMakeConsultationLink } from "@/utils/codenly-link";


export default function Navbar2() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const handleMakeConsultationClick = () => {
            const link = getMakeConsultationLink();
            closeMobileMenu
            window.open(link, '_blank');
        }

    return (

        <nav className="fixed top-0 w-full z-50">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xs border-b border-gray-800/50 shadow-lg shadow-black/40"></div>

            <div className="relative flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-12 py-3 sm:py-4">
            {/* Responsive Logo */}
            <div className="flex items-center group">
                <Link to="/" className="flex items-center space-x-2 sm:space-x-4">
                <div className="relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-slate-800 via-gray-900
                        to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center transform group-hover:scale-110
                            group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-orange-500/25">
                        <Sparkles className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-yellow-400/30 to-slate-800/30 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex flex-col">
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-gray-200 to-orange-500 bg-clip-text text-transparent">
                        LAURA SANCHEZ
                    </span>
                    <span className="text-xs text-orange-500 font-medium tracking-[0.1em] sm:tracking-[0.2em] sm:text-xs sm:font-bold"> {/* hidden sm:block */}
                        COACH & PERSONAL TRAINER
                    </span>
                </div>
                </Link>
            </div>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                {[
                    { to: "#what-is", label: "QUIEN ES LAURA" },
                    { to: "#how-it-works", label: "CÓMO TRABAJA" },
                    { to: "#success", label: "ÉXITOS" },
                    { to: "#team", label: "NUESTRO EQUIPO" },
                ].map((item, index) => (
                    <Link
                        key={index}
                        to={item.to}
                        className="relative px-3 xl:px-5 py-2 xl:py-3 text-xs xl:text-sm font-semibold text-gray-700 hover:text-gray-900 transition-all duration-300 group rounded-xl xl:rounded-2xl"
                    >
                        <span className="relative z-10 text-gray-200 hover:text-white">{item.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 shadow-md"></div>
                        <div className="absolute bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:w-6 xl:group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></div>
                    </Link>
                ))}

                <div className="ml-4 xl:ml-8">
                    <button className=" cursor-pointer relative px-4 xl:px-8 py-3 xl:py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-bold rounded-xl xl:rounded-2xl text-xs xl:text-sm overflow-hidden group transform hover:scale-105 transition-all duration-300 shadow-xl shadow-orange-500/25">
                        <span className="relative z-10 flex items-center">
                            PROGRAMAR CONSULTA
                        <div className="ml-2 xl:ml-3 w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                            <ArrowRight className="w-2 h-2 xl:w-3 xl:h-3" />
                        </div>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 rounded-xl xl:rounded-2xl transition-transform duration-700"></div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Button - Visible on mobile/tablet */}
            <button
                onClick={toggleMobileMenu}
                className="lg:hidden relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800 to-gray-900 border border-slate-600/50 flex items-center justify-center group hover:from-orange-900/20 hover:to-red-900/20 hover:border-orange-500/50 transition-all duration-300 shadow-lg"
                aria-label="Toggle mobile menu"
            >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <span
                    className={`absolute top-1 left-0 w-5 sm:w-6 h-0.5 bg-gray-300 transform transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2 sm:translate-y-2.5 bg-orange-500" : ""}`}
                ></span>
                <span
                    className={`absolute top-2 sm:top-2.5 left-0 w-5 sm:w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                    className={`absolute top-3 sm:top-4 left-0 w-5 sm:w-6 h-0.5 bg-gray-300 transform transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2 sm:-translate-y-2.5 bg-orange-500" : ""}`}
                ></span>
                </div>
            </button>
            </div>

            {/* Responsive Mobile Navigation Menu */}
            <div
            className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ease-out ${
                isMobileMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
            >
            <div className="bg-black/95 backdrop-blur-2xl border-b border-gray-800/50 shadow-2xl shadow-black/40">
                <div className="px-3 sm:px-4 md:px-6 py-6 sm:py-8">
                <div className="flex flex-col space-y-1 sm:space-y-2">
                    {[
                        { to: "#what-is", label: "QUIEN ES LAURA", delay: "delay-75", icon: Target  },
                        { to: "#how-it-works", label: "CÓMO TRABAJA", delay: "delay-100", icon: Activity },
                        { to: "#success", label: "ÉXITOS", delay: "delay-150", icon: Star },
                        { to: "#team", label: "NUESTRO EQUIPO", delay: "delay-200", icon: Award },
                    ].map((item, index) => (
                        <Link
                            key={index}
                            to={item.to}
                            className={`relative px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base font-semibold text-gray-300 hover:text-white transition-all duration-300 group rounded-xl sm:rounded-2xl hover:bg-gradient-to-r hover:from-orange-900/20 hover:to-red-900/20 ${isMobileMenuOpen ? `animate-fade-in-up ${item.delay}` : ""}`}
                            onClick={closeMobileMenu}
                        >
                            <span className="flex items-center justify-between">
                            <div className="flex items-center">
                                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-orange-500" />
                                {item.label}
                            </div>
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-orange-600" />
                            </span>
                        </Link>
                    ))}

                    <div className={`pt-4 sm:pt-6 ${isMobileMenuOpen ? "animate-fade-in-up delay-300" : ""}`}>
                        <button
                            className=" cursor-pointer w-full relative px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-orange-500 via-orange-600
                                to-red-600 text-white font-bold rounded-xl sm:rounded-2xl text-sm sm:text-base overflow-hidden group shadow-xl shadow-orange-500/25"
                            onClick={handleMakeConsultationClick}
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                    PROGRAMAR CONSULTA
                                <div className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                                    <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3" />
                                </div>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </nav>
    );
}