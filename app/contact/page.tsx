import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Contact | Portfolio Michelon Scott',
    description: 'Différents moyens de contacter Michelon Scott',
};

export default function ContactPage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Contact</h1>
            <p className="text-gray-600">
                Cette page présentera un formulaire de contact ou des informations de contact.
            </p>
        </section>
    );
}
