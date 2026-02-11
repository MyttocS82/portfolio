'use client';

import Link from 'next/link';
import {useState} from 'react';
import {usePathname} from 'next/navigation';
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
    {href: '/', label: 'Accueil'},
    {href: '/competences', label: 'Compétences'},
    {href: '/projets', label: 'Projets'},
    {href: '/cv', label: 'CV'},
    {href: '/contact', label: 'Contact'},
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-300 dark:bg-slate-700 dark:border-gray-700">
            <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo / Nom */}
                <Link href="/" className="font-bold text-lg text-blue-600">
                    Michelon Scott
                </Link>

                {/* Desktop menu */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-sm font-medium transition
                  ${
                                    pathname === link.href
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400'
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ThemeToggle/>

                {/* Mobile button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-700 focus:outline-none"
                    aria-label="Ouvrir le menu"
                >
                    ☰
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-white border-t">
                    <ul className="flex flex-col px-4 py-4 space-y-3">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`block font-medium
                    ${
                                        pathname === link.href
                                            ? 'text-blue-600'
                                            : 'text-gray-700'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
