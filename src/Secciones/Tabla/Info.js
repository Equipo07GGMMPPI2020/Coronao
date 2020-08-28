import React, { Component } from "react";
import integrantes from "./integrantes";

class Info extends Component {
  render() {
    return (
      <div>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Correo</th>
              <th scope="col">Celular</th>
            </tr>
          </thead>
          <tbody>
            {integrantes.map((item, i) => {
              return (
                <tr key={`${i}`}  >
                        <th>{item.id}</th>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.correo}</td>
                  <td>{item.celular}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Info;
