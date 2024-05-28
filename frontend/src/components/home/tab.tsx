interface ITab {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function Tab({ label, isActive, onClick }: ITab) {
  return (
    <button
      className={`w-fit py-2 px-4 hover:bg-[#393938] ${
        isActive ? "bg-[#4b4b4b]" : "bg-transparent"
      } border border-neutral-600 text-white`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
