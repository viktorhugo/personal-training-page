import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react"


export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 w-full z-50">
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl border-b border-lime-400/20"></div>

                <div className="relative flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
                {/* Enhanced Logo */}
                <div className="flex items-center group">
                    <Link to="/" className="flex items-center space-x-3">
                    <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-lime-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                            <span className="text-black font-bold text-lg">Ls</span>
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-br from-lime-400/50 to-lime-600/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl sm:text-2xl font-bold tracking-wider bg-gradient-to-r from-white to-lime-400 bg-clip-text text-transparent">
                        Laura Sanchez
                        </span>
                        <span className="text-xs text-lime-400/80 font-light tracking-widest hidden sm:block">
                        COACH
                        </span>
                    </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                    {[
                    { to: "#what-is", label: "WHAT IS FITSCRIPT?" },
                    { to: "#how-it-works", label: "HOW IT WORKS" },
                    { to: "#success", label: "SUCCESS" },
                    { to: "#team", label: "OUR TEAM" },
                    ].map((item, index) => (
                    <Link
                        key={index}
                        to={item.to}
                        className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
                    >
                        <span className="relative z-10">{item.label}</span>
                        <div className="absolute inset-0 bg-lime-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-lime-400 to-lime-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                    </Link>
                    ))}

                    {/* Enhanced CTA Button */}
                    <div className="ml-6">
                    <button className="relative px-6 py-3 bg-gradient-to-r from-lime-400 to-lime-500 text-black font-semibold rounded-full text-sm overflow-hidden group transform hover:scale-105 transition-all duration-300">
                        <span className="relative z-10 flex items-center">
                        SCHEDULE CONSULT
                        <div className="ml-2 w-4 h-4 rounded-full bg-black/20 flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                            <ArrowRight className="w-2 h-2" />
                        </div>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-lime-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                        <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500"></div>
                    </button>
                    </div>
                </div>

                {/* Enhanced Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden relative w-10 h-10 rounded-lg bg-lime-400/10 border border-lime-400/20 flex items-center justify-center group hover:bg-lime-400/20 transition-all duration-300"
                    aria-label="Toggle mobile menu"
                >
                    <div className="relative w-6 h-6">
                    <span
                        className={`absolute top-1 left-0 w-6 h-0.5 bg-lime-400 transform transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
                    ></span>
                    <span
                        className={`absolute top-2.5 left-0 w-6 h-0.5 bg-lime-400 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                    ></span>
                    <span
                        className={`absolute top-4 left-0 w-6 h-0.5 bg-lime-400 transform transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
                    ></span>
                    </div>
                </button>
            </div>

            {/* Enhanced Mobile Navigation Menu */}
            <div
            className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-out ${
                isMobileMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
            >
            <div className="bg-black/95 backdrop-blur-xl border-b border-lime-400/20 shadow-2xl">
                <div className="px-4 py-6">
                <div className="flex flex-col space-y-1">
                    {[
                    { to: "#what-is", label: "WHAT IS FITSCRIPT?", delay: "delay-75" },
                    { to: "#how-it-works", label: "HOW IT WORKS", delay: "delay-100" },
                    { to: "#success", label: "SUCCESS", delay: "delay-150" },
                    { to: "#team", label: "OUR TEAM", delay: "delay-200" },
                    ].map((item, index) => (
                    <Link
                        key={index}
                        to={item.to}
                        className={`relative px-4 py-4 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group rounded-lg hover:bg-lime-400/10 ${isMobileMenuOpen ? `animate-fade-in-up ${item.delay}` : ""}`}
                        onClick={closeMobileMenu}
                    >
                        <span className="flex items-center justify-between">
                        {item.label}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </span>
                        <div className="absolute bottom-0 left-4 w-0 h-0.5 bg-gradient-to-r from-lime-400 to-lime-600 group-hover:w-[calc(100%-2rem)] transition-all duration-300"></div>
                    </Link>
                    ))}

                    {/* Mobile CTA Button */}
                    <div className={`pt-4 ${isMobileMenuOpen ? "animate-fade-in-up delay-300" : ""}`}>
                    <button
                        className="w-full relative px-6 py-4 bg-gradient-to-r from-lime-400 to-lime-500 text-black font-semibold rounded-xl text-sm overflow-hidden group"
                        onClick={closeMobileMenu}
                    >
                        <span className="relative z-10 flex items-center justify-center">
                        SCHEDULE CONSULT
                        <div className="ml-2 w-5 h-5 rounded-full bg-black/20 flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                            <ArrowRight className="w-3 h-3" />
                        </div>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-lime-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </nav>
    );
}