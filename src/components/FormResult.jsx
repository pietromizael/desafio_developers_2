import { useState, useContext, useEffect } from "react";
import { ContextGithub } from "../context/ContextGithub";

import "./FormResult.css";

const FormResult = () => {
    const {user} = useContext(ContextGithub)

    const [userName, setUserName] = useState(null)
    const [userLocation, setUserLocation] = useState(null)
    const [userBio, setUserBio] = useState(null)
    const [userFollowers, setUserFollowers] = useState(null)
    const [userFollowing, setUserFollowing] = useState(null)
    const [userRepositories, setUserRepositories] = useState(null)

    useEffect(() => {
        if(user) {
            setUserName(user.name)
            setUserLocation(user.location)
            setUserBio(user.bio)
            setUserFollowers(user.followers)
            setUserFollowing(user.following)
            setUserRepositories(user.public_repos)
        }
    }, [user])

    const handleButton = () => {
        return (
            setUserName(null),
            setUserLocation(null),
            setUserBio(null),
            setUserFollowers(null),
            setUserFollowing(null),
            setUserRepositories(null)
        )

    }

    return (
    <div className="form-results">
      <h2>Resultados:</h2>
      <p>Nome do usuário: {userName}</p>
      <p>Repositórios do usuário: {userRepositories}</p>
      <p>Bio do usuário: {userBio}</p>
      <p>Seguindo: {userFollowing}</p>
      <p>Seguidores: {userFollowers}</p>
      <button onClick={handleButton}>Limpar</button>
    </div>
  );
};

export default FormResult;
