import {ReactNode} from "react";
import Image from "next/image";
import {auth} from "@/auth"
import {redirect} from "next/navigation";

const Layout = ({children}: {children: ReactNode}) => {
    // const session = await auth()
    //
    // if (session) redirect("/profile")

    return (
        <main className="relative flex flex-col-reverse text-light-100 sm:flex-row">

            <section className="bg-white">
                <div className="my-auto flex h-full min-h-screen flex-1 items-center bg-pattern bg-cover bg-top bg-dark-100 px-5 py-10">
                    <div className="flex flex-row gap-3">
                        <h1 className="text-2xl font-semibold text-white">Blueberry's online weed store</h1>
                    </div>
                    <div>{children}</div>
                </div>
            </section>
            <section>
                <Image
                    src="https://www.cannaconnection.com/img/cms/macro-shot-of-flowering-cannabis-bud-with-a-purple-2023-08-19-05-37-40-utcPurpleHaze.jpeg"
                    alt="CannaconnectionImage"
                    width={1000}
                    height={1000}
                    layout="responsive"
                />
            </section>
        </main>
    )
}