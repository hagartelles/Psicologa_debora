"use client"

import { useState } from 'react';
import { SvgIcon } from '@/components/globalComponents/icons';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    type Props = {
        name: string
        link: string
    }

    const ItemMenu = ({ name, link }:Props) => (
        <li className=" text-3xl justify-center w-full hover:bg-misty_rose border-t-2">
            <a href={`#${link}`} className=" grid w-full h-full place-items-center" onClick={toggleMenu}>
                {name}
            </a>
        </li>
    );



    return (
        <header className="relative z-[1000]">
            <div className="w-full bg-burnt_rose min-h-4 fixed top-0 left-0 right-0">
                <div className="grid grid-cols-3 px-10 my-2 border-beige border-b-2">
                    <div className="debora col-span-2 ">
                        <h1 className="text-3xl font-bold">Débora Miler</h1>
                        <div className="italic text-sm">Psicóloga Clínica</div>
                    </div>
                    <div className="btn-menu col-span-1 grid place-items-end my-auto">
                        <button onClick={toggleMenu}>
                            <SvgIcon name="menuIcon" width="40" height="auto" />
                        </button>
                    </div>
                </div>
                {menuOpen && (
                    <div id='hiddenMenu' 
                    className={`transition-all duration-500 absolute top-0 left-0 w-full bg-burnt_rose h-screen ${menuOpen ? '' : 'opacity-0 pointer-events-none'}`}>
                        <div className="absolute right-3 top-3 ">
                            <button onClick={toggleMenu}>
                                <SvgIcon name="closeIcon" width="30" height="auto" />
                            </button>
                        </div>
                        <div className="menu ">
                            <ul className=" h-screen grid grid-cols-1  grid-rows-5 gap-0 ">
                                <ItemMenu name="Inicio" link="Inicio" />
                                <ItemMenu name="Sobre" link="Sobre" />
                                <ItemMenu name="tratamento" link="tratamento" />
                                <ItemMenu name="FAQ" link="FAQ" />
                                <ItemMenu name="Contato" link="Contato" />
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
