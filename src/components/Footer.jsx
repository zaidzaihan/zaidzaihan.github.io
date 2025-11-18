const Github = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 100 100"
    className="w-6 h-6 inline-block align-middle text-white"
  >
    <path d="M50 1C22.39 1 0 23.386 0 51c0 22.092 14.327 40.834 34.193 47.446 2.499.462 3.417-1.085 3.417-2.406 0-1.192-.047-5.131-.068-9.309-13.91 3.025-16.846-5.9-16.846-5.9-2.274-5.779-5.551-7.315-5.551-7.315-4.537-3.104.341-3.04.341-3.04 5.022.353 7.665 5.153 7.665 5.153 4.46 7.644 11.697 5.434 14.55 4.156.449-3.232 1.745-5.437 3.175-6.686-11.106-1.264-22.78-5.552-22.78-24.71 0-5.459 1.953-9.92 5.151-13.42-.519-1.26-2.23-6.346.485-13.233 0 0 4.198-1.344 13.753 5.125 3.988-1.108 8.266-1.663 12.515-1.682 4.25.019 8.53.574 12.526 1.682 9.544-6.469 13.736-5.125 13.736-5.125 2.722 6.887 1.01 11.973.49 13.232 3.206 3.502 5.146 7.962 5.146 13.42 0 19.205-11.697 23.434-22.83 24.671 1.793 1.552 3.391 4.595 3.391 9.26 0 6.69-.058 12.074-.058 13.721 0 1.33.9 2.89 3.435 2.399C85.692 91.819 100 73.085 100 51c0-27.614-22.386-50-50-50" />
  </svg>
);

export const Footer = () => {
  return (
    <div className="md:h-screen w-full pt-20 relative">
      <div className="font-mont md:text-[18vh] text-6xl md:pl-20 pl-5 sm:py-5 font-bold">LET'S TALK.</div>
      <div className="grid grid-rows-2 grid-cols-12 w-full h-[55vh] gap-2 md:px-20 px-10 pb-5">
        <div className="col-span-8 bg-white/20 font-mono text-2xl p-5 rounded-3xl">Mail</div>
        <div className="col-span-4 bg-white/20 font-mono text-2xl p-5 rounded-3xl">Github</div>
        <div className="col-span-4 bg-white/20 font-mono text-2xl p-5 rounded-3xl">Insta</div>
        <div className="col-span-8 bg-white/20 font-mono text-2xl p-5 rounded-3xl">Phone</div>
        <div className="font-mont text-9xl absolute blur-md left-1/2 -translate-x-1/2 pt-15 leading-tight">HMU,<br/> STAY CLASSY.</div>



      </div>
      <div className="flex flex-col items-center justify-center font-mono text-lg p-5 bg-white/2 w-full bottom-0">
        <h2 className="flex items-center gap-2">
          Developed by <a href="https://github.com/zaidzaihan/" className="flex" target="_blank" rel="noopener noreferrer"><Github />/zaidzaihan</a>
        </h2>
        <p className="text-sm mt-1 text-white/70">Built with React + Vite</p>
      </div>
    </div>
  );
}
