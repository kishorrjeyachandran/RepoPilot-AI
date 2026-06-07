// src/components/landing/BackgroundGlow.jsx

const BackgroundGlow = () => {
  return (
    <>
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />

      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-zinc-500/10 blur-[120px]" />

      <div className="absolute right-0 top-1/3 h-[250px] w-[250px] rounded-full bg-white/5 blur-[120px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
    </>
  );
};

export default BackgroundGlow;