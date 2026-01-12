// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md border-b">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-bold text-gray-800">Scott Michelon</div>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="text-gray-700 hover:text-blue-600">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/competences" className="text-gray-700 hover:text-blue-600">Compétences</Link>
                    </li>
                    <li>
                        <Link href="/projets" className="text-gray-700 hover:text-blue-600">Projets</Link>
                    </li>
                    <li>
                        <Link href="/cv" className="text-gray-700 hover:text-blue-600">CV</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
