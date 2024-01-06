import { useState, useContext} from "react";
import { ContextGithub } from "../context/ContextGithub";

import "./FormSearch.css";

const FormSearch = () => {
    const [username, setUsername] = useState(null)
    const {githubFetch} = useContext(ContextGithub)

    const handleSubmit = (e) => {
        e.preventDefault()
        githubFetch(username)
    }


  return (
      <form className="form-git" onSubmit={handleSubmit}>
        <label>
          <span>Usuário:</span>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Digite o nome de usuário do GitHub"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
  );
};

export default FormSearch;
