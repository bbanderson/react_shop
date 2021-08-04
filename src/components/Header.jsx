export default function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="title">React Shopping Mall</div>
        <div className="subtitle">Just check these out!</div>
        <div className="btn__area">
          <a
            href="https://github.com/bbanderson"
            target="_BLANK"
            rel="noreferrer"
          >
            <button>
              <i class="fab fa-github"></i>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
