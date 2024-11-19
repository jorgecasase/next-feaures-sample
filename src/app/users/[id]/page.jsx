async function fetchUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula un retraso
    if (!res.ok) {
        throw new Error('Error al cargar el usuario');
    }
    const data = await res.json();
    return data.data;
}

export default async function UserPage({ params }) {
    const { id } = await params; 

    try {
        const user = await fetchUser(id); 

        return (
            <div className="flex items-center justify-center min-h-screen ">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center w-full max-w-sm">
                    <img
                        src={user.avatar}
                        alt={`${user.first_name} ${user.last_name}`}
                        className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"
                    />
                    <h1 className="text-2xl font-bold text-gray-800">
                        {user.first_name} {user.last_name}
                    </h1>
                    <p className="text-lg text-gray-600">{user.email}</p>
                </div>
            </div>
        );
    } catch (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-red-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-800">Usuario no encontrado</h1>
                    <p className="text-lg text-red-600">{error.message}</p>
                </div>
            </div>
        );
    }
}