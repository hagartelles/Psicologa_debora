
type Props = {
    name: string
}

export function ItemMenu({name}:Props){
    return (
        <li className=" text-sm col-span-1 justify-center w-full">
            <button className=" hover:bg-misty_rose w-full h-full">
              {name}
            </button>
        </li>
    )
    
}