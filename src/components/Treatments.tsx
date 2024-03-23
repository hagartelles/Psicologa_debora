import { DivBackground } from "@/components/DivBackground"
import {ListAtuacao, ListTratamento} from "./ListAtuacao"
import { SplashArt, SplashImages } from "./SplashArt"

export function Treatments () {
    return (
        
        <DivBackground name="vazio">
            <div className="w-full overflow-x-hidden">
                <SplashArt way={SplashImages.splash4} />
                <div className=" pt-28">
                    <div className="w-3/4 mx-auto mt-4">
                            <h2 className="text-center text-xl font-bold m-2">Tipos de Tratamento
                            </h2>
                            <div className="text-center bg-burnt_rose mx-auto rounded-md ">
                                <ListTratamento/>
                            </div>
                        </div>        
                </div>
            </div>
        </DivBackground>
    )
}