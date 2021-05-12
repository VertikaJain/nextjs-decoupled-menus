export const getStaticProps = async () => {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
    return {
        props: { users: users }
    }
}

const Lists = ({ users }) => {
    return <>
        {/* {data.map((d, index) => {
            return <div key={index}>
                <a>{d.title}</a>
            </div>
        })} */}
        <h1>lists page</h1>
        {users.map(user => {
            return <div key={user.id}>
                <a>{user.name}</a>
            </div>
        })}

    </>
}
export default Lists