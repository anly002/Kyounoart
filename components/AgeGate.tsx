"use client";

import { useEffect, useState } from "react";

type Status = "asking" | "denied" | "allowed";

export default function AgeGate() {
  const [status, setStatus] = useState<Status>("asking");

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (status === "allowed") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [status]);

  const allow = () => {
    window.scrollTo(0, 0);
    setStatus("allowed");
  };

  if (status === "allowed") return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Age verification"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 px-6 text-center backdrop-blur-md"
    >
      <div className="w-full max-w-md rounded-lg bg-white px-8 py-10 text-neutral-900 shadow-2xl sm:px-10 sm:py-12">
        {status === "asking" ? (
          <>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-black tracking-tight sm:text-4xl">
              <span className="text-[#7dd3b0]">Kyo</span>
              <span className="text-pink-300">uno</span>
            </h2>
            <p className="mt-5 text-xs tracking-[0.35em] text-neutral-500 uppercase">
              Age Verification
            </p>
            <p className="mt-6 text-sm text-neutral-700 sm:text-base">
              This site contains artwork intended for mature audiences.
              <br />
              Are you 18 years of age or older?
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:gap-4">
              <button
                type="button"
                onClick={allow}
                className="cursor-pointer bg-neutral-900 px-6 py-3 text-xs font-semibold tracking-[0.25em] text-white uppercase transition-colors hover:bg-neutral-700"
              >
                Yes, I am 18+
              </button>
              <button
                type="button"
                onClick={() => setStatus("denied")}
                className="cursor-pointer border border-neutral-300 px-6 py-3 text-xs font-semibold tracking-[0.25em] text-neutral-600 uppercase transition-colors hover:border-neutral-500 hover:text-neutral-900"
              >
                No, I am under 18
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-black tracking-tight sm:text-3xl">
              Access Restricted
            </h2>
            <p className="mt-5 text-sm text-neutral-700 sm:text-base">
              You must be at least 18 years old to view this site.
            </p>
            <p className="mt-2 text-xs text-neutral-500">
              Please close this tab to leave.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
