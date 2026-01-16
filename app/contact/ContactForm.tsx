'use client';

import { useSearchParams } from 'next/navigation';

export default function ContactForm() {
    const searchParams = useSearchParams();
    const sent = searchParams.get('sent');

    return (
        <section className="bg-white border rounded-lg p-8 max-w-3xl mx-auto space-y-6">
            <h2 className="text-xl font-semibold text-center">
                Formulaire de contact
            </h2>

            {sent && (
                <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-center">
                    ✅ Votre message a bien été envoyé. Merci pour votre contact !
                </div>
            )}

            <form
                action="https://formspree.io/f/xaqqyaaa"
                method="POST"
                className="space-y-4"
            >
                <input
                    type="hidden"
                    name="_redirect"
                    value="https://portfolio-michelon-scott.vercel.app/contact?sent=true"
                />

                <input type="text" name="_gotcha" className="hidden" />

                <div>
                    <label className="block text-sm font-medium mb-1">Nom</label>
                    <input
                        name="name"
                        required
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                        name="message"
                        rows={5}
                        required
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Envoyer le message
                </button>
            </form>
        </section>
    );
}
