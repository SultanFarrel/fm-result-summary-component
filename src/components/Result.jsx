import { ScoreCircle } from "./ScoreCircle";
import { SectionTitle } from "./SectionTitle";

export function Result({ title }) {
  return (
    <div className="pb-4">
      <SectionTitle
        title={title}
        className="text-center text-neutral-pale-blue pt-6 mb-4 lg:text-lg"
      />
      <ScoreCircle score={76} />
    </div>
  );
}
