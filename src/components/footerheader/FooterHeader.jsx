import Secuestro from '../../assets/secuestro.png'
import Instagram from '../../assets/Instagram.png'

function FooterHeader() {
  return (
    <div className='container-footer-header'>
        <div className="item row jc-c">
          <div className='line'></div>
          <img src={Secuestro} alt="" />
          @masacr3
          <div className='line'></div>
        </div>
    </div>
  )
}

export default FooterHeader