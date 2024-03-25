"use client"

import { DivBackground } from "@/components/globalComponents/DivBackground"
import {ListAtuacao} from "./ListAtuacao"
import { SplashArt, SplashImages } from "../../globalComponents/SplashArt"

export function ActionArea () {
    return (
        
        <DivBackground name="tratamento">
            <SplashArt way={SplashImages.splash2} />
            <div className="pt-24">
                <div className="w-3/4 mx-auto">
                    <h2 className="text-center text-xl font-bold m-2">Sobre a Terapia Cognitiva Comportamental
                    </h2>
                    <div className="text-center bg-burnt_rose/50 mx-auto mt-4 rounded-md ">
                        <p>
                            A Terapia Cognitiva Comportamental (ou TCC) é uma abordagem estruturada, estabelecida a partir da colaboração entre terapeuta e paciente.
                        </p>
                        <p>
                            É uma terapia focada no presente e orientada por metas e objetivos que são estabelecidos no inicio do tratamento. 
                        </p>
                        <p>
                             Não é uma terapia que se restringe ao ambiente da consulta, mas que é treinada e praticada pelo paciente na sua vida diária. 
                        </p>
                        <p>
                            O objetivo principal é trabalhar as crenças do indivíduo e como essas impactam a visão dele sobre si, os outros e o mundo.
                        </p>
                        <p>
                            É importante ressaltar que a TCC é a abordagem com mais evidencias cientificas e mais estudada atualmente.
                        </p>
                    </div>
                    <div>
                        <ListAtuacao/>
                        
                    </div>
                </div>
                

            </div>
        </DivBackground>
    )
}