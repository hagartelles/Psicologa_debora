"use client"

import { useState } from 'react';
import { SvgIcon } from '@/components/globalComponents/icons';

export function Header() {
    const [menuOpen, setMenuOpen ] = useState(false);
    
    type IconName = "closeIcon" | "menuIcon"
    const [iconMenu, setIcon] = useState<IconName>("menuIcon");

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setIcon(menuOpen ? "menuIcon": "closeIcon"); 
    };


    type Props = {
        name: string
        link: string
    }

    const ItemMenu = ({ name, link }:Props) => (
        <li className=" text-2xl text-bold justify-center w-full bg-burnt_rose hover:bg-misty_rose border-t-2">
            <a href={`#${link}`} className="h-full w-full grid place-items-center " onClick={toggleMenu}>
                {name}
            </a>
        </li>
    );



    return (
        <header className="relative z-[1000]">
            <div className="w-full bg-burnt_rose h-24 fixed top-0 left-0 right-0">
                <div className="grid grid-cols-4 px-6 my-2 pt-3">
                    <div className='col-span-1'>
                        <SvgIcon name="logo2" width='72' height='auto'/>
                    </div>
                    <div className="debora col-span-2 ">
                        <h1 className="text-3xl font-bold">Débora Miler</h1>
                        <div className="italic text-xs">Psicóloga Clínica</div>
                    </div>
                    <div className="btn-menu col-span-1 grid place-items-end my-auto">
                        <button className='pr-4' onClick={toggleMenu}>
                            <SvgIcon name={iconMenu } width="36" height="auto" />
                        </button>
                    </div>
                </div>
                {/* TODO Acertar a animação */}
                {menuOpen && (
                    <div id='hiddenMenu' 
                    className={`absolute top-24 left-0 w-full transition-opacity duration-100 transition-pointer-events ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                            <ul className=" h-[calc(100vh-96px)]  grid grid-cols-1  grid-rows-5 gap-0 ">
                                <ItemMenu name="Inicio" link="Inicio" />
                                <ItemMenu name="Sobre" link="Sobre" />
                                <ItemMenu name="tratamento" link="tratamento" />
                                <ItemMenu name="FAQ" link="FAQ" />
                                <ItemMenu name="Contato" link="Contato" />
                            </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
