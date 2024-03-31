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
                    <div className="grid grid-cols-5 gap-0 mx-auto ">
                        <div className="col-span-2 overflow-visible">
                            <Image
                                src={sidePerfil}
                                alt="Psicologa Débora Perfil"
                                width={600}
                                height={1200}            
                            />
                        </div>
                        <div className="col-span-3 text-xs grid place-content-center">
                            <h2 className="text-3xl font-bold">Débora Miler </h2>
                            <p>Psicóloga clínica (CRP:05/71189)</p>
                        </div>
                        <div className=" col-span-5 rounded-md p-4">
                            <p>
                                Me chamo <span className=" font-bold">Débora Miler dos Santos</span>, sou de São Gonçalo, Rio de Janeiro e tenho 28 anos.
                            </p>
                            <p>
                                Sou graduada pela faculdade Estácio,<span className=" font-bold"> atuo com adolescentes (a partir dos 12 anos) e adultos.</span>
                            </p>
                            <p className="pt-3">
                                Minha jornada na psicologia começou aos 14 anos, quando fui diagnosticada com um transtorno alimentar.
                            </p>
                            <p>
                                Após algumas recaídas, encontrei na psicologia o caminho para a recuperação.
                            </p>
                            <p>
                                Hoje, tenho certeza de que fiz a melhor escolha da minha vida e amo minha profissão.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </DivBackground>
    )
}