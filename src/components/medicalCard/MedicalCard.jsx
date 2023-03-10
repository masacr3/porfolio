import './MedicalCard.css'
import Vacuna from '../../assets/vacuna.png'
import Medica from '../../assets/medica.png'
import Fecha from '../fecha/Fecha.jsx'

function MedicalCard({registros}) {
  return (
    <div className='container-medicalCard'>
        <div className='item-medicalCard jc-c'>
          <p>Salud</p>
        </div>
        { registros.map ( (registro, idx)  => 
            <div className='item-medicalCard jc-sa' key={idx}>
                <img src={registro.tipo === "medico" ? Medica : Vacuna } alt=""/>
                <Fecha date={registro.fecha} />
            </div>
        )}
    </div>
  )
}

export default MedicalCard