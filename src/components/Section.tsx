import Image from "next/image"
import background from "@/assets/freepik3.jpg"

export function Section (){
    return (
        <section className=" w-full h-screen">
            <div className="h-5/6 bg-bg_hero bg-cover bg-no-repeat  relative">
                <div className="w-full pt-6 bg-zinc-700 bg-opacity-25">
                    <h1 className=" text-4xl text-center font-bold">Lorem ipsum dolor </h1>
                    <div className="w-1/2 m-auto">
                        <p className=" p-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat dicta soluta fugiat eum! Nobis laboriosam libero soluta, vitae nulla temporibus, et unde facilis voluptatem, quis pariatur deleniti laudantium suscipit?</p>
                    </div>
                </div>
                <div className="w-full absolute inset-x-0 bottom-10 text-center">
                    <button className="bg-burnt_rose hover:bg-misty_rose py-2 px-4 rounded-full">
                    Clique aqui
                    </button>
                </div>
            </div>

        </section>
    )
}