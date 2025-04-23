export function ScoreCircle({ score }) {
  return (
    <div className="bg-linear-to-bl from-gradient-violet-blue to-gradient-persian-blue rounded-full w-35 h-35 m-auto text-center flex flex-col justify-center text-neutral-white lg:w-45 lg:h-45 lg:mt-8">
      <p className="font-extrabold text-5xl mb-2 lg:text-7xl">{score}</p>
      <p className="text-neutral-pale-blue text-sm lg:text-lg">of 100</p>
    </div>
  );
}
