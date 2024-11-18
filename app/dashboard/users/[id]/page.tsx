const User = ({params}: {params: {id: string}}) => {
    const { id } = params;
    return (
        <div className="text-3xl">User Profile: {id}</div>
    )
}

export default User