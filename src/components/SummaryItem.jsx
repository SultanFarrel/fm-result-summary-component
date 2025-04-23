import { iconMap } from "../data/iconMap";

export function SummaryItem({ item }) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg p-4 my-4 ${item.bgColor} lg:my-5`}
    >
      <div className="flex items-center gap-2">
        <img
          src={iconMap[item.category]}
          alt={item.category}
          className="w-5 h-5"
        />
        <p className={`${item.textColor}`}>{item.category}</p>
      </div>
      <p>
        <span className="font-bold">{item.score}</span> / 100
      </p>
    </div>
  );
}
