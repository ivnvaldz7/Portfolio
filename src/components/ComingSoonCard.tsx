export default function ComingSoonCard() {
  return (
    <div className="flex h-[400px] flex-col items-center justify-center text-center min-[375px]:h-[500px] bg-brand-black/80">
      <p className="text-[8vmin] font-bold text-white/30 md:text-[6vmin]">
        Coming
        <br />
        Soon...
      </p>
      <p className="mt-4 w-[70%] text-sm leading-relaxed text-white/40 min-[375px]:text-base">
        New project on the way. Stay tuned.
      </p>
    </div>
  );
}
