import Users from './Users'

async function loadUsers() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch('https://reqres.in/api/users')
    const data = await res.json()
    return data.data;
}

export default async function () {
    const users = await loadUsers();
    return (
        <Users users={users}></Users>
    );
}