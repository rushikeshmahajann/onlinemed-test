"use client";
import Button from "@/components/button";
import React, { useState, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdCheckCircle } from "react-icons/md";
import { z } from "zod";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";
import OTPInput from "react-otp-input";

const Form = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const emailCardRef = useRef<HTMLDivElement>(null);
  const emailSchema = z.string().email();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value.length > 0) {
      const valid = emailSchema.safeParse(value).success;
      setIsValid(valid);

      if (valid && !isLoading) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsAnimating(true);
        }, 1000);
      }
    } else {
      setIsValid(false);
      setIsLoading(false);
    }
  };

  const handleOtpChange = (otpValue: string) => {
    setOtp(otpValue);
  };

  const handleChangeEmail = () => {
    if (emailCardRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          // Clear and focus input after animation finishes
          setEmail("");
          setIsAnimating(false);
          setOtp("");
          inputRef?.current?.focus();
        },
      });

      tl.to(".otp-area", {
        opacity: 0,
        y: 40,
        duration: 0.4,
        ease: "power3.inOut",
      })
        .to(
          ".input-email",
          {
            opacity: 0,
            x: -40,
            duration: 0.4,
            ease: "power3.inOut",
          },
          "<"
        )
        .to(emailCardRef.current, {
          height: "3rem",
          duration: 0.6,
          ease: "power3.inOut",
        });
    }
  };

  // Animation
  useGSAP(() => {
    if (isAnimating && emailCardRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        emailCardRef.current,
        { height: "3rem" },
        {
          height: "17rem",
          duration: 0.8,
          ease: "power3.inOut",
        }
      )
        .from(
          ".input-email",
          {
            opacity: 0,
            x: -40,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".otp-area",
          {
            opacity: 0,
            y: 40,
            duration: 0.5,
            ease: "power3.out",
          },
          "<" // start at same time as input-email
        )
        .to(".email-card-header", {
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
    }
  }, [isAnimating]);

  return (
    <div className="w-full mx-auto flex flex-col relative max-w-[660px]">
      <form className="font-satoshi space-y-6 w-full pb-24 md:pb-0" action="#">
        <span className="tracking-[-1px] text-blue-500 font-bold text-[20px]">
          Step 3<span className="text-neutral-400">/9</span>
        </span>
        <h2 className="tracking-[-1px] text-[#0D0D12] mb-2.5 font-bold text-2xl md:text-[32px]">
          What is your email?
        </h2>
        <p className="text-sm md:text-base text-[#353849] mb-6">
          This is where we send the note
        </p>

        <div className="space-y-4">
          <div
            ref={emailCardRef}
            className={`${isAnimating? "overflow-hidden" : null} email-card relative w-full border border-[#4B556326] rounded-lg`}
          >
            {!isAnimating ? (
              <input
                ref={inputRef}
                className="w-full px-4.5 py-2.5 rounded-lg text-primary placeholder:text-[#0D0D12] focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-[#2563EB40]"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            ) : (
              <>
                <div className="w-full px-3 md:px-4.5 py-2 md:py-2.5 flex justify-between items-center bg-[#E8F0FD]">
                  <p className="email-card-header text-blue-500 opacity-0 text-sm md:text-base">
                    Email
                  </p>
                  <div className="input-email">
                    <TextShimmer
                      duration={2}
                      className="text-sm md:text-base font-medium [--base-color:var(--color-blue-500)] [--base-gradient-color:var(--color-blue-200)] dark:[--base-color:var(--color-blue-700)] dark:[--base-gradient-color:var(--color-blue-400)]"
                    >
                      {email}
                    </TextShimmer>
                  </div>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleChangeEmail();
                    }}
                    className="email-card-header text-[#353849] underline decoration-dotted underline-offset-4 opacity-0 text-sm md:text-base"
                    href=""
                  >
                    Change
                  </a>
                </div>

                <div className="otp-area px-3 md:px-4 py-3 md:py-4">
                  <h3 className="font-satoshi text-sm md:text-base font-medium text-primary mb-1 md:mb-2">
                    Enter verification code
                  </h3>
                  <p className="text-xs md:text-base text-[#353849] mb-3 md:mb-4">
                    Enter the code sent to{" "}
                    <span className="font-medium">{email}</span>.
                  </p>

                  <div className="mt-3 md:mt-4">
                    <OTPInput
                      value={otp}
                      onChange={handleOtpChange}
                      numInputs={4}
                      renderSeparator={<span className="mx-1 md:mx-2"></span>}
                      renderInput={(props) => (
                        <div className="px-2 md:px-3 rounded-lg border border-[#4B556326] hover:border-blue-500">
                          <input
                            {...props}
                            className="h-10 md:h-12 text-center text-primary text-base md:text-lg font-medium bg-white focus:ring-0 focus:outline-0"
                            placeholder="0"
                          />
                        </div>
                      )}
                    />
                  </div>

                  {otp.length === 4 ? (
                    <div className="flex items-center gap-2 text-green-600 text-xs md:text-sm font-medium mt-2 md:mt-3">
                      <MdCheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                      Verification code entered successfully
                    </div>
                  ) : (
                    <p className="text-xs md:text-sm mt-2 md:mt-3">
                      Didn&apos;t receive a code?{" "}
                      <a className="font-medium text-blue-500" href="#">
                        Send again
                      </a>
                    </p>
                  )}
                </div>
              </>
            )}

            {isLoading && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:block md:mt-6">
          <div className="flex justify-between items-center">
          <button className="text-blue-500 font-bold text-base flex items-center gap-2">
            <IoIosArrowBack />
            Back
          </button>

          <Button
            title="Next"
            className="bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
            onClick={() => {}}
            disabled={otp.length !== 4}
          />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
