import { ReactNode } from 'react';

export function DivBackground ({ children }:{ children:ReactNode} ){
    return (
        <section className=" w-full relative">
            <div className="bg-beige">
            { children }
            </div>
        </section>
    )
}