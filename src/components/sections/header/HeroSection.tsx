import Image from "next/image"
import profile from "@/../public/assets/1.png"
import { SplashArt, SplashImages } from "../../globalComponents/SplashArt"
import { DivBackground } from "@/components/globalComponents/DivBackground"

export function HeroSection() {

    
    return (

        <DivBackground name="Inicio" >
            <div className="w-full pt-24 h-dvh">
            <SplashArt way={SplashImages.splash1} />
                <div className="grid grid-cols-1 gap-3 w-3/4 m-auto px-2 ">
                    <div className="mx-auto col-span-1 max-w-96 lg:max-w-md ">
                        <Image
                            className=" "
                            src={profile}
                            alt="Débora Miller - Psicologa Clínica"
                            width={600}
                            
                        />
                    </div>
                    <div className="">
                    <div className="grid grid-rows-2 gap-1">
                        <h2 className=" text-xl md:text-2xl lg:text-4xl text-center font-bold">Especialista em Saúde Mental </h2>
                        <p className="text-center text-base lg:text-xl">psicologia baseada em evidências</p>
                    </div>
                    <div className="mt-2 w-full text-center text-base md:text-xl lg:text-2xl">
                        <a href="#Contato">
                            <button className="bg-burnt_rose hover:border-1 py-2 px-4 rounded-md">
                                Agende uma Consulta
                            </button>
                        </a>
                    </div>
                    </div>
                </div>
            </div>

        </DivBackground>
    )
}