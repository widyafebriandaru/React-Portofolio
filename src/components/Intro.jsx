import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Timeline from "./Timeline";
import { forwardRef } from "react";
import Footer from "./Footer";

const Intro = forwardRef(() => {
  return (
    <>
      <div className="bg-neutral-300 dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter items-center flex">
        <div className="max-w-5xl w-11/12 mx-auto ">
          <div className="flex justify-center flex-col pt-20 pb-6 text-xl md:text-2xl ">
            <div className="wrap">
              <p className="typing text-slate-700 dark:text-orange-300 ">
                {" "}
                WELCOME . . . . . . . . . . . .{" "}
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl mb-1 md:mb-3 font-bold cursor-pointer">
              HI👋, I&apos;m Widya Febriandaru
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
              You can call me Daru, I&apos;m a Fullstack Developer
            </p>
            <div className="flex flex-row"></div>
          </div>
        </div>
      </div>
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
});
Intro.displayName = "Intro";
export default Intro;
