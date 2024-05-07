import { useState, useEffect, useRef } from "react";
import { Logo } from "../common/icons";

export default function Myloader() {
    const [loader, setloader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setloader(false);
            document.body.classList.remove("overflow-hidden")

        }, 2000);
    }, []);
    return (
        <>
            <div>
                {loader ? (
                    <section
                        style={{ zIndex: "999999999" }}
                        className="bg-white top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center overflow-hidden"
                    >
                        <div className="preloader flex flex-col justify-center items-center h-screen">
                            <div className="flex gap-1 items-center animate-bounce cursor-pointer ">
                                <h2 className="text-md font-plus font-medium text-[#625DF5] ">AI</h2>
                                <Logo />
                            </div>
                        </div>
                    </section>
                ) : (
                    ""
                )}
            </div>
        </>
    )
}