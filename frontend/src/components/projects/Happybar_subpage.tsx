import React from 'react';

function Happybar_subpage() {
  return (
    <div className="w-full min-h-screen bg-[#deebf4] font-sans antialiased flex flex-col items-center justify-center gap-12 ">
      
      {/* SECTION 1: Happy Bar */}
      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center relative my-8 mt-32">
        
        {/* Left/Overlay Description Card */}
        <div className="bg-[#493d8e] text-white p-6 md:p-8 max-w-sm rounded-sm shadow-xl z-10 md:mr-[-4rem] mb-6 md:mb-0">
          <p className="text-sm md:text-base leading-relaxed font-light">
            Happy Bar's mission is to feed children in under-privileged societies to give them an equitable chance at life. Your gifts to help feed an undernourished child will make a huge and positive difference. Private donors cover our operating costs so 100% of your donation goes to the production of Happy Bars. Each Happy Bar costs US 25 cents and delivers 5g of protein per serving plus other nutrition. Happy Bar Nutrition Inc. is a US 501(c)(3) non-profit organisation.
          </p>
        </div>

        {/* Right Hero Card */}
        <div className="bg-[#8b2671] text-white p-8 md:p-16 max-w-2xl min-h-[450px] flex flex-col justify-between relative overflow-hidden rounded-sm shadow-xl">
          {/* Subtle concentric circular design accents in the top right */}
          <div className="absolute top-0 right-0 w-64 h-64 border-[16px] border-white/5 rounded-full translate-x-16 -translate-y-16 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-48 h-48 border-[16px] border-white/5 rounded-full translate-x-12 -translate-y-12 pointer-events-none"></div>
          
          <div className="z-10 mt-4 ml-0 md:ml-10">
            <h1 className="text-3xl md:text-5xl font-bold tracking-wide leading-tight ">
              Happy Bar’s mission is to feed children in under-privileged societies.
            </h1>
          </div>

          <div className="z-10 mt-8">
            <button
  onClick={() => window.open("https://happybarnutrition.org/", "_blank")}
  className="ml-0 md:ml-10 bg-[#4a0e36] hover:bg-[#340725] text-white font-medium text-xs tracking-widest uppercase py-3 px-6 rounded transition-colors duration-200 shadow-md"
>
  I Love This! Tell Me More...
</button>
          </div>
        </div>
      </section>

     
     <section className="w-full rounded-sm overflow-hidden shadow-xl relative">
  <img
    src="https://aliceclaraaugustine.com/wp-content/uploads/2023/06/meetboing.png"
    alt="Happy Bar"
    className="w-full h-[20vh] md:h-auto object-fill"
  />
</section>

    </div>
  );
}

export default Happybar_subpage;