import FormSearch from "./components/FormSearch";
import FormResult from "./components/FormResult";
import RepositoriesContainer from "./components/RepositoriesContainer";

import { ContextGithubProvider } from "./context/ContextGithub";

import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <h1>Desafio 2 GitHub - Developers</h1>
          <div className="form-container">
            <ContextGithubProvider>
              <FormSearch />
              <FormResult />
              <RepositoriesContainer />
            </ContextGithubProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
