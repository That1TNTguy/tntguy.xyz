import React from "react";
import rectangle2 from "./rectangle-2.png";

export const Desktop = () => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1920px] min-h-[1080px] relative">
      <img
        className="left-0 w-[1920px] h-[1080px] object-cover absolute top-0"
        alt="Rectangle"
        src={rectangle2}
      />

      <div className="left-4 w-[1887px] h-[79px] bg-[#ff0c0c] rounded-[var(--shape-corner-none)_var(--shape-corner-none)_var(--shape-corner-small)_var(--shape-corner-small)] absolute top-0" />

      <div className="absolute top-0 left-[906px] w-[107px] [font-family:'Helvetica_Neue-CondensedBold',Helvetica] font-bold text-white text-[61px] tracking-[0] leading-[normal]">
        [tnt]
      </div>

      <div className="absolute top-[485px] left-[660px] w-[623px] [font-family:'Helvetica_Neue-CondensedBold',Helvetica] font-bold text-white text-[107px] tracking-[0] leading-[normal]">
        Coming [soon]
      </div>

      <p className="absolute top-[1027px] left-[670px] w-[620px] [font-family:'Helvetica_Neue-CondensedBold',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal]">
        (I suck at design so give me a bit, ok?)
      </p>
    </div>
  );
};
