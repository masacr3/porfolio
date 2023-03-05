import React from 'react'

function Materias({listadoMaterias}) {
  return (
    <div className='container-materias'>
        <p>Materias</p>
        <div className="item-materias">
          {
            listadoMaterias.map(materia =>
              <>
                <p>{materia.materia}</p>
                <div className="materias-descripcion">
                  <div className="materia-fecha">{materia.fecha}</div>
                  <div className="materia-horario">{materia.horario}</div>
                </div>
              </>
              )
          }
        </div>
    </div>
  )
}

export default Materias