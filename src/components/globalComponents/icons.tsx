import Image from "next/image"

import logo1 from "@/../public/assets/icons/logo1.png"
import logo2 from "@/../public/assets/icons/logo2.png"
import ansiedade from "@/../public/assets/icons/ansiedade.png"
import autoestima from "@/../public/assets/icons/autoestima.png"
import contato from "@/../public/assets/icons/contato.png"
import closeIcon from "@/../public/assets/icons/close.png"
import dependencia from "@/../public/assets/icons/dependenciaQuimica.png"
import depressao from "@/../public/assets/icons/depressao.png"
import facebook from "@/../public/assets/icons/facebook.png"
import faq from "@/../public/assets/icons/FAQ.png"
import home from "@/../public/assets/icons/home.png"
import instagram from "@/../public/assets/icons/instagram.png"
import menuIcon from "@/../public/assets/icons/menu.png"
import relacionamentos from "@/../public/assets/icons/relacionamentos.png"
import sobre from "@/../public/assets/icons/sobre.png"
import sobre2 from "@/../public/assets/icons/sobre2.png"
import tAlimentar from "@/../public/assets/icons/transtornoAlimentar.png"
import tHumor from "@/../public/assets/icons/transtornoDeHumor.png"
import tPersonalidade from "@/../public/assets/icons/transtornoPersonalidade.png"
import whatsApp from "@/../public/assets/icons/whatsApp.png"

export const svgs = {
    logo1: logo1,
    logo2:logo2,
    ansiedade: ansiedade,
    autoestima: autoestima,
    contato: contato,
    dependencia: dependencia,
    depressao: depressao,
    facebook: facebook,
    faq: faq,
    home: home,
    instagram: instagram,
    relacionamentos: relacionamentos,
    sobre: sobre,
    sobre2: sobre2,
    tAlimentar: tAlimentar,
    tHumor: tHumor,
    tPersonalidade: tPersonalidade,
    whatsApp: whatsApp,
    menuIcon: menuIcon,
    closeIcon: closeIcon
  };

type IconProps = {
    name: keyof typeof svgs;
    width:string;
    height:string;
}

export function SvgIcon({ name, width, height }: IconProps): JSX.Element {
    return (
      <Image
        className=""
        src={svgs[name]} 
        alt="Descrição do Ícone"
        width={parseInt(width)} 
        height={parseInt(height)}
      />
    );
  }
