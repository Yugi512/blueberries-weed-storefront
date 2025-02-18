import type { Metadata } from "next";
import {ReactNode} from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Blueberries Weed Store",
    description: "Mock cannabis store, its just a template and the payment and authorization will be added soon, the app will use stripe for payment processing. It will be configured for retail sales but incase this is used for a actual cannabis store then there must be a license to sell cannabis to collect taxes on it so like I would need it to change and get approval from stripe to host this kind of website",
};

const RootLayout = async ({children}: {children: ReactNode}) => {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}

export default RootLayout;
