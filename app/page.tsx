import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";

export default function page() {
    return (
        <main>
            <Hero />
            <section className="min-h-screen grid place-items-center text-5xl">
                Another section
            </section>
            <Footer />
        </main>
    )
}