interface ITab {
  label: string;
  eventCount: number | null;
  isActive: boolean;
  onClick: () => void;
}

export default function Tab({ label, eventCount, isActive, onClick }: ITab) {
  return (
    <button
      className={`w-fit flex flex-row gap-2.5 py-2 hover:border-orange-600 hover:border-opacity-30 ${
        isActive
          ? "border-orange-500 text-white"
          : "border-transparent text-neutral-400"
      } border-b-2 items-center`}
      onClick={onClick}
    >
      {label}
      {eventCount !== null && (
        <span className="w-fit px-2.5 py-0.5 bg-neutral-950 rounded-full text-sm">
          {eventCount}
        </span>
      )}
    </button>
  );
}
