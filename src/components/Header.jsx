function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-300 to-indigo-400 shadow-inner" />
          <span className="text-2xl tracking-tight font-medium">
            Echo <span className="align-middle font-normal text-slate-500 italic" style={{fontFamily:'cursive'}}>journal</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#how" className="hover:text-slate-900 transition-colors">How it works</a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#start" className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2 text-sm hover:bg-slate-800 transition-colors shadow-sm">
            Start Journaling
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
