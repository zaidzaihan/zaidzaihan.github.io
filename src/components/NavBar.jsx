export const NavBar = () => {
    return (
        <div className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto lg:px-4 px-15 flex items-center justify-between">
                <div className="flex items-center h-14 sm:h-16 md:h-20 space-x-1 cursor-pointer">
                    <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                    <span className="lg:text-2xl font-bold">
                        <span className="font-mont">くじら</span>
                    </span>
                </div>
                <div className="flex items-center space-x-6 font-mono">
                    <a href="#about-me">About Me</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    )
}