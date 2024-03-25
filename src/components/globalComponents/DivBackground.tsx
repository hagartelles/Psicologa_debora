import { ReactNode } from 'react';

export type DivBackgroundProps = {
    children: ReactNode;
    name: string;
}



export function DivBackground ({ children, name }: DivBackgroundProps ){
    return (
        <section className=" min-h-[480px] w-full relative" id={name}>
            <div className=" h-full">
            { children }
            </div>
        </section>
    )
}