import './Flash.css'


function Flash({estado, children}) {
  return (
    <div className={`container-flash ${estado}`}>
        {children}
    </div>
  )
}

export default Flash