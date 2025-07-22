
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star, Target, TrendingUp, Award, Clock, Shield } from "lucide-react"
import { Link } from "react-router"
import Navbar from "../components/nav"

export default function HomePage() {

    return (
        <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <Navbar />
        

        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-32 mt-16">
            <div className="w-full lg:w-1/2 mb-8 sm:mb-12 lg:mb-0">
                <div className="relative">
                    <img
                    src="/src/assets/images/logo-1.png"
                    alt="Muscular man doing bicep curls"
                    width={550}
                    height={600}
                    className="object-cover max-h-[500px] sm:max-h-[600px] lg:max-h-none"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-lg"></div> */}
                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-16">
            <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="text-lime-400">AGING IS A DISEASE.</span>
                <br />
                <span className="text-white italic font-light">
                    SLOWING IT DOWN IS
                    <br />
                    THE ART OF LONGEVITY.
                </span>
                </h1>

                <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300">Test, don't guess.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                    variant="outline"
                    className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-medium group bg-transparent w-full sm:w-auto"
                >
                    APPLY NOW
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                    variant="ghost"
                    className="text-white hover:text-lime-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-medium w-full sm:w-auto"
                >
                    LEARN MORE
                </Button>
                </div>
            </div>
            </div>
        </section>

        {/* Media Logos Section */}
        <section className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 border-t border-gray-800">
            <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm">AS FEATURED IN</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wider">MEN'S FITNESS</div>
            <div className="text-lg sm:text-xl lg:text-2xl font-serif italic">Forbes</div>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">ESPN</div>
            <div className="text-lg sm:text-xl lg:text-2xl font-light">askmen°</div>
            <div className="text-lg sm:text-xl lg:text-2xl font-light">Entrepreneur</div>
            </div>
        </section>

        {/* What is FitScript Section */}
        <section id="what-is" className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
                WHAT IS <span className="text-lime-400">FITSCRIPT</span>?
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                FitScript is a revolutionary approach to longevity and optimal health. We combine cutting-edge science,
                personalized testing, and expert guidance to help you age backwards.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <Card className="bg-black border-gray-800">
                <CardContent className="p-6 sm:p-8 text-center">
                    <Target className="h-10 w-10 sm:h-12 sm:w-12 text-lime-400 mx-auto mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-4">PRECISION TESTING</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                    Comprehensive biomarker analysis to understand your unique biological age and health markers.
                    </p>
                </CardContent>
                </Card>

                <Card className="bg-black border-gray-800">
                <CardContent className="p-6 sm:p-8 text-center">
                    <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-lime-400 mx-auto mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-4">PERSONALIZED PROTOCOLS</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                    Custom nutrition, exercise, and lifestyle interventions based on your specific test results.
                    </p>
                </CardContent>
                </Card>

                <Card className="bg-black border-gray-800 sm:col-span-2 lg:col-span-1">
                <CardContent className="p-6 sm:p-8 text-center">
                    <Award className="h-10 w-10 sm:h-12 sm:w-12 text-lime-400 mx-auto mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-4">EXPERT GUIDANCE</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                    Work directly with longevity specialists and health optimization experts.
                    </p>
                </CardContent>
                </Card>
            </div>
            </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
                HOW IT <span className="text-lime-400">WORKS</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our proven 4-step process to optimize your health and extend your healthspan.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                {
                    step: "01",
                    title: "CONSULTATION",
                    description: "Initial assessment and goal setting with our longevity experts.",
                },
                {
                    step: "02",
                    title: "TESTING",
                    description: "Comprehensive biomarker testing and health analysis.",
                },
                {
                    step: "03",
                    title: "PROTOCOL",
                    description: "Personalized intervention plan based on your results.",
                },
                {
                    step: "04",
                    title: "OPTIMIZATION",
                    description: "Ongoing monitoring and protocol refinement.",
                },
                ].map((item, index) => (
                <div key={index} className="text-center">
                    <div className="text-5xl sm:text-6xl font-bold text-lime-400 mb-2 sm:mb-4">{item.step}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">{item.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Success Stories Section */}
        <section id="success" className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
                SUCCESS <span className="text-lime-400">STORIES</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Real results from real people who've transformed their health and longevity.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                {
                    name: "Michael R.",
                    age: "52",
                    result: "Reduced biological age by 8 years",
                    quote:
                    "I feel better at 52 than I did at 40. The FitScript protocol completely transformed my energy and vitality.",
                },
                {
                    name: "Sarah L.",
                    age: "45",
                    result: "Lost 30lbs, gained muscle mass",
                    quote:
                    "The personalized approach made all the difference. Finally, a program that actually works for my body.",
                },
                {
                    name: "David K.",
                    age: "38",
                    result: "Optimized sleep and recovery",
                    quote:
                    "My sleep quality improved dramatically, and my recovery time is now half of what it used to be.",
                },
                ].map((story, index) => (
                <Card key={index} className="bg-black border-gray-800">
                    <CardContent className="p-6 sm:p-8">
                    <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-lime-400 fill-current" />
                        ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{story.quote}"</p>
                    <div className="border-t border-gray-800 pt-4">
                        <p className="font-bold">
                        {story.name}, {story.age}
                        </p>
                        <p className="text-lime-400 text-sm">{story.result}</p>
                    </div>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
            <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                {[
                { number: "1000+", label: "Clients Transformed" },
                { number: "15+", label: "Years Average Age Reduction" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24/7", label: "Expert Support" },
                ].map((stat, index) => (
                <div key={index}>
                    <div className="text-4xl sm:text-5xl font-bold text-lime-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm sm:text-base">{stat.label}</div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Our Team Section */}
        <section id="team" className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
                OUR <span className="text-lime-400">TEAM</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                World-class experts in longevity, nutrition, and human optimization.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                {
                    name: "Dr. James Wilson",
                    title: "Chief Longevity Officer",
                    credentials: "MD, PhD in Molecular Biology",
                },
                {
                    name: "Dr. Maria Rodriguez",
                    title: "Head of Nutrition",
                    credentials: "PhD in Nutritional Science",
                },
                {
                    name: "Dr. Alex Chen",
                    title: "Exercise Physiologist",
                    credentials: "PhD in Exercise Science",
                },
                ].map((member, index) => (
                <Card key={index} className="bg-black border-gray-800">
                    <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-lime-400 mb-2">{member.title}</p>
                    <p className="text-gray-400 text-sm sm:text-base">{member.credentials}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8">
                READY TO <span className="text-lime-400">TRANSFORM</span> YOUR LIFE?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
                Join thousands of people who have already discovered the secret to aging backwards. Your journey to optimal
                health starts with a single consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg">
                SCHEDULE FREE CONSULT
                </Button>
                <Button
                variant="outline"
                className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg bg-transparent"
                >
                LEARN MORE
                </Button>
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-8 mt-8 sm:mt-12 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-lime-400" />
                <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-lime-400" />
                <span>100% Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-lime-400" />
                <span>30-Day Guarantee</span>
                </div>
            </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
            <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                <div>
                <h3 className="text-2xl font-bold mb-4">FITSCRIPT</h3>
                <p className="text-gray-400 mb-4">Revolutionizing longevity through science-based health optimization.</p>
                <div className="flex space-x-4">
                    <div className="w-8 h-8 bg-gray-700 rounded"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded"></div>
                </div>
                </div>

                <div>
                <h4 className="font-bold mb-4">SERVICES</h4>
                <ul className="space-y-2 text-gray-400">
                    <li>
                    <Link to="#" className="hover:text-lime-400">
                        Longevity Testing
                    </Link>
                    </li>
                    <li>
                    <Link to="#" className="hover:text-lime-400">
                        Nutrition Optimization
                    </Link>
                    </li>
                    <li>
                    <Link to="#" className="hover:text-lime-400">
                        Exercise Protocols
                    </Link>
                    </li>
                    <li>
                    <Link to="#" className="hover:text-lime-400">
                        Sleep Optimization
                    </Link>
                    </li>
                </ul>
                </div>

                <div>
                <h4 className="font-bold mb-4">COMPANY</h4>
                <ul className="space-y-2 text-gray-400">
                    <li>
                    <Link to="#" className="hover:text-lime-400">
                        About Us
                    </Link>
                    </li>
                    <li>
                    <Link to="#" className="hover:text-lime-400">
                        Our Team
                    </Link>
                    </li>
                    <li>
                    <Link to="#" className="hover:text-lime-400">
                        Careers
                    </Link>
                    </li>
                    <li>
                    <Link to="#" className="hover:text-lime-400">
                        Press
                    </Link>
                    </li>
                </ul>
                </div>

                <div>
                <h4 className="font-bold mb-4">CONTACT</h4>
                <ul className="space-y-2 text-gray-400">
                    <li>hello@fitscript.me</li>
                    <li>+1 (555) 123-4567</li>
                    <li>Los Angeles, CA</li>
                    <li>New York, NY</li>
                </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-4 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">© 2024 FitScript. All rights reserved.</p>
                <div className="flex space-x-4 sm:space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
                <Link to="#" className="hover:text-lime-400">
                    Privacy Policy
                </Link>
                <Link to="#" className="hover:text-lime-400">
                    Terms of Service
                </Link>
                <Link to="#" className="hover:text-lime-400">
                    Cookie Policy
                </Link>
                </div>
            </div>
            </div>
        </footer>
        </div>
    )
}
