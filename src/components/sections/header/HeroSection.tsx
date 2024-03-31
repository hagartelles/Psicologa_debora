import Image from "next/image"
import profile from "@/../public/assets/1.png"
import { SplashArt, SplashImages } from "../../globalComponents/SplashArt"
import { DivBackground } from "@/components/globalComponents/DivBackground"

export function HeroSection() {
    return (
        <DivBackground name="Inicio" >
            <div className="w-full pt-32">
            <SplashArt way={SplashImages.splash1} />
                <div className="grid grid-cols-1 gap-4 w-3/4 m-auto px-2 pt-4">
                    <Image
                        className="mx-auto col-span-1"
                        src={profile}
                        alt="Débora Miller - Psicologa Clínica"
                        width={600}
                        height={800}
                    />
                    <div className="">
                    <div className="grid grid-rows-2 gap-3">
                        <h2 className=" text-2xl text-center font-bold">Especialista em Saúde Mental </h2>
                        <p className="text-center text-md">Te ajudo a criar uma relação saudável com você</p>
                    </div>
                    <div className="mt-2 w-full text-center ">
                        <button className="bg-burnt_rose hover:bg-misty_rose py-2 px-4 rounded">
                            Clique aqui
                        </button>
                    </div>
                    </div>
                </div>
            </div>

        </DivBackground>
    )
}