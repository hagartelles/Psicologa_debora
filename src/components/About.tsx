import { DivBackground } from "@/components/DivBackground"
import { SplashArt, SplashImages } from "./SplashArt"
import Image from "next/image"
import perfil from "../../public/assets/perfil.png"

export function About () {
    return (
        
        <DivBackground minHeight="500">
            <SplashArt way={SplashImages.splash3} />
            <div className=" pt-12">
                <div className="w-3/4 mx-auto">
                    <h2 className="text-center text-xl font-bold m-2">Sobre 
                    </h2>
                    <div className="grid grid-cols-3 gap-0 text-center  mx-auto rounded-md relative">
                    <div className="absolute top-0 -left-6">
                        <Image className=""
                        src={perfil}
                        alt="Psicologa Débora Perfil"
                        width={180}
                        height={577}
                        style={{
                            overflow: "visible"
                        }}
                        />
                    </div>
                    <div></div>
                    <div className=" col-span-2 text-cente text-xs p-4 mt-10">
                        <p>
                            Me chamo <span className=" font-bold">Débora Miler dos Santos</span>, sou de São Gonçalo, Rio de Janeiro e tenho 28 anos.
                        </p>
                        <p> 
                        <span className=" font-bold">Sou psicóloga clínica </span>formada pela faculdade Estácio, atuando com adolescentes (a partir dos 12 anos) e adultos.
                        </p>
                        <p className=" hidden">
                            Minha jornada na psicologia começou aos 14 anos, quando fui diagnosticada com um transtorno alimentar. Após algumas recaídas, encontrei na psicologia o caminho para a recuperação. Hoje, tenho certeza de que fiz a melhor escolha da minha vida e amo minha profissão.
                        </p>
                    </div>
                    
                    </div>
                    
                </div>
            </div>
        </DivBackground>
    )
}