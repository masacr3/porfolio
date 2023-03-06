import Instagram from '../../assets/instagram.png'
import Github from '../../assets/github.png'

function FooterSocial() {
  return (
    <div className='row item jc-se footersocial'>
        <img src={Instagram} alt="" />
        <img src={Github} alt="" />
    </div>
  )
}

export default FooterSocial