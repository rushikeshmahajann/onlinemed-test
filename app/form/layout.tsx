import React from "react";
import Image from "next/image";
import ReviewsSection from "@/components/reviews-section";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen max-h-screen overflow-hidden bg-blue-200 flex p-2.5">
      <div className="hidden md:flex w-[50vw] lg:w-[30%] p-3.5  flex-col justify-between">
        <div className="text-center md:text-left">
          <a
            className="font-satoshi text-primary font-bold tracking-[-0.5px] text-xl"
            href=""
          >
            OnlineMed
          </a>
          <div className="flex flex-col md:gap-4 mt-12">
            <div className="flex gap-1 mx-auto md:ml-0">
              <Image
                alt="Approved Bold icon"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                src="/check.svg"
              />
              <span className="font-satoshi text-sm font-bold tracking-normal text-blue-500">
                Money Back Guarantee
              </span>
            </div>

            <h1 className="font-satoshi font-bold text-primary tracking-[-1px] text-[32px] md:w-3/4 mt-4 md:mt-0 leading-12">
              Your <span className="text-blue-500"> Work </span>Note is Minutes
              Away
            </h1>
            <p className="font-satoshi font-light text-primary text-base leading-6">
            Note: Due to capacity we are currently only able to provide a limited number of notes per day. To see if you qualify please fill out the following short survey!
            </p>


          </div>
        </div>

        <div>
          <ReviewsSection />
        </div>
      </div>
      <main className="w-full md:w-[50vw] h-full lg:w-full rounded-2xl px-4 py-8 md:p-6 bg-white shadow-[0px_6px_15px_0px_#1F243F1A] md:flex md:flex-col md:justify-center relative">
        {children}
      </main>
    </div>
  );
}
