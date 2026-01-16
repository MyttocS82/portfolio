import type { Metadata } from 'next';
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
                    Vous pouvez me contacter pour une opportunité de stage, d’alternance
                    ou pour discuter d’un projet en lien avec les données, la BI ou l’IA.
                </p>
            </header>

            <ContactForm />
        </section>
    );
}
