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
                        <div className=" col-span-6 xl:col-span-12 rounded-md p-4 text-base md:text-xl  ">
                            <p className="pt-3">
                                Me chamo <span className=" font-bold">Débora Miler dos Santos</span>, sou de São Gonçalo, Rio de Janeiro e tenho 28 anos.
                            </p>
                            <p className="pt-3">
                                Me formei na Universidade Estácio de Sá (UNESA) em 2022 e durante esses dois anos me dediquei a estudar para além do que aprendi na faculdade.
                            </p>
                            <p className="pt-3">
                                Sigo me aprimorando e buscando os melhores tratamentos baseados em evidências
                            </p>
                            <p className="pt-3">
                                Sou especialista em saúde mental, estou me especializando em Terapia Cognitivo comportamental e tenho formação em psicopatologia e obesidade e emagrecimento.
                            </p>
                            <p className="pt-3">
                                Hoje atuo atendendo de forma online adultos e adolescentes.
                            </p>
                            <p className="pt-3">
                                Conheci a psicologia na posição de paciente aos 14 anos, quando fui diagnosticada com um transtorno alimentar
                            </p>
                            <p className="pt-3">
                                Me apaixonei pela profissão conforme minha recuperação foi acontecendo e tive vontade de estar do outro lado
                            </p>
                            <p className="pt-3">
                                Entretanto, o lugar de paciente me trouxe o receio quanto a minha capacidade de ser uma boa profissional e essa vontade ficou adormecida.
                            </p>
                            <p className="pt-3">
                                Quando terminei a escola comecei um outro curso, onde me decepcionei bastante.
                            </p>
                            <p className="pt-3">
                                Tranquei a faculdade e depois de um ano parada pensando e sempre consumindo livros e conteúdos, resolvi me dar a chance de cursar psicologia.
                            </p>
                            <p className="pt-3">
                                Me apaixonei pelo curso, pela profissão e todo dia sei que escolhi certo.
                            </p>                           
                        </div>
                    </div>

                </div>
            </div>
        </DivBackground>
    )
}