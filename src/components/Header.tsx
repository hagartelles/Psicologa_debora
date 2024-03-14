

import Image from "next/image"

import Profile from "@/assets/profile.png"
import { ItemMenu } from "./ItemMenu"

export function Header() {
    return (
        <header>
            <div className=" bg-burnt_rose min-h-4 ">
                <div className="grid grid-cols-4 p-2 border-beige border-b-2" >
                    <div className=" logo col-span-1 ">
                        {/*                        <Image
                        className=" w-20 rounded-full mx-auto" 
                        alt="Débora Miler - Psicológa"
                        src={Profile}
                        /> */}
                    </div>
                    <div className="debora col-span-2 text-center"><h1 className=" text-3xl font-bold">Débora Miler</h1>
                        <div className="italic text-sm">Psicólogia clínica</div>
                    </div>
                    <div className="social-media col-span-1 "></div>
                </div>
                <div className="menu border-beige border-b-2">
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