"use client";

import { Car } from "lucide-react";

const STEP_ORDER: Record<string, number> = {
  "1_map": 1,
  "1": 2,  "2": 3,  "3": 4,  "4": 5,  "5": 6,
  "6": 7,  "7": 8,  "8": 9,  "9": 10, "10": 11,
  "11": 12, "12": 13, "13": 14, "14": 15, "15": 16,
};

const TOTAL = 16;

export default function QuizProgress({ step }: { step: string }) {
  const current = STEP_ORDER[step] ?? 1;
  const percent = Math.round((current / TOTAL) * 100);

  return (
    <div className="fixed top-[68px] left-0 w-full z-40 bg-white border-b border-[#DDE9F7] px-8 py-4">
      <div className="max-w-3xl mx-auto flex items-center gap-4">

        {/* Track */}
        <div className="relative flex-1 h-3 bg-[#DDE9F7] rounded-full overflow-visible">

          {/* Fill */}
          <div
            className="absolute top-0 left-0 h-full bg-[#2B5BA8] rounded-full"
            style={{
              width: `${percent}%`,
              transition: "width 600ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />

          {/* Car icon riding the tip */}
          <div
            className="absolute -top-2.5"
            style={{
              left: `calc(${percent}% - 11px)`,
              transition: "left 600ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <Car className="w-6 h-6 text-[#042C53] drop-shadow-sm" fill="#042C53" />
          </div>

        </div>

        {/* Step label */}
        <span className="text-xs font-semibold text-[#2B5BA8] whitespace-nowrap shrink-0 tabular-nums">
          {current} / {TOTAL}
        </span>

      </div>
    </div>
  );
}
