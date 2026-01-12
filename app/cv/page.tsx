import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'CV | Portfolio Michelon Scott',
    description: 'Contient le CV de Michelon Scott',
};

export default function CVPage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">CV</h1>
            <p className="text-gray-600">
                Cette page présentera mon CV.
            </p>
        </section>
    );
}
