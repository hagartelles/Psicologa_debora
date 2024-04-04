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
    }

    const ItemMenu = ({ name, link }:Props) => (
        <li className=" text-2xl text-bold justify-center w-full  bg-burnt_rose/50 hover:bg-misty_rose/50
        md:col-span-1 md:text-base md:text-bold lg:text-xl lg:text-bold md:h-full ">
            <a href={`#${link}`} className="h-full w-full grid place-items-center " onClick={closeMenu}>
                {name}
            </a>
        </li>
    );
    
    const logoWidth =()=> {
        let sizeScreen = typeof window !== 'undefined' ? window.innerWidth : 0;
        let logoW = 80

        if (sizeScreen > 574 && sizeScreen < 767 ) {
            logoW = 98
        } else if(sizeScreen > 767 && sizeScreen < 1023 ) {
            logoW = 106
        } else if(sizeScreen > 1023 ) {
            logoW = 120
        }
        return logoW
    }

    const [logoWidthState, setLogoWidthState] = useState(logoWidth());

    // Função para atualizar a largura do logotipo com base no tamanho da tela
    const updateLogoWidth = () => {
        setLogoWidthState(logoWidth());
    };

    // Efeito para adicionar o ouvinte do evento de redimensionamento da janela
    useEffect(() => {
        const handleResize = () => {
            updateLogoWidth();
        };

        window.addEventListener('resize', handleResize);

        // Remova o ouvinte do evento de redimensionamento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });


    return (
        <header className="relative z-[1000]">
            <div className="w-full bg-burnt_rose h-20 fixed top-0 left-0 right-0">
                <div className="grid grid-cols-4   md:grid-cols-12">
                    <div className='col-span-1 md:col-span-2 md:pl-4 grid place-items-center'>
                        <SvgIcon name="logo2" width={logoWidthState.toString()} height='auto'/>
                    </div>
                    <div className="debora grid content-center col-span-2 md:col-span-4 mx-auto ">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">Débora Miler</h1>
                        <div className="italic text-xs md:text-base">Psicóloga Clínica
                        </div>
                    </div>
                    <div className="menu col-span-1  grid place-items-center my-auto md:col-span-6 md:place-items-start">
                        { isMobile &&(<button className='md:hidden md:points-event-none' onClick={menuOpen ? closeMenu: openMenu}>
                            <SvgIcon name={iconMenu } width="36" height="auto" />
                        </button>)}

                        <ul className={`hidden md:grid md:w-full md:grid-cols-5 place-content-around pr-4`}>
                                <ItemMenu name="Inicio" link="Inicio"/>
                                <ItemMenu name="Sobre" link="Sobre" />
                                <ItemMenu name="TCC" link="tratamento" />
                                <ItemMenu name="Duvidas" link="FAQ" />
                                <ItemMenu name="Contato" link="Contato" />
                        </ul>
                    </div>
                </div>
                {/* TODO Acertar a animação */}
                {menuOpen && (
                    <div id='hiddenMenu' 
                    className={`absolute top-20 left-0 w-full transition-opacity duration-100 transition-pointer-events ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                            <ul className="   grid grid-cols-1  grid-rows-5 gap-0 ">
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
