"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    ArrowRight,
    CheckCircle,
    Star,
    Target,
    TrendingUp,
    Award,
    Clock,
    Shield,

    Zap,
} from "lucide-react";

import Navbar2 from "../components/nav2"

export default function HomePage() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Ignore MetaMask connection failures in environments where the wallet
    // extension isn’t available (e.g. v0 preview, mobile Safari, etc.).
    useEffect(() => {
        function handleUnhandled(event: PromiseRejectionEvent) {
        const reason = event?.reason
        // Some wallet libraries throw:  "Failed to connect to MetaMask"
            if (
                typeof reason === "string"
                ? reason.includes("Failed to connect to MetaMask")
                : reason?.message?.includes?.("Failed to connect to MetaMask")
            ) {
                // Prevent the default unhandled-rejection logging and keep the app running
                console.warn("MetaMask connection failed – continuing without wallet.")
                event.preventDefault()
            }
        }

        window.addEventListener("unhandledrejection", handleUnhandled)
        return () => window.removeEventListener("unhandledrejection", handleUnhandled)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-x-hidden">
            {/* Responsive Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -left-20 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-gray-800/15 to-gray-700/15 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-orange-500/15 to-orange-600/15 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Responsive Floating Particles */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-orange-500/30 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`,
                        }}
                    ></div>
                ))} */}
            </div>

            {/* Fully Responsive Navigation */}
            <Navbar2 />

            {/* Fully Responsive Hero Section */}
            <section className="flex flex-col lg:flex-row items-center justify-between px-3 sm:px-4 md:px-6 lg:px-12 py-16 sm:py-20 
                md:py-24 lg:py-32 mt-16 sm:mt-20 relative">
                <div className="w-full lg:w-1/2 mb-8 sm:mb-12 lg:mb-0 relative">
                    <div className="relative group">
                        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-orange-400/90 to-red-400/70 rounded-2xl 
                            sm:rounded-2xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-500"></div>
                        <img
                            src="/src/assets/images/lau5.png"
                            alt="Muscular man doing bicep curls"
                            width={600}
                            height={700}
                            className="relative object-cover rounded-2xl sm:rounded-3xl w-full h-auto max-h-[400px] sm:max-h-[600px] 
                            md:max-h-[600px] lg:max-h-none shadow-xl sm:shadow-2xl shadow-gray-900/10 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-2xl sm:rounded-3xl"></div>

                        {/* Responsive Floating Stats */}
                        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-white/90 backdrop-blur-xl rounded-xl 
                            sm:rounded-2xl p-3 sm:p-4 shadow-xl shadow-gray-900/10 animate-float">
                            <div className="text-lg sm:text-2xl font-bold text-orange-600">98%</div>
                        <div className="text-xs text-gray-600">Tasa de éxito</div>
                        </div>

                        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white/90 backdrop-blur-xl rounded-xl 
                            sm:rounded-2xl p-3 sm:p-4 shadow-xl shadow-gray-900/10 animate-float delay-1000">
                            <div className="text-lg sm:text-2xl font-bold text-gray-800">Mas de 100</div>
                        <div className="text-xs text-gray-600">Clientes Satisfechos </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:pl-12 xl:pl-20">
                    <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                        <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-full text-xs sm:text-sm font-bold text-orange-300 mb-6 sm:mb-8 shadow-lg">
                            {/* Revolutionary Longevity Science */}
                            Tu bienestar es mi prioridad. Vamos con todo.
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight">
                            <span className="bg-gradient-to-r from-white via-gray-100 to-orange-500 bg-clip-text text-transparent animate-gradient">
                                NO ESTAS SOLO.
                            </span>
                            <br />
                            <span className="text-gray-200 italic font-light">
                                ESTOY AQUI PARA  
                                <br />
                                ACOMPAÑARTE EN CADA PASO.
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-gray-300 font-medium">
                        {/* Ponte a prueba, no adivines. Transforma tu biología. */}
                        {/* Te acompaño a conquistar tu cuerpo, tu mente y tu vida. */}
                        Mi misión: verte brillar desde adentro hacia afuera.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                            <button className="group relative px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-bold rounded-xl sm:rounded-2xl text-base sm:text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/25">
                                <span className="relative z-10 flex items-center justify-center">
                                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                        APLICAR AHORA
                                    <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 rounded-xl sm:rounded-2xl transition-transform duration-700"></div>
                            </button>

                            <button className="group px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-slate-800/80 backdrop-blur-xl text-white font-bold rounded-xl
                                sm:rounded-2xl text-base sm:text-lg border-2 border-orange-500/50 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300 shadow-xl shadow-black/20">
                                <span className="flex items-center justify-center">
                                MAS INFO
                                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </button>
                        </div>

                        {/* Responsive Trust Indicators */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 text-xs sm:text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                                <span>Consulta gratuita</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                                <span>100% Confidencial</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                                <span>Garantía de 30 días</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Responsive Media Logos Section */}
            <section className="px-3 sm:px-4 md:px-6 lg:px-12 py-12 sm:py-16 border-t border-gray-800/50 bg-black/80 backdrop-blur-xl">
                <p className="text-center text-gray-400 mb-8 sm:mb-12 text-xs sm:text-sm font-semibold tracking-wider">
                    COMO APARECE EN
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 opacity-60 hover:opacity-80 transition-opacity duration-300">
                    <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider text-gray-300 hover:text-orange-500 transition-colors duration-300">
                        Tik-Tok
                    </div>
                    <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-serif italic text-gray-300 hover:text-orange-500 transition-colors duration-300">
                        Instagram
                    </div>
                    <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-300 hover:text-orange-500 transition-colors duration-300">
                        Facebook
                    </div>
                    <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-gray-300 hover:text-orange-500 transition-colors duration-300">
                        Youtube
                    </div>
                    <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-gray-300 hover:text-orange-500 transition-colors duration-300">
                        LinkedIn
                    </div>
                </div>
            </section>

            {/* Responsive What is FitScript Section */}
            <section id="what-is" className="px-3 sm:px-4 md:px-6 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 sm:mb-20">
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-full text-xs sm:text-sm font-bold text-orange-300 mb-6 sm:mb-8 shadow-lg">
                            <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            Nuestro enfoque revolucionario
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 text-white">
                            PORQUE ELEGIR A{" "}
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                LAURA
                            </span>
                            ?
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                            Laura usa un enfoque revolucionario para la longevidad y una salud óptima. Combinamos 
                            pruebas personalizadas y asesoramiento experto para ayudarte a envejecer al revés.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                        {[
                            {
                                icon: Target,
                                title: "PRECISION TESTING",
                                description:
                                "Comprehensive biomarker analysis to understand your unique biological age and health markers.",
                                gradient: "from-blue-500 to-cyan-500",
                            },
                            {
                                icon: TrendingUp,
                                title: "PERSONALIZED PROTOCOLS",
                                description:
                                "Custom nutrition, exercise, and lifestyle interventions based on your specific test results.",
                                gradient: "from--500 to-emerald-500",
                            },
                            {
                                icon: Award,
                                title: "EXPERT GUIDANCE",
                                description: "Work directly with longevity specialists and health optimization experts.",
                                gradient: "from-purple-500 to-pink-500",
                            },
                        ].map((item, index) => (
                            <Card
                                key={index}
                                className="group bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 shadow-xl shadow-black/20
                                hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 hover:-translate-y-2 rounded-2xl 
                                sm:rounded-3xl overflow-hidden"
                            >
                                <CardContent className="p-6 sm:p-8 lg:p-10 text-center relative">
                                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${item.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center 
                                        mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                                        <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-white">{item.title}</h3>
                                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">{item.description}</p>
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity
                                        duration-500 rounded-2xl sm:rounded-3xl`}>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium How It Works Section */}
            <section id="how-it-works" className="px-4 sm:px-6 lg:px-12 py-20 sm:py-24 lg:py-32 bg-slate-800/70 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 text-white">
                            CÓMO{" "}
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">FUNCIONA</span>
                        </h2>
                            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Nuestro proceso probado de 4 pasos para optimizar su salud y extender su esperanza de vida.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {[
                            {
                                step: "01",
                                title: "CONSULTA",
                                description: "Evaluación inicial y establecimiento de objetivos con nuestros expertos en longevidad.",
                            },
                            {
                                step: "02",
                                title: "PRUEBAS",
                                description: "Pruebas integrales de biomarcadores y análisis de salud.",
                            },
                            {
                                step: "03",
                                title: "PROTOCOLO",
                                description: "Plan de intervención personalizado en función de tus resultados.",
                            },
                            {
                                step: "04",
                                title: "MEJORAMIENTO",
                                description: "Monitoreo continuo y perfeccionamiento del protocolo.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div key={index} className="text-center">
                                    <div className="text-5xl sm:text-6xl font-bold text-orange-500 mb-4 sm:mb-6">{item.step}</div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">{item.title}</h3>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Success Stories Section */}
            <section id="success" className="px-4 sm:px-6 lg:px-12 py-20 sm:py-24 lg:py-32 bg-slate-800/70 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 text-white">
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                HISTORIAS DE{" "}
                            </span>
                            ÉXITO
                        </h2>
                        <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Nuestros Resultados reales de personas reales que han transformado su salud y longevidad.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {[
                            {
                                name: "Michael R.",
                                age: "52",
                                result: "Edad biológica reducida en 8 años",
                                quote:
                                "Me siento mejor a los 52 que a los 40. El protocolo FitScript transformó por completo mi energía y vitalidad",
                            },
                            {
                                name: "Sarah L.",
                                age: "45",
                                result: "Perdí 30 libras, gané masa muscular.",
                                quote:
                                "El enfoque personalizado marcó la diferencia. Por fin, un programa que realmente funciona para mi cuerpo .",
                            },
                            {
                                name: "David K.",
                                age: "38",
                                result: "Sueño y recuperación optimizados",
                                quote:
                                "Mi calidad de sueño mejoró drásticamente y ahora mi tiempo de recuperación es la mitad de lo que solía ser",
                            },
                        ].map((story, index) => (
                            <Card
                                key={index}
                                className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 shadow-xl shadow-black/20 
                                    hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden"
                            >
                                <CardContent className="p-8 lg:p-10">
                                <div className="flex mb-6">
                                    {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-8 italic leading-relaxed">"{story.quote}"</p>
                                <div className="border-t border-slate-700/50 pt-6">
                                    <p className="font-bold text-white">
                                    {story.name}, {story.age}
                                    </p>
                                    <p className="text-orange-500 text-sm">{story.result}</p>
                                </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Stats Section */}
            <section className="px-4 sm:px-6 lg:px-12 py-20 sm:py-24 lg:py-32 bg-slate-800/70 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
                        {[
                            { number: "100+", label: "Clientes transformados", gradient: "from-slate-700 to-slate-800" },
                            { number: "15+", label: "Años de reducción de edad promedio", gradient: "from-orange-500 to-red-600" },
                            { number: "98%", label: "Satisfacción del cliente", gradient: "from-slate-600 to-yellow-600" },
                            { number: "24/7", label: "Soporte de tiempo completo", gradient: "from-orange-500 to-red-600" },
                        ].map((stat, index) => (
                            <div key={index} className="relative group">
                                <div
                                className={`text-4xl sm:text-5xl font-bold text-white mb-4 ${stat.gradient} rounded-2xl p-4 shadow-lg shadow-black/20 
                                    group-hover:shadow-2xl group-hover:shadow-yellow-500/10 transition-all duration-500 group-hover:-translate-y-2`}
                                >
                                {stat.number}
                                </div>
                                <div className="text-gray-300 text-sm sm:text-base leading-relaxed">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Our Team Section */}
            <section id="team" className="px-4 sm:px-6 lg:px-12 py-20 sm:py-24 lg:py-32 bg-black/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 text-white">
                            NUESTRO{" "}
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">EQUIPO</span>
                        </h2>
                        <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Expertos de clase mundial en longevidad, nutrición y optimización humana.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {[
                            {
                                name: "Dr. James Wilson",
                                title: "Director de Longevidad",
                                credentials: "Doctor en Medicina y Doctorado en Biología Molecular",
                                gradient: "from-blue-500 to-cyan-500",
                            },
                            {
                                name: "Dr. Maria Rodriguez",
                                title: "Jefe de Nutrición",
                                credentials: "Doctorado en Ciencias de la Nutrición",
                                gradient: "from--500 to-emerald-500",
                            },
                            {
                                name: "Dr. Alex Chen",
                                title: "Fisiólogo del ejercicio",
                                credentials: "Doctorado en Ciencias del Ejercicio",
                                gradient: "from-purple-500 to-pink-500",
                            },
                        ].map((member, index) => (
                            <Card
                                key={index}
                                className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 shadow-xl shadow-black/20
                                    hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden"
                            >
                                <CardContent className="p-8 lg:p-10 text-center relative">
                                    <div
                                        className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${member.gradient} rounded-2xl mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                                    >
                                        <div className="w-full h-full rounded-2xl bg-gray-700"></div>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">{member.name}</h3>
                                    <p className="text-orange-500 mb-4">{member.title}</p>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{member.credentials}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium CTA Section */}
            <section className="px-4 sm:px-6 lg:px-12 py-20 sm:py-24 lg:py-32 bg-black/80 backdrop-blur-xl">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 text-white">
                        LISTO PARA{" "}
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                        TRANSFORMAR
                        </span>{" "}
                        TU VIDA?
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto px-4">
                        Únase a muchas mas personas que ya han descubierto el secreto para revertir el envejecimiento.
                        Su camino hacia una salud óptima comienza con una sola consulta.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="group relative px-12 py-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white
                            font-bold rounded-2xl text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/25">
                            <span className="relative z-10 flex items-center justify-center">
                                <Zap className="w-5 h-5 mr-2" />
                                PROGRAMAR UNA CONSULTA GRATIS
                                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 translate-y-full group-hover:translate-y-0
                                transition-transform duration-500"></div>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
