import Styles from './Error.module.scss'

export default function Error() {
  return (
    <>
      <div id={`background`}></div>
      <div className={`${Styles.top}`}>
        <h1>404</h1>
        <h3>page not found</h3>
      </div>
      <div className={`${Styles.container}`}>
        <div className={`${Styles['ghost-copy']}`}>
          <div className={`${Styles.one}`}></div>
          <div className={`${Styles.two}`}></div>
          <div className={`${Styles.three}`}></div>
          <div className={`${Styles.four}`}></div>
        </div>
        <div className={`${Styles.ghost}`}>
          <div className={`${Styles.face}`}>
            <div className={`${Styles.eye}`}></div>
            <div className={`${Styles['eye-right']}`}></div>
            <div className={`${Styles.mouth}`}></div>
          </div>
        </div>
        <div className={`${Styles.shadow}`}></div>
      </div>
      <div className={`${Styles.bottom}`}>
        <p>Boo, looks like a ghost stole this page!</p>
        <form className={`${Styles.search}`}>
          <input
            type="text"
            className={`${Styles['search-bar']}`}
            placeholder="Search"
          />
          <button type="submit" className={`${Styles['search-btn']}`}>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
          </button>
        </form>
        <div className={`${Styles.buttons}`}>
          <button className={`${Styles.btn}`}>Back</button>
          <button className={`${Styles.btn}`}>Home</button>
        </div>
      </div>

      <footer>
        <p>
          made by <a href="https://codepen.io/juliepark"> julie</a>
        </p>{' '}
        ♡
      </footer>
    </>
  )
}
