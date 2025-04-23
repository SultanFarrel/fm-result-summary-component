import data from "../data/data.json";
import { SectionTitle } from "./SectionTitle";
import { SummaryItem } from "./SummaryItem";
import { Button } from "./Button";

export function Summary({ title }) {
  return (
    <div className="w-full p-6 bg-neutral-white">
      <SectionTitle title={title} className="text-lg lg:text-2xl" />
      {data.map((item) => (
        <SummaryItem item={item} key={item.category} />
      ))}
      <Button />
    </div>
  );
}
