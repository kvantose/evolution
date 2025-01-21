import "./Header.scss"
import 'primeicons/primeicons.css';
import { useState } from "react";
import { Sidebar } from 'primereact/sidebar';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header>
                <div className="flex flex-row w-full justify-between items-center p-5 header">
                    <a href="/">О ПРОЕКТЕ</a>
                    <a href="/">АРЕНДА</a>
                    <div className="logo">
                        <p>| ЭВОЛЮЦИЯ |</p>
                    </div>
                    <a href="/">ОФИСЫ</a>
                    <a href="/">+7 (499) 999-99-99</a>
                </div>

                <div className="mobile">

                    <div className="flex flex-row w-full justify-between items-center p-5">
                        <div className="logo">
                            <p>| ЭВОЛЮЦИЯ |</p>
                        </div>
                        <i className="pi pi-align-justify" onClick={() => setMenuOpen(!menuOpen)}></i>

                        {menuOpen && (
                            <Sidebar visible={menuOpen} onHide={() => setMenuOpen(false)} position="right" className="sidebar">
                                <div className="flex flex-col gap-5">
                                <a href="/">О ПРОЕКТЕ</a>
                                <a href="/">АРЕНДА</a>
                                <a href="/">ОФИСЫ</a>
                                <a href="/">+7 (499) 999-99-99</a>
                                </div>
                            </Sidebar>
                        )}
                    </div>
                </div>
            </header>
            <div className="w-full h-[1px] bg-gray"></div>
        </>
    )
}