import {useParams} from "react-router-dom";
import {useEffect} from "react";

export default function User() {
    const params = useParams<{userId: string}>()
    useEffect(() => {
        console.log(params)
    })
    return <div>
        <h1>Usuário - {params.userId}</h1>
    </div>
}