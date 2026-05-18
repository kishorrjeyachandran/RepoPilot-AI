const Footer = () => {
  return (
    <footer className="border-t border-[#21262d] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <h3 className="text-lg font-semibold text-white">
            RepoPilot AI
          </h3>

          <p className="text-sm text-[#8b949e]">
            Navigate repositories with AI intelligence.
          </p>
        </div>

        <p className="text-sm text-[#8b949e]">
          © 2026 RepoPilot AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;