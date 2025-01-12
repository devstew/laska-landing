import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen overflow-hidden text-white">
            {/* Фонове зображення на всю секцію */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/hero.png"
                    alt="Будиночок у Карпатах"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>

            {/* Напівпрозорий оверлей (за бажанням) */}
            <div className="absolute inset-0 bg-black bg-opacity-40 -z-10" />

            {/* Шапка з логотипом, меню та кнопкою */}
            <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-20">
                <div className="flex items-center space-x-6">
                    {/* Логотип або назва */}
                    <Link href="/">
                        <Image
                            src="/images/hero.png"
                            alt="Laska logo"
                            width={60}
                            height={60}
                        />
                    </Link>

                    {/* Горизонтальне меню (приклад) */}
                    <nav className="hidden md:flex space-x-4">
                        <Link href="#photos" className="hover:text-gray-200 transition-colors">
                            Фото
                        </Link>
                        <Link href="#about" className="hover:text-gray-200 transition-colors">
                            Про нас
                        </Link>
                        <Link href="#features" className="hover:text-gray-200 transition-colors">
                            Зручності
                        </Link>
                        <Link href="#calendar" className="hover:text-gray-200 transition-colors">
                            Календар вільних місць
                        </Link>
                        <Link href="#contacts" className="hover:text-gray-200 transition-colors">
                            Контакти
                        </Link>
                    </nav>
                </div>

                {/* Праворуч — іконки та кнопка бронювання */}
                <div className="flex items-center space-x-4">
                    {/* Приклад соціальних іконок/телефон (для наочності, ви можете додати реальні SVG чи react-icons) */}
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 hover:text-gray-200 transition-colors"
                        aria-label="Instagram"
                    >
                        IG
                    </a>
                    <a
                        href="tel:+380971234567"
                        className="p-2 hover:text-gray-200 transition-colors"
                        aria-label="Phone"
                    >
                        Tel
                    </a>

                    {/* Кнопка "Забронювати" */}
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded">
                        Забронювати
                    </button>
                </div>
            </header>

            {/* Головний заголовок у центрі екрану */}
            <div className="flex flex-col items-center justify-center h-full px-4 text-center">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-3xl leading-tight mb-4">
                    Laska - це поєднання любові,<br className="hidden sm:block" />
                    ніжності та грайливості
                </h1>
            </div>

            {/* Блок з фільтрами фото (над "загином") */}
            <div className="absolute bottom-0 left-0 w-full bg-white text-black py-6 text-center">
                <h2 className="text-xl font-semibold mb-4">Наші фото</h2>
                <div className="inline-flex flex-wrap justify-center space-x-2">
                    <button className="border px-4 py-2 mb-2 rounded hover:bg-gray-200">
                        Всі фото
                    </button>
                    <button className="border px-4 py-2 mb-2 rounded hover:bg-gray-200">
                        Вітальня
                    </button>
                    <button className="border px-4 py-2 mb-2 rounded hover:bg-gray-200">
                        Кухня
                    </button>
                    <button className="border px-4 py-2 mb-2 rounded hover:bg-gray-200">
                        Ванна з туалетом
                    </button>
                    <button className="border px-4 py-2 mb-2 rounded hover:bg-gray-200">
                        Спальня 1
                    </button>
                    <button className="border px-4 py-2 mb-2 rounded hover:bg-gray-200">
                        Спальня 2
                    </button>
                    <button className="border px-4 py-2 mb-2 rounded hover:bg-gray-200">
                        Ззовні
                    </button>
                    <button className="border px-4 py-2 mb-2 rounded hover:bg-gray-200">
                        Додатково
                    </button>
                </div>
            </div>
        </section>
    );
}
