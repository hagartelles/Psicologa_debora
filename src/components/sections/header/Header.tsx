"use client"

import { useEffect, useState } from 'react';
import { SvgIcon } from '@/components/globalComponents/icons';

export function Header() {
    const [menuOpen, setMenuOpen ] = useState(false);
    const [isMobile, setIsMobile] =useState(true);
    
    type IconName = "closeIcon" | "menuIcon"
    const [iconMenu, setIcon] = useState<IconName>("menuIcon");


    const openMenu = () => {
        setIsMobile(window.innerWidth > 767? false: true)
           if (isMobile){
            
            setMenuOpen(true);
            setIcon("closeIcon"); 
           
        }
    };

    const closeMenu =() => {
        setMenuOpen(false);
        setIcon("menuIcon")
      
    }


    type Props = {
        name: string
        link: string
        children?: React.ReactNode
    }

    const ItemMenu = ({ name, link }:Props) => (
        <li className=" text-2xl text-bold justify-center  md:place-items-stretch w-full bg-white md:bg-transparent hover:bg-misty_rose
        md:col-span-1 md:text-base md:text-bold lg:text-xl lg:text-bold ">
            <a href={`#${link}`} className="h-full grid place-items-center md:place-content-stretch" onClick={closeMenu}>
                {name}
            </a>
        </li>
    );

    const SocialLink = () => (
        <div id="iconesFooter" className="grid grid-cols-2">
            <div className="grid relative col-span-1">
                <a
                href="https://www.instagram.com/psideboramiler"
                className="block h-full hover:bg-misty_rose place-items-center place-content-center"
                >
                <SvgIcon name="instagram" width="30" height="auto" />
                </a>
            </div>
            <div className="grid relative col-span-1">
                <a
                href="https://www.tiktok.com/@psideboramiler?_t=8mInRBcnxl0&_r=1"
                className="block h-full hover:bg-misty_rose place-items-center place-content-center"
                >
                <SvgIcon name="tikTok" width="30" height="auto" />
                </a>
            </div>
        </div>
    )
    
    const [logoWidthState, setLogoWidthState] = useState(0);

    useEffect(() => {
        const logoWidth =()=> {
            let sizeScreen = typeof window !== 'undefined' ? window.innerWidth : 0;
            let logoW = 80
            if (sizeScreen > 574 && sizeScreen < 767 ) {
                logoW = 88  
            } else if(sizeScreen > 767 && sizeScreen < 1023 ) {
                logoW = 96
            } else if(sizeScreen > 1023 ) {
                logoW = 104
            }
            return logoW
        }

        const handleResize = () => {
            const width = logoWidth();
            setLogoWidthState(width);
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  

    return (
        <header className="relative z-[1000]">
            <div className="w-full bg-burnt_rose h-20 fixed top-0 left-0 right-0 ">
                <div className="grid grid-cols-4  md:grid-cols-12 h-20">
                <div className='col-span-1 md:col-span-2 md:pl-4 grid place-items-center'>
                        <SvgIcon name="logo2" width={logoWidthState.toString()} height='auto'/>
                    </div>
                    <div className="debora grid content-center col-span-2 md:col-span-4 mx-auto ">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">Débora Miler</h1>
                        <div className="italic text-xs md:text-base">Psicóloga Clínica
                        </div>
                    </div>
                    <div className="menu col-span-1  grid place-items-center my-auto md:col-span-6 md:place-items-start h-full">
                        { isMobile &&(<button className='md:hidden md:points-event-none' onClick={menuOpen ? closeMenu: openMenu}>
                            <SvgIcon name={iconMenu } width="36" height="auto" />
                        </button>)}

                        <ul className={`hidden md:grid md:w-full md:grid-cols-5 place-items-stretch px-4 h-full`}>
                                <ItemMenu name="Inicio" link="Inicio"/>
                                <ItemMenu name="Sobre" link="Sobre" />
                                <ItemMenu name="Tratamentos" link="tratamentos" />
                                <ItemMenu name="Duvidas" link="Duvidas" />
                                <SocialLink/>
                        </ul>
                    </div>
                </div>
                {/* TODO Acertar a animação */}
                {menuOpen && (
                    <div id='hiddenMenu' 
                    className={`absolute top-20 left-0 w-full
                    h-[calc(100vh-80px)] transition-opacity duration-100 transition-pointer-events ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                            <ul className=" h-full  grid grid-cols-1  grid-rows-5 gap-0 ">
                                <ItemMenu name="Inicio" link="Inicio"/>
                                <ItemMenu name="Sobre" link="Sobre" />
                                <ItemMenu name="Tratamentos" link="tratamentos" />
                                <ItemMenu name="Duvidas" link="Duvidas" />
                            </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
