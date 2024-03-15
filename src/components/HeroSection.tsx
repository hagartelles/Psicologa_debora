import Image from "next/image"
import profile from "@/assets/profile-removebg-preview.png"
import { DivBackground } from "@/components/DivBackground"

export function HeroSection() {
    return (
        <DivBackground >
            <div className="w-full">

                <div className="grid grid-cols-1 w-3/4 m-auto px-2  pt-4">
                    <Image
                        src={profile}
                        alt="Débora Miller - Psicologa Clínica"
                    />
                    <div className="bg-zinc-700 bg-opacity-25 rounded-b-md">
                        <h2 className=" text-xl text-center font-bold">Especialista em Saúde Mental </h2>
                        <p className="text-center text-xs">Descubra um caminho para a paz interior e o bem-estar</p>
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