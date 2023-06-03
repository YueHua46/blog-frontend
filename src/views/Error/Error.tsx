import './index.scss'

export default function Error() {
  return (
    <>
      <div id="background"></div>
      <div className="top">
        <h1>404</h1>
        <h3>page not found</h3>
      </div>
      <div className="container">
        <div className="ghost-copy">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
        <div className="ghost">
          <div className="face">
            <div className="eye"></div>
            <div className="eye-right"></div>
            <div className="mouth"></div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
      <div className="bottom">
        <p>Boo, looks like a ghost stole this page!</p>
        <form className="search">
          <input type="text" className="search-bar" placeholder="Search" />
          <button type="submit" className="search-btn">
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
        <div className="buttons">
          <button className="btn">Back</button>
          <button className="btn">Home</button>
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
