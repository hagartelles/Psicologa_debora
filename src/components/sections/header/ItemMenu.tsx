
type Props = {
    name: string
    link:string
}

export function ItemMenu({name,link}:Props){
    return (
        <li className=" text-sm col-span-1 justify-center w-full">
            <a href={`#${link}`} >
                <button className=" hover:bg-misty_rose w-full h-full">
                    {name}
                </button>
            </a>
        </li>
    )
    
}