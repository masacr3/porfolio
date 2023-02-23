import './FiubaCard.css'
import Fecha from '../fecha/Fecha'

function FiubaCard({registros}) {
    return (
      <div className='container-fiubaCard'>
          <div className='item-fiubaCard jc-c'>
            <p>Facultad de Ingenieria UBA</p>
          </div>
          { registros.map ( (registro, idx)  => 
              <div className='item-fiubaCard jc-sa' key={idx}>
                  <Fecha date={registro.fecha} />
                  <p>
                    {registro.descripcion}
                    {registro.link && <br />}
                    {registro.link && <a href={registro.link} target="_blank">{registro.mask}</a>}
                  </p>
              </div>
          )}
      </div>
    )
  }
  
  export default FiubaCard