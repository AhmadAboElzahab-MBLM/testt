export default function Home() {
  const lang = process.env.NEXT_PUBLIC_LANG;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-red-500 text-6xl">{lang}</h1>
    </div>
  );
}
