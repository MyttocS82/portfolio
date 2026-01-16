import type {Metadata} from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
    title: 'Contact | Portfolio Michelon Scott',
    description:
        'Contacter Michelon Scott – Étudiant en BUT Informatique, spécialisation données, BI et IA',
};

export default function ContactPage() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
            <header className="text-center space-y-4">
                <h1 className="text-3xl font-bold">Contact</h1>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Vous pouvez me contacter pour une opportunité de stage, d’alternance ou pour discuter d’un projet en
                    lien avec les données, la Business Intelligence ou l’intelligence artificielle.
                </p>
            </header>

            {/* Infos de contact */}
            <section className="grid gap-6 md:grid-cols-3 text-center">
                <div className="bg-white border rounded-lg p-6 space-y-2 transition-all duration-300 hover:shadow-xl">
                    <h2 className="font-semibold">Email</h2>
                    <a href="mailto:scottmichelon@gmail.com" className="text-blue-600 hover:underline">
                        scottmichelon@gmail.com
                    </a>
                </div>
                <div className="bg-white border rounded-lg p-6 space-y-2 transition-all duration-300 hover:shadow-xl">
                    <h2 className="font-semibold">LinkedIn</h2>
                    <a href="https://www.linkedin.com/in/michelon-scott-dev/" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:underline">
                        Profil LinkedIn
                    </a>
                </div>
                <div className="bg-white border rounded-lg p-6 space-y-2 transition-all duration-300 hover:shadow-xl">
                    <h2 className="font-semibold">GitHub</h2>
                    <a href="https://github.com/MyttocS82" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:underline">
                        Dépôts GitHub
                    </a>
                </div>
            </section>

            <ContactForm/>

        </section>
    );
}
