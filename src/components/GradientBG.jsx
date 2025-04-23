export function GradientBG({ children }) {
  return (
    <div className="bg-linear-to-bl from-gradient-slate-blue to-gradient-royal-blue w-full rounded-b-4xl lg:rounded-4xl">
      {children}
    </div>
  );
}
