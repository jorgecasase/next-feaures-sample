import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="bg-blue-600 text-white py-4 px-8">
            <div className="flex justify-between items-center">
                {/* Enlace a la izquierda */}
                <Link href="/" className="text-lg font-semibold hover:text-blue-300 transition-colors duration-200">
                    Home
                </Link>

                {/* Enlace a la derecha */}
                <Link href="/about" className="text-lg font-semibold hover:text-blue-300 transition-colors duration-200">
                    About
                </Link>
            </div>
        </nav>
    );
}