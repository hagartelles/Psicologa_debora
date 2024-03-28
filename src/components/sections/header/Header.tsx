import Image from "next/image"
import Link from "next/link"
import { ItemMenu } from "./ItemMenu"




export function Header() {
    return (
        <header className=" relative z-[1000]">
            <div className="w-full bg-burnt_rose min-h-4 fixed top-0 left-0 right-0">
                <div className="grid grid-cols-3 p-2 border-beige border-b-2" >
                    <div className="debora col-span-2 px-4 ">
                        <h1 className=" text-3xl font-bold">Débora Miler</h1>
                        <div className="italic text-sm">Psicóloga Clínica</div>
                    </div>
                    <div className="social-media col-span-1 ">
                    </div>
                </div>
                <div className="menu border-beige border-b-2">
                    <ul className="grid grid-cols-5  gap-3">
                        
                        <ItemMenu
                            name="Inicio"
                            link="Inicio"
                        />
                        
                        <ItemMenu
                            name="Sobre"
                            link="Sobre"
                        />
                        <ItemMenu
                            name="tratamento"
                            link="tratamento"
                        />
                        <ItemMenu
                            name="FAQ"
                            link="FAQ"
                        />
                        <ItemMenu
                            name="Contato"
                            link="Contato"
                        />
                    </ul>

                </div>
            </div>
        </header>
    )
}