import { DivBackground } from "@/components/DivBackground"
import ListAtuacao from "./ListAtuacao"

export function Section () {
    return (
        <DivBackground>
            <div className="pt-10">
                <div className="w-3/4 bg-burnt_rose mx-auto rounded-md ">
                    <h2 className="text-center text-xl font-bold m-2">Psicologa com Atuação
                    </h2>
                    <div className="text-center">
                     <ListAtuacao/>
                    </div>
                    
                </div>
            </div>
        </DivBackground>
    )
}