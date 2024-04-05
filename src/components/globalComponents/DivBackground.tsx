import { ReactNode } from 'react';

export type DivBackgroundProps = {
    children: ReactNode;
    name: string;
}



export function DivBackground ({ children, name }: DivBackgroundProps ){
    return (
        <section className="mx-auto min-h-[480px] w-full max-w-5xl relative" id={name}>
            <div className=" ">
            { children }
            </div>
        </section>
    )
}