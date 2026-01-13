import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Contact | Portfolio Michelon Scott',
    description:
        'Contacter Michelon Scott – Étudiant en BUT Informatique, spécialisation données, BI et IA',
};

export default function ContactPage() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">

            {/* Titre */}
            <header className="text-center space-y-4">
                <h1 className="text-3xl font-bold">Contact</h1>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Vous pouvez me contacter pour une opportunité de stage, d’alternance
                    ou pour discuter d’un projet en lien avec les données, la Business
                    Intelligence ou l’intelligence artificielle.
                </p>
            </header>

            {/* Infos de contact */}
            <section className="grid gap-6 md:grid-cols-3 text-center">

                <div className="bg-white border rounded-lg p-6 space-y-2">
                    <h2 className="font-semibold">Email</h2>
                    <a
                        href="mailto:scottmichelon@gmail.com"
                        className="text-blue-600 hover:underline"
                    >
                        scottmichelon@gmail.com
                    </a>
                </div>

                <div className="bg-white border rounded-lg p-6 space-y-2">
                    <h2 className="font-semibold">LinkedIn</h2>
                    <a
                        href="https://www.linkedin.com/in/michelon-scott-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Profil LinkedIn
                    </a>
                </div>

                <div className="bg-white border rounded-lg p-6 space-y-2">
                    <h2 className="font-semibold">GitHub</h2>
                    <a
                        href="https://github.com/MyttocS82"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Dépôts GitHub
                    </a>
                </div>

            </section>

            {/* Formulaire Formspree */}
            <section className="bg-white border rounded-lg p-8 max-w-3xl mx-auto space-y-6">

                <h2 className="text-xl font-semibold text-center">
                    Formulaire de contact
                </h2>

                <form
                    action="https://formspree.io/f/xaqqyaaa"
                    method="POST"
                    className="space-y-4"
                >

                    {/* Sujet du mail */}
                    <input
                        type="hidden"
                        name="_subject"
                        value="Nouveau message depuis le portfolio"
                    />

                    {/* Nom */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Nom
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            aria-required="true"
                            placeholder="Votre nom"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            aria-required="true"
                            placeholder="votre.email@example.com"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            aria-required="true"
                            placeholder="Votre message"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Bouton */}
                    <input type="text" name="_gotcha" className="hidden"/>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Envoyer le message
                    </button>

                </form>

                <p className="text-sm text-gray-500 text-center">
                    Les messages envoyés via ce formulaire sont transmis directement par email.<br/>
                    Je tâcherai à vous répondre dans les plus brefs délais !
                </p>

            </section>

        </section>
    );
}
