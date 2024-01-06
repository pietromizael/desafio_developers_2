import { useState, createContext, useEffect } from "react";

export const ContextGithub = createContext();

export function ContextGithubProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userRepos, setUserRepos] = useState(null);

  const clearUserData = () => {
    setUser(null)
  }
  
  const githubFetch = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
    
    fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((data) => setUserRepos(data))

  };

  return (
    <ContextGithub.Provider
      value={{ user, userRepos, githubFetch, clearUserData }}
    >
      {children}
    </ContextGithub.Provider>
  );
}
