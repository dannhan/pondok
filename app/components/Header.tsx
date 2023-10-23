export default function Header() {
  return (
    <header>
      <nav>
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-3 py-3">
          <a href="/" className="hover:text-amber-700 text-xl font-bold">
            Home
          </a>
          <a href="/" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="w-full border-b-2 border-black"></div>
      </nav>
    </header>
  );
}
