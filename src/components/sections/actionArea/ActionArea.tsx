"use client"

import { DivBackground } from "@/components/globalComponents/DivBackground"
import CardWithDialog from "./ListAtuacao"
import { SplashArt, SplashImages } from "../../globalComponents/SplashArt"

export function ActionArea () {
    return (
        
        <DivBackground name="tratamento">
            <SplashArt way={SplashImages.splash2} />
            <div className="pt-24">
                <div className="w-3/4 mx-auto">
                    <h2 className="text-center text-3xl lg:text-5xl font-bold m-2 mb-8 ">Sobre a Terapia Cognitiva Comportamental
                    </h2>
                    <div className=" text-base md:text-xl  mx-auto mt-4 px-4">
                        <p className="pb-2">
                            A Terapia Cognitiva Comportamental (ou TCC) é uma abordagem estruturada, estabelecida a partir da colaboração entre terapeuta e paciente.
                        </p>
                        <p className="pb-2">
                            É uma terapia focada no presente e orientada por metas e objetivos que são estabelecidos no inicio do tratamento. 
                        </p>
                        <p className="pb-2">
                             Não é uma terapia que se restringe ao ambiente da consulta, mas que é treinada e praticada pelo paciente na sua vida diária. 
                        </p>
                        <p className="pb-2">
                            O objetivo principal é trabalhar as crenças do indivíduo e como essas impactam a visão dele sobre si, os outros e o mundo.
                        </p>
                        <p className="pb-2">
                            É importante ressaltar que a TCC é a abordagem com mais evidencias cientificas e mais estudada atualmente.
                        </p>
                    </div>
                    <div className="w-full text-center pt-10">
                        <CardWithDialog/>
                        
                    </div>
                </div>
                

            </div>
        </DivBackground>
    )
}