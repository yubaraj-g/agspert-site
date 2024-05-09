"use client";

import Image from "next/image";
import { TypographyH1 /*TypographyH2*/ } from "@/components/typography";
import { Button } from "@/components/ui/button";

// import useScreenSize from "@/hooks/use-screen-size";

// function VersionOne() {
//   const isDesktop: boolean = useScreenSize();

//   return (
//     <div className="w-full flex flex-col gap-4 min-h-96 lg:h-[600px] pt-4">
//       {/* <TypographyH2>Download App / Web App</TypographyH2> */}
//       {!isDesktop && (
//         <>
//           <TypographyH1>Download Our App</TypographyH1>
//           <Button className="w-fit rounded-none shadow-xl rounded-tl-xl rounded-br-xl">
//             Download Here
//           </Button>
//         </>
//       )}

//       <div className="flex flex-col lg:flex-row-reverse grow w-full relative">
//         <div className="lg:w-1/2 w-full min-h-80 relative">
//           <div className="lg:w-[500px] lg:h-[500px]">
//             <Image
//               src="/images/agspeak-app.png"
//               alt="agspeak-app"
//               layout="fill"
//               objectFit="contain"
//               className="scale-150 lg:scale-100"
//             />
//           </div>
//         </div>
//         <div className="lg:w-1/2 w-full min-h-32 lg:min-h-80 flex flex-col lg:items-start justify-center gap-4">
//           {isDesktop && (
//             <>
//               <TypographyH1>Download Our App</TypographyH1>
//               <Button className="w-fit rounded-none shadow-xl rounded-tl-xl rounded-br-xl">
//                 Download Here
//               </Button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

function VersionTwo() {
  return (
    <div className="w-full flex flex-col text-center items-center gap-4 min-h-96 lg:h-[600px] pt-4">
      {/* <TypographyH2>Download App / Web App</TypographyH2> */}
      <TypographyH1>Download Our App</TypographyH1>
      <Button className="w-fit rounded-none shadow-xl rounded-tl-xl rounded-br-xl mt-6">
        Download Here
      </Button>

      <div className="flex flex-col grow w-full relative">
        <div className="w-full min-h-80 relative">
          <div className="lg:w-[500px] lg:h-[500px]">
            <Image
              src="/images/agspeak-app.png"
              alt="agspeak-app"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeWebappFeatures() {
  return (
    <>
      <VersionTwo />
    </>
  );
}
