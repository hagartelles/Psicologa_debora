import { ReactNode } from 'react';

export type DivBackgroundProps = {
    children: ReactNode;
    minHeight: string;
}



export function DivBackground ({ children, minHeight }: DivBackgroundProps ){
    return (
        <section className={`h-${minHeight} w-full relative`}>
            <div className=" h-full">
            { children }
            </div>
        </section>
    )
}