import Image from 'next/image'
import Logo from '../public/images/Logo.svg'
import s from '../styles/Nav.module.css'
import Link from 'next/link'
import { useRef } from 'react'
import { BsTextRight } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

export default function Nav () {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('open')
  }
  return (
    <div className={s.navigator}>
      <div className={s.container} >
       <div>
        <Image className={s.logoNav} src={Logo} />
       </div>
       <nav className={s.desk}>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/ConsultingDevaster'>Consulting Devaster</Link></li>
          <li><Link href='/StaffingDevaster'>Staffing Devaster</Link></li>
          <li><Link href='/Contact'>Contact</Link></li>
        </ul>
        <div className={s.containerBtn}>
          <button className={s.BtnBg}>Lorem</button>
          <button className={s.BtnTrans}>Lorem</button>
        </div>
       </nav>
       <nav ref={navRef} className={s.responsive_nav}>
       <AiOutlineClose className={s.btnNavResponsive} onClick={showNavbar}/>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/ConsultingDevaster'>Consulting Devaster</Link></li>
          <li><Link href='/StaffingDevaster'>Staffing Devaster</Link></li>
          <li><Link href='/Contact'>Contact</Link></li>
        </ul>
        <div className={s.containerBtn}>
          <button className={s.BtnBg}>Lorem</button>
          <button className={s.BtnTrans}>Lorem</button>
        </div>
       </nav>
       <button className={s.navBtn}>
        <BsTextRight onClick={showNavbar} />
       </button>
      </div>
    </div>
  )
}
