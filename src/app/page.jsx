import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-gray-800">
      {/* Título grande */}
      <h1 className="text-4xl font-bold mb-8 text-white">User Storage Page</h1>

      {/* Botón para ir a Users */}
      <Link
        href="/users/"
        className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        Go to Users
      </Link>
    </div>
  );
}