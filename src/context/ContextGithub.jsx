import { useState, createContext, useEffect } from "react";

export const ContextGithub = createContext();

export function ContextGithubProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const githubFetch = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  return (
    <ContextGithub.Provider
      value={{ user, githubFetch }}
    >
      {children}
    </ContextGithub.Provider>
  );
}
