import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Compétences | Portfolio Michelon Scott',
    description: 'Compétences techniques et transversales de Michelon Scott',
};

export default function CompetencesPage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Compétences</h1>
            <p className="text-gray-600">
                Cette page présentera mes compétences techniques et professionnelles.
            </p>
        </section>
    );
}
