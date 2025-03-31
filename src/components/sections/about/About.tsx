import { DivBackground } from "@/components/globalComponents/DivBackground"
import { SplashArt, SplashImages } from "../../globalComponents/SplashArt"
import Image from "next/image"
import sidePerfil from "@/../public/assets/2.png"
import sobreMim  from "@/components/enum/textos"
import SobreMimSection from "./AboutMe"



export function About() {
    return (

        <DivBackground name="Sobre">
            <SplashArt way={SplashImages.splash3} />
            <div className="pt-24">
                <div className="w-3/4 mx-auto">
                    <div className="grid grid-cols-6 xl:grid-cols-12 gap-0 mx-auto ">
                        <div className="col-span-3 xl:col-span-6 overflow-visible">
                            <Image
                                src={sidePerfil}
                                alt="Psicologa Débora Perfil"
                                width={600}
                                height={1200}            
                            />
                        </div>
                        <div className="col-span-3 xl:col-span-6 text-xs grid place-content-center">
                            <h2 className="text-3xl font-bold lg:text-5xl    ">Débora Miler </h2>
                            <p className=" text-base md:text-xl ">Psicóloga clínica (CRP:05/71189)</p>
                        </div>
                        <SobreMimSection titulo={sobreMim.quemSouEu.titulo} conteudo={sobreMim.quemSouEu.conteudo} />
                        <SobreMimSection titulo={sobreMim.oQueFaco.titulo} conteudo={sobreMim.oQueFaco.conteudo} />
                        <SobreMimSection titulo={sobreMim.comoFaco.titulo} conteudo={sobreMim.comoFaco.conteudo} />
                    </div>

                </div>
            </div>
        </DivBackground>
    )
}