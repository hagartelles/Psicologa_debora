import { ReactNode } from 'react';

export type DivBackgroundProps = {
  children: ReactNode;
  name: string;
  extraClass?: string; 
};

export function DivBackground({ children, name, extraClass }: DivBackgroundProps) {
  return (
    <section className={`mx-auto min-h-[480px] w-full max-w-5xl relative ${extraClass || ''}`} id={name}>
      <div>{children}</div>
    </section>
  );
}
