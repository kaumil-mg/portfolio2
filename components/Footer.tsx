export default function Footer() {
  return (
    <footer className="bg-[#0e0e10] w-full border-t border-primary/5 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 w-full max-w-7xl mx-auto font-body text-xs uppercase tracking-widest">
        <div className="text-[#f9f5f8]/40 mb-4 md:mb-0">
          © {new Date().getFullYear()} Kaumil Mistry Portfolio. Built with Next.js & Tailwind.
        </div>
        <div className="flex gap-8">
          <a
            className="text-[#f9f5f8]/40 hover:text-primary transition-colors ease-in-out duration-200"
            href="mailto:kaumil09@gmail.com"
          >
            Email
          </a>
          <a
            className="text-[#f9f5f8]/40 hover:text-primary transition-colors ease-in-out duration-200"
            href="https://github.com/Kaumilmg"
          >
            GitHub
          </a>
          <a
            className="text-[#f9f5f8]/40 hover:text-primary transition-colors ease-in-out duration-200"
            href="#"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
