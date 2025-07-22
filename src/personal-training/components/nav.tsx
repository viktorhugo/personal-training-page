import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react"


export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
                <div className="flex items-center">
                    <Link to="/" className="text-xl sm:text-2xl font-bold tracking-wider">
                    LauraSanchez Coach
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    <Link to="#what-is" className="text-sm font-medium hover:text-lime-400 transition-colors">
                    WHAT IS FITSCRIPT?
                    </Link>
                    <Link to="#how-it-works" className="text-sm font-medium hover:text-lime-400 transition-colors">
                    HOW IT WORKS
                    </Link>
                    <Link to="#success" className="text-sm font-medium hover:text-lime-400 transition-colors">
                    SUCCESS
                    </Link>
                    <Link to="#team" className="text-sm font-medium hover:text-lime-400 transition-colors">
                    OUR TEAM
                    </Link>
                    <Button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-4 lg:px-6 py-2 rounded-full text-sm">
                    SCHEDULE CONSULT
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 text-white hover:text-lime-400 transition-colors"
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
            >
            <div className="px-4 py-4 bg-black/98 border-t border-gray-800">
                <div className="flex flex-col space-y-4">
                <Link
                    to="#what-is"
                    className="text-sm font-medium hover:text-lime-400 transition-colors py-2"
                    onClick={closeMobileMenu}
                >
                    WHAT IS FITSCRIPT?
                </Link>
                <Link
                    to="#how-it-works"
                    className="text-sm font-medium hover:text-lime-400 transition-colors py-2"
                    onClick={closeMobileMenu}
                >
                    HOW IT WORKS
                </Link>
                <Link
                    to="#success"
                    className="text-sm font-medium hover:text-lime-400 transition-colors py-2"
                    onClick={closeMobileMenu}
                >
                    SUCCESS
                </Link>
                <Link
                    to="#team"
                    className="text-sm font-medium hover:text-lime-400 transition-colors py-2"
                    onClick={closeMobileMenu}
                >
                    OUR TEAM
                </Link>
                <Button
                    className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-3 rounded-full text-sm mt-4 w-full"
                    onClick={closeMobileMenu}
                >
                    SCHEDULE CONSULT
                </Button>
                </div>
            </div>
            </div>
        </nav>
    );
}