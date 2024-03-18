import { DivBackground } from "@/components/DivBackground"
import {ListAtuacao, ListTratamento} from "./ListAtuacao"
import { SplashArt, SplashImages } from "./SplashArt"

export function ActionArea () {
    return (
        
        <DivBackground minHeight="600">
            <SplashArt way={SplashImages.splash2} />
            <div className=" pt-28">
                <div className="w-3/4 mx-auto">
                    <h2 className="text-center text-xl font-bold m-2">Psicologa com Atuação
                    </h2>
                    <div className="text-center bg-burnt_rose mx-auto mt-4 rounded-md ">
                     <ListAtuacao/>
                    </div>
                </div>
                

            </div>
        </DivBackground>
    )
}