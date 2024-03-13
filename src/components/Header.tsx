

import Image from "next/image"

import Profile from "@/assets/profile.png"
import { ItemMenu } from "./ItemMenu"

export function Header() {
    return (
        <header>
            <div className=" bg-burnt_rose min-h-4 ">
                <div className="grid grid-cols-4 p-2" >
                    <div className=" logo col-span-1 ">
                        {/*                        <Image
                        className=" w-20 rounded-full mx-auto" 
                        alt="Débora Miler - Psicológa"
                        src={Profile}
                        /> */}
                    </div>
                    <div className="debora col-span-2 text-center text-3xl bold"><h1>Débora Miler</h1>
                        <div className="italic text-sm">Psicólogia clínica</div>
                    </div>
                    <div className="social-media col-span-1 "></div>
                </div>
                <div className="menu">
                    <ul className="grid grid-cols-4  gap-3">
                        <ItemMenu
                            name="Home"
                        />
                        <ItemMenu
                            name="Sobre"
                        />
                        <ItemMenu
                            name="Atuação"
                        />
                        <ItemMenu
                            name="Contato"
                        />
                    </ul>

                </div>
            </div>
        </header>
    )
}