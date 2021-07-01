import { useLocation, useParams } from "react-router-dom"

const Post = () => {
    const { id } = useParams()
    const query = new URLSearchParams(useLocation().search)
    return (
        <>
            <h2>ID is = {id}</h2>
            <h4>First Name is {query.get('firstName')}</h4>
            <h4>Last Name is {query.get('lastName')}</h4>
        </>
    )
}

export default Post
