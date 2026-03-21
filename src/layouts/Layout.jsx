import {Outlet} from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Layout = () => {
    return (
        <div className="w-full min-h-dvh flex flex-col bg-[#FAFAFA]">
            <NavBar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}