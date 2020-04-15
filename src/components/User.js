import React from 'react'

import userPic from '../assets/user.jpg';
import { MdAdd } from 'react-icons/md';

export default function User( { handleAddRepository }) {
  return (
    <div className="userInfo">
      <div className="user">
        <img src={userPic} />
        <h3 id="name">Iago Brayham</h3>
        <h4 id="userName">Ibcs16</h4>
      </div>
      <div className="actions">
        <button style={{width: 0, height: 0, visibility: 'hidden'}} onClick={() => handleAddRepository()}>Adicionar</button>
        <button title="Adicionar" onClick={() => handleAddRepository()}><MdAdd size={42} color="rgba(51, 51, 51, 0.6)"/></button>
      </div>
    </div>
  )
}
