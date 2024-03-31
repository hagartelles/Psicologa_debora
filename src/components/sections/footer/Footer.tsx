import { SvgIcon } from "@/components/globalComponents/icons";


export function Footer(){
    
    return (
        <footer className="">
            <div className="w-max mx-auto px-4 ">
                <div>
                    <SvgIcon name="logo2" width="200" height="auto"/>
                </div>
                <div className="">
                    <div id="tituloFooter" className="py-3">
                        <p>Débora Miler | Psicóloga Clínica</p>
                        <p>(CRP:05/71189)</p>
                    </div>
                    <div id="iconesFooter" className="grid grid-cols-2">
                        <div className="grid relative col-span-1 tem place-content-center">
                            <a href="#" className=" mx-4 ">
                                <SvgIcon name="instagram" width="20" height="auto" />
                            </a>
                        </div>
                        <div className="relative col-span-1">
                            <a href="#" className="grid place-content-center mx-4 ">
                                <SvgIcon name="instagram" width="20" height="auto"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-xs italic pt-4">&copy; 2024 Débora Miler. Todos os direitos reservados.</p>
                    
                </div>
            </div>
            <p className=" w-full bg-black text-white mt-3 text-xs italic text-center"><a href="https://www.linkedin.com/in/hagartelles/" className="underline">Desenvolvido por <span className="font-bold">Hagar Telles</span></a></p>         
        </footer>
    );
}
;
