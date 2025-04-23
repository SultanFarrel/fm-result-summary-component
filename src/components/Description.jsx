import { SectionTitle } from "./SectionTitle";

export function Description({ title, text }) {
  return (
    <div className="mt-4 px-8 pb-10">
      <SectionTitle
        title={title}
        className="text-center text-neutral-white text-2xl lg:text-3xl"
      />
      <p className="text-center text-neutral-pale-blue text-lg mt-2 lg:text-xl lg:mt-4">
        {text}
      </p>
    </div>
  );
}
