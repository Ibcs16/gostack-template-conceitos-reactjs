import React from 'react'

import { MdDeleteSweep } from 'react-icons/md';


export default function RepositoryList({ repositories, handleRemove }) {
  return (
    <>
      <div className="divider">
        <h3>Meus repositórios</h3>
      </div>

      { repositories.length === 0 && <p id="noRepoWarning">Você não possui repositórios...</p>}
      <ul className="repositoryList" data-testid="repository-list">
        { repositories.map( repository => (
          <li className="fade-in" key={repository.id}>
             <h3>{repository.title}</h3>
          <a href={repository.url} id="repoUrl">{repository.url}</a>
          <ul className="techsList">
            { repository.techs.map(tech => <li key={tech}>{tech}</li>) }
          </ul>
          <div className="actions">
            <button style={{width: 0, height: 0, visibility: 'hidden'}} onClick={() => handleRemove(repository.id)}>Remover</button>
            <button title="Remover" onClick={() => handleRemove(repository.id)}><MdDeleteSweep size={24} color="rgba(51, 51, 51, 0.6)"/></button>
          </div>
          </li>
        ))
        }
      </ul>
    </>
  )
}
