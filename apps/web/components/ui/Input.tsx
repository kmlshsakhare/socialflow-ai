type InputProps = {
  label: string;
  placeholder: string;
  type?: string;
};

export default function Input({
  label,
  placeholder,
  type = "text",
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
        w-full
        rounded-xl
        border
        border-slate-700
        bg-slate-800
        px-4
        py-3
        text-white
        placeholder:text-slate-500
        outline-none
        transition-all
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-500/30
      "
      />
    </div>
  );
}