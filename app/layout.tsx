import './globals.css';
import {ReactNode} from 'react';
import type {Metadata} from "next";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'Portfolio Michelon Scott',
    description: 'Portfolio personnel de Michelon Scott',
    verification: {google: 'Gtpd_DIHiYQ4PCB2_yT2J1wLGpaTzO5cWHQiGb17Xrg'},
    icons: {icon: '/favicon.ico'},
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="fr">
        <body className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar/>
        <main className="min-h-screen">
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
