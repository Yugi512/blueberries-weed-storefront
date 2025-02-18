import { ReactNode } from "react";

const Layout = async ({children}: {children:ReactNode}) => {
    // const session = await auth()
    // if(!session) redirect("/")
    return (
        <main>
            <div className="bg-blue-950">
                <div>{children}</div>
            </div>
        </main>
    )
}

export default Layout;