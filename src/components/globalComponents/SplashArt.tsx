import Image from "next/image"

type Props = {
    way:string
} 

export function SplashArt ({way}:Props){
    return (
        <Image className="-z-[1000] absolute top-32"
        src={way}
        alt="SplashArt"
        width={500}
        height={500}
    />
    )
}

export const SplashImages ={
    splash1: "/assets/9.png",
    splash2: "/assets/10.png",
    splash3: "/assets/11.png",
    splash4: "/assets/12.png",
    splash5: "/assets/13.png",
    splash6: "/assets/14.png"
}