export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-[rgb(67,44,65)] to-gray-900 h-[500px] rounded-b-4xl">
      <div className="flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-white max-w-3xl mx-auto leading-tight mt-12">
          Drive Revenue with AI Lead Conversion
        </h1>
        <p className="flex justify-center text-center text-gray-350 max-w-3xl mx-auto leading-tight mt-4 font-semibold">
          Your virtual sales assistant, available 24/7 to qualify leads, save time and boost conversions.</p>
      </div>
      <div className="flex justify-center items-center mt-6">
        <button className="bg-white text-black font-semibold text-lg px-6 py-3 border border-white rounded-md hover:bg-gradient-to-r from-[rgb(67,44,65)] to-gray-900 hover:text-white transition-colors">
          Get started Today
        </button>
      </div>
    </div>
  );
}