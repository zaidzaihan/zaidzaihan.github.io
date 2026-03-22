import {Outlet} from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Layout = () => {
    return (
        <div className="w-full min-h-dvh flex flex-col bg-abyss relative selection:bg-spark selection:text-abyss">
            {/* Global Texture Overlay - Now Fixed */}
            <div className="fixed inset-0 pointer-events-none z-50 holographic-noise opacity-10" />
            
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-spark/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pulse/5 rounded-full blur-[120px]" />
            </div>

            <NavBar />
            
            <main className="relative z-10 flex-1">
                <Outlet />
            </main>
        </div>
    );
}