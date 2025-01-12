import Head from 'next/head';
import HeroSection from '@/components/HeroSection';

export default function Home() {
    return (
        <>
            <Head>
                <title>Laska - Затишок у Карпатах</title>
                <meta
                    name="description"
                    content="Laska - це поєднання любові, ніжності та грайливості. Відпочинок у серці Карпат."
                />
                <meta name="keywords" content="Laska, Карпати, відпочинок, будиночок, природа" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {/* Верхня (Hero) частина */}
                <HeroSection />
                {/* Далі інші блоки */}
            </main>
        </>
    );
}
