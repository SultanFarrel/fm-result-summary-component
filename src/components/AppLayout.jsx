export function AppLayout({ children }) {
  return (
    <div className="font-[Hanken_Grotesk] flex flex-col lg:flex-row justify-center items-center min-h-screen bg-neutral-light-gray">
      <div className="flex flex-col lg:flex-row bg-white lg:rounded-4xl overflow-hidden shadow-lg w-full max-w-4xl lg:h-2/4 lg:w-2/4">
        {children}
      </div>
    </div>
  );
}
