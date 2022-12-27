import s from '../../styles/SectionTwo.module.css'
export default function SectionOne () {
  return (
    <section className={s.container}>
      <div className={s.wrapper}>
      <p className={s.parrafo}>
        At Devaster we boost your business with high-level solutions, supporting
        and innovating according to your needs. Always at the leading edge of
        the digital market, we make your expectations a reality!
      </p>
      <br />
      <p className={s.parrafo}>Throughout our technological experience we have:</p>
      <div className={s.colFour}>
        <div className={s.card}>
            <h3>+350</h3>
            <span>Clients</span>
        </div>
        <div className={s.card}>
            <h3>+1k</h3>
            <span>Projects</span>
        </div>
        <div className={s.card}>
            <h3>+200</h3>
            <span>E-Commerce</span>
        </div>
        <div className={s.card}>
            <h3>+600</h3>
            <span>Talents</span>
        </div>
      </div>
      <div className={s.tarjec}>
        <h3>Specialized technology for scaling businesses</h3>
      </div>
      </div>
    </section>
  )
}
