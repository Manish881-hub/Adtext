import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
    weight: ["400", "500", "700"],
});

const sourceSerif4 = Source_Serif_4({
    subsets: ["latin"],
    variable: "--font-source-serif",
    weight: ["400", "600"],
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono", // Keeping legacy name or updating to standard
    weight: ["500"],
});

export const metadata: Metadata = {
    title: "Adstext - Contextual Ads for AI Apps",
    description: "The ad platform built for AI chatbots. Monetize your AI app without hurting user experience.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${dmSans.variable} ${sourceSerif4.variable} ${jetbrainsMono.variable} antialiased font-sans`}>
                {children}
            </body>
        </html>
    );
}
