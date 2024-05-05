"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { TypographyH1, TypographyH3 } from "@/components/typography";
import { Button } from "@/components/ui/button";

// import useScreenSize from "@/hooks/use-screen-size";
import regexSplitString from "@/lib/regex-split-string";

type RendererProps = {
  text: string;
};

function Renderer({ text }: RendererProps) {
  // console.log(text);
  return (
    <motion.span
      className="text-primary"
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
    >
      <div className="min-h-10 lg:min-h-12">{text}</div>
    </motion.span>
  );
}

export default function HomeHero() {
  // const desktopScreen = useScreenSize();

  const [text, setText] = useState<any>("Organised");
  const [componentRender, setComponentRender] = useState<any>({
    component: <Renderer text={text} />,
  });

  const textList = ["Organised", "Efficient", "Transparent"];

  useEffect(() => {
    let index = 0;
    let _txt = textList[0];
    const interval = setInterval(() => {
      if (index === textList.length - 1) {
        _txt = textList[0];
        index = 0;
      } else {
        _txt = textList[index + 1];
        index += 1;
      }

      setText(_txt);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setComponentRender({
        component: <Renderer text={text} />,
      });
    }, 1);

    return () => {
      setComponentRender({
        component: null,
      });
    };
  }, [text]);

  const splittedDescription = regexSplitString(
    "Your one-stop solution to run smoother operations, minimise waste, and tailor marketing strategies to your customer preferences"
  );

  return (
    <div className="w-full min-h-96 lg:h-[600px] pt-4 flex flex-col gap-6 leading-10">
      <TypographyH1 className="flex-col">
        Make Your Agricultural Supply Chain
        {/* Organised, Efficient and Transparent  */}
        {/* <motion.span className="text-primary"> {text}</motion.span> */}{" "}
        {componentRender.component ? (
          componentRender.component
        ) : (
          <div className="min-h-10 lg:min-h-12" style={{ visibility: "hidden" }} />
        )}
        Today
      </TypographyH1>

      <div className="flex flex-col-reverse lg:flex-row w-full items-center gap-4 mt-0 lg:-mt-6">
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", delay: 0.5, duration: 0.75 }}
            // transition={{ staggerChildren: 0.02 }}
          >
            <TypographyH3>
              <motion.p
                transition={{ staggerChildren: 0.02, ease: "easeInOut" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                {splittedDescription.map((char: string, index: number) => (
                  <motion.span
                    key={char + "_" + index}
                    transition={{ ease: "easeIn", duration: 0.5 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </TypographyH3>
          </motion.div>

          <Button className="w-fit rounded-none shadow-xl rounded-tl-xl rounded-br-xl">Request Demo</Button>
        </div>

        <div className="flex w-full lg:w-1/2 min-h-44 h-fit lg:min-h-72 lg:h-fit justify-center items-center shadow-2xl">
          <video
            className="rounded-tl-3xl rounded-br-3xl"
            src="/video/Intro-Video-AgSpeak.mp4"
            controls
            autoPlay
            muted
            loop
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture
          />
        </div>
      </div>
    </div>
  );
}
