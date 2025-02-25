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
                            <h2 className=" text-xl md:text-2xl lg:text-2xl text-center font-bold">Comer não é um problema, mas a sua relação com a comida pode ser</h2>
                        </div>
                    </div>
                </div>
            </div>

        </DivBackground>
    )
}