import React, { useState, useEffect } from "react";

import "./styles.css";
import User from "./components/User";
import RepositoryList from "./components/RepositoryList";
import api from './services/api';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(res => {
      setRepositories(res.data);
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories',
      {
        title: "Novo repositorio 3",
        url: "www.repo3.com",
        techs: ["React3", "Node3"]
      }
    );

    const newRepository = response.data;

    setRepositories([...repositories, newRepository]);
  }

  async function handleRemoveRepository(id) {
    api.delete(`/repositories/${id}`).then( res => {
      const updatedRepositories = repositories.filter(repository => repository.id !== id);
      setRepositories(updatedRepositories);
    })
  }

  return (
    <div className="main">
      <User handleAddRepository={handleAddRepository}/>
      <RepositoryList handleRemove={handleRemoveRepository} repositories={repositories}/>
      {/* <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button> */}
    </div>
  );
}

export default App;
