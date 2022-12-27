import s from '../../styles/Hero.module.css'
export default function Hero () {
  return (
    <section className={s.container}>
        <div className={s.WrapperHero}>
          <h1 className={s.TitleHero}>Radically<br /> Better</h1>
          <p className={s.TextoHero}>Lorem ipsum dolor sit amet, consectetuer Lorem ipsum<br />
          dolor sit amet, consectetuer </p>
          <div className={s.btnContainer}>
            <button className={s.btnBg}>Lorem</button>
            <button className={s.btnTrans}>ipsum</button>
          </div>
        </div>
      </section>)
}
