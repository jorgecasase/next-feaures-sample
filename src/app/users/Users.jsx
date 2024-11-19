"use client"
import Link from 'next/link'

function Users({ users }) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {users.map((user) => (
                <Link href={`/users/${user.id}`} key={user.id}>
                <div
                    key={user.id}
                    className="border border-gray-300 rounded-lg p-4 shadow-md bg-gray-100 "
                >
                    <img
                        src={user.avatar}
                        alt={`${user.first_name} ${user.last_name}`}
                        className="w-24 h-24 rounded-full mx-auto"
                    />
                    <h3 className="text-lg font-semibold text-center mt-2">
                        {user.first_name} {user.last_name}
                    </h3>
                    <p className="text-center text-gray-500">{user.email}</p>
                </div>
                </Link>
            ))}
        </div>
    );
}

export default Users;