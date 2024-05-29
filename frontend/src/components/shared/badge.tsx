interface IBadge {
  label: string;
  color: keyof typeof colorClasses;
}

const colorClasses = {
  lime: "text-lime-200 bg-lime-400/10 border-lime-600",
  emerald: "text-emerald-400 bg-emerald-400/10 border-emerald-800",
  green: "text-green-200 bg-green-400/10 border-green-600",
  orange: "text-orange-200 bg-orange-400/10 border-orange-600/50",
};

export default function Badge({ label, color }: IBadge) {
  return (
    <span
      className={`w-fit uppercase px-3 py-0.5 text-sm border ${colorClasses[color]} rounded`}
    >
      {label}
    </span>
  );
}
