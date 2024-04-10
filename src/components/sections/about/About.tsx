import { DivBackground } from "@/components/globalComponents/DivBackground"
import { SplashArt, SplashImages } from "../../globalComponents/SplashArt"
import Image from "next/image"
import sidePerfil from "@/../public/assets/2.png"



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
                        <div className=" col-span-6 xl:col-span-12 rounded-md p-4 text-lg md:text-xl  ">
                            <p className="pt-3">
                                Me chamo <span className=" font-bold">Débora Miler dos Santos</span>, sou de São Gonçalo, Rio de Janeiro e tenho 28 anos.
                            </p>
                            <p className="pt-3">
                                Sou graduada pela faculdade Estácio,<span className=" font-bold"> atuo com adolescentes (a partir dos 12 anos) e adultos.</span>
                            </p>
                            <p className="pt-3">
                                Minha jornada na psicologia começou aos 14 anos, quando fui diagnosticada com um transtorno alimentar.
                            </p>
                            <p className="pt-3">
                                Após algumas recaídas, encontrei na psicologia o caminho para a recuperação.
                            </p>
                            <p className="pt-3">
                                Hoje, tenho certeza de que fiz a melhor escolha da minha vida e amo minha profissão.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </DivBackground>
    )
}