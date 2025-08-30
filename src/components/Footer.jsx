function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/60 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Echo. All rights reserved.</p>
        <div className="flex items-center gap-5 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-800">Privacy</a>
          <a href="#" className="hover:text-slate-800">Terms</a>
          <a href="#" className="hover:text-slate-800">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
