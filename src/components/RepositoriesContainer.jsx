import { useContext, useState } from "react";
import { ContextGithub } from "../context/ContextGithub";

import "./RepositoriesContainer.css";

const RepositoriesContainer = () => {
  const { user, userRepos} = useContext(ContextGithub);
  if (userRepos && user)
    return (
      <div className="repo-container">
        <h2>Repositórios:</h2>
        <ul>
          {userRepos ? (
            userRepos.map((repos, index) => (
              <li key={index}>
                <p>Nome: {repos.name}</p>
                <p>URL: {repos.full_name}</p>
              </li>
            ))
          ) : (
            <li></li>
          )}
        </ul>
      </div>
    );
};

export default RepositoriesContainer;
