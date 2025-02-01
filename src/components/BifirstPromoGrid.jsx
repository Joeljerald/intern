import React from "react";
import img1 from "../assets/img1.png";
import m3 from "../assets/m3.png";
import log from "../assets/logo.png";
import m from "../assets/m.png";
import bas2 from "../assets/bas2.png";
import l from "../assets/l.png";

const BifirstPromoGrid = () => {
  return (
    <div className="h-screen w-screen bg-[#2A0031] p-6 flex flex-col">
      <div className="w-full mx-auto flex-1">
        
        
        <div className="grid grid-cols-10 h-96">
         
          <div className="col-span-3 bg-[#420046] p-6 rounded-3xl flex flex-col items-center justify-center relative border-r-8 border-[#2A0031]">

            <div className="absolute w-60 h-12 bg-[#5E005E] rounded-full top-1/3 left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute w-60 h-12 bg-[#5E005E] rounded-full top-2/3 left-1/2 transform -translate-x-1/2"></div>

            
            <span className="bg-pink-500 text-[#2A0031] px-8 py-2 rounded-full absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 my-6 font-bold">
             Your</span>

            <span className="bg-white text-[#030103] px-10 py-2 rounded-full font-bold absolute top-[45%] left-[33%] ">
              Happiness
            </span>
            <span className="bg-orange-500 text-[#030103] px-6 py-2 rounded-full absolute top-[56%] left-[55%] font-bold">
              Our
            </span>
            <span className="bg-pink-300 text-[#2A0031] px-6 py-3 rounded-full absolute top-2/3 left-[55%] transform -translate-x-1/2 -translate-y-1/2 my-6 font-bold">
              Priority
            </span>
          </div>

          
          <div
            className="col-span-7 rounded-xl p-7 flex flex-col justify-between border-l-2 border-[#2A0031]"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          </div>
        </div>

        
        <div className="grid grid-cols-10 mt-7 h-[550px]">
          
         
          <div className="col-span-3 bg-yellow-300 rounded-3xl p-4 flex flex-col justify-between border-r-8 border-[#2A0031]"
          style={{
            backgroundImage: `url(${m3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className="text-sm text-[#2A0031]">bifirst.app</div>
          </div>

         
          <div className="col-span-4 grid grid-rows-2 gap-6 h-full border-l-8 border-r-8 border-[#2A0031]">
           
            <div
              className="bg-[#84178ab4] rounded-2xl flex items-center justify-center p-8 h-full w-full"
              style={{
                backgroundImage: `url(${log})`,
                backgroundSize: "contain",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-white text-9xl font-bold ml-40">bifirst</span>
              </div>
            </div>

            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-fuchsia-600 rounded-3xl flex items-center justify-center border-r-8 border-[#2A0031]">
                <div className="bg-[#84178ab4] rounded-3xl flex items-center justify-center p-7 h-full w-full"
                style={{
                  backgroundImage: `url(${l})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}></div>
              </div>
              <div className="bg-fuchsia-600 rounded-3xl flex items-center justify-center">
                <div className="bg-[#84178ab4] rounded-3xl flex items-center justify-center p-7 h-full w-full"
                  style={{
                    backgroundImage: `url(${bas2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}>
                  <div className="text-white text-center">
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-span-3 bg-fuchsia-600 rounded-3xl flex items-center justify-center p-6 border-l-8 border-[#2A0031]"
          style={{
            backgroundImage: `url(${m})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>

        </div>
      </div>
    </div>
  );
};

export default BifirstPromoGrid;
