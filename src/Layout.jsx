import {Link, Outlet} from "react-router";

function Layout() {
    return (
        <>
            <div>
            <nav className="fixed top-0 left-0 w-full bg-[#34353A] text-center p-5 shadow-lg z-50">
                <Link to="/" className="p-2 text-white hover:text-[#FFA052]">Home</Link>
                <Link to="/about" className="p-2 text-white hover:text-[#FFA052]">About</Link>
                <Link to="/portfolio" className="p-2 text-white hover:text-[#FFA052]">Portfolio</Link>
                <Link to="/contact" className="p-2 text-white hover:text-[#FFA052]">Contact</Link>
            </nav>

            <main className="bg-[#34353A]">
                <Outlet />
            </main>
            </div>
        </>
    );
}

export default Layout;
