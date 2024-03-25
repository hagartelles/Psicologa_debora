import Image from "next/image"
import profile from "@/../public/assets/1.png"
import { SplashArt, SplashImages } from "../../globalComponents/SplashArt"
import { DivBackground } from "@/components/globalComponents/DivBackground"

export function HeroSection() {
    return (
        <DivBackground name="Inicio" >
            <div className="w-full pt-16">
            <SplashArt way={SplashImages.splash1} />
                <div className=" w-3/4 m-auto px-2 pt-4">

                    <Image
                        className="mx-auto"
                        src={profile}
                        alt="Débora Miller - Psicologa Clínica"
                        width={190}
                    />
                    <div className="">
                        <h2 className=" text-xl text-center font-bold">Especialista em Saúde Mental </h2>
                        <p className="text-center text-xs">Te ajudo a criar uma relação saudável com você</p>
                    </div>
                    <div className="mt-1 w-full text-center ">
                        <button className="bg-burnt_rose hover:bg-misty_rose py-2 px-4 rounded-full">
                            Clique aqui
                        </button>
                    </div>
                </div>
            </div>

        </DivBackground>
    )
}