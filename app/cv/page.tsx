import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'CV | Portfolio Michelon Scott',
    description:
        'Curriculum Vitae de Michelon Scott – versions design et ATS',
};

export default function CVPage() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-16 space-y-10 text-center">

            <h1 className="text-3xl font-bold">Curriculum Vitae</h1>

            <p className="text-gray-600">
                Je propose deux versions de mon CV afin de m’adapter aux différents
                contextes de recrutement.
            </p>

            {/* CV Design */}
            <div className="bg-white border rounded-lg p-6 space-y-4">
                <h2 className="text-xl font-semibold">CV Design</h2>
                <p className="text-gray-600 text-sm">
                    Version esthétique conçue sous Canva, idéale pour une lecture humaine
                    et une présentation visuelle soignée.
                </p>
                <a
                    href="/cv/CV_Scott_Michelon_Design.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Télécharger le CV Design (PDF)
                </a>
            </div>

            {/* CV ATS */}
            <div className="bg-white border rounded-lg p-6 space-y-4">
                <h2 className="text-xl font-semibold">CV ATS</h2>
                <p className="text-gray-600 text-sm">
                    Version simplifiée et optimisée pour les systèmes de suivi des
                    candidatures (ATS), favorisant la lisibilité et le parsing automatique.
                </p>
                <a
                    href="/cv/CV_Scott_Michelon_ATS.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                    Télécharger le CV ATS (PDF)
                </a>
            </div>

        </section>
    );
}
