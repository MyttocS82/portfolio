import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Projets | Portfolio Michelon Scott',
    description: 'Présentation des projets académiques et personnels de Michelon Scott',
};

export default function ProjetsPage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Projets</h1>
            <p className="text-gray-600">
                Cette page présentera les projets académiques et personnels.
            </p>
        </section>
    );
}
