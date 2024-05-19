"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { TypographyH1, TypographyH3 } from "@/components/typography";
import { ArrowDownAnimated } from "@/components/icons";
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
    <div
      className="w-full relative z-0 !bg-cover bg-no-repeat min-h-dvh h-fit mb-0 sm:-mb-12 xl:mb-12"
      // style={{
      //   background: "url(/images/organic-plantations-min.jpg)",
      // }}
    >
      {/* <div className="container w-full min-h-96 lg:h-[600px] pt-56 text-white flex flex-col gap-6 leading-10 !z-30 [text-shadow:_0_2px_2px_rgb(0_0_0_/_70%)]"> */}
      <div className="container w-full min-h-96 lg:h-[830px] pt-36 xl:pt-64 lg:pb-56 flex flex-col gap-6 leading-10 !z-30 -mt-0">
        <TypographyH1 className="flex-col text-center lg:text-start text-white shadow-lg">
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

        <div className="flex flex-col-reverse lg:flex-row w-full items-center gap-0 lg:gap-4 -mt-16 text-white">
          <div className="flex flex-col gap-0 lg:gap-6 w-full lg:w-1/2 -mt-8 sm:-mt-36 lg:mt-20">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              // animate={{ x: 0, opacity: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.5, duration: 0.75 }}
              // transition={{ staggerChildren: 0.02 }}
            >
              <TypographyH3 className="text-center lg:text-start">
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

            <Link href={"#contact-us"} className="flex self-center lg:self-start">
              <Button className="w-fit rounded-none shadow-2xl rounded-tl-2xl rounded-br-2xl mt-8 text-xl font-bold tracking-wide p-6">
                Request Demo
              </Button>
            </Link>
          </div>

          <div className="flex w-full lg:w-1/2 h-fit lg:min-h-72 lg:h-fit justify-center items-center bg-transparent rounded-3xl mt-14 sm:-mt-6 lg:-mt-8">
            <div className="w-full h-fit lg:h-96 relative bg-transparent lg:scale-[0.8] lg:-mr-32 lg:-mt-32">
              <img
                src="/images/macbook-nobg.jpg"
                alt="macbook"
                className="-mt-12 sm:-mt-24 lg:-mt-24 xl:-mt-32 scale-125 sm:scale-105 lg:scale-125 bg-transparent"
              />
              <div className="xl:ml-[0px] xl:w-[calc(80%+2px)] xl:h-[88%] absolute xl:left-[51%] xl:-translate-x-[50%] xl:top-1/2 xl:-translate-y-1/2 ml-[3px] w-[calc(80%+1px)] left-1/2 -translate-x-1/2 top-[42%] -translate-y-1/2 sm:w-[calc(67%+3px)] sm:ml-[6px] lg:w-[calc(80%+1px)] lg:left-[calc(51%+1px)] lg:-ml-[1px] lg:top-[35%] lg:-translate-y-1/2">
                <video
                  className="w-full h-full"
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
        </div>
      </div>
      <div className="absolute left-0 -top-16 flex w-full h-full lg:min-h-72 lg:h-fit justify-center items-center bg-transparent -z-10 object-cover">
        <video
          className="h-full w-full -z-20 self-stretch object-cover"
          src="/video/hero-bg-720p.mp4"
          controls
          autoPlay
          muted
          loop
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
        />
        <div className="z-10 absolute text-white bottom-4 lg:bottom-8 xl:bottom-12 lg:left-1/2 lg:-translate-x-1/2 right-4 animate-bounce w-fit">
          <ArrowDownAnimated width="40" height="40" />
        </div>
      </div>
    </div>
  );
}
