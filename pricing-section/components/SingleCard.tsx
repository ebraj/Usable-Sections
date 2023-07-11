import React from "react";
import { CardType } from "@/types";

type Props = {
  cardInfo: CardType;
};

export default function SingleCard({ cardInfo }: Props) {
  return (
    <div className="bg-white rounded-md p-5 border border-gray-100 custom-shadow space-y-6 flex flex-col w-full">
      {/* Title */}
      <h2
        className={`${cardInfo.applyGradient} p-5 rounded-md text-center font-black`}
      >
        {cardInfo.level}
      </h2>

      <div className="space-y-2 text-center p-5 grow">
        <h2 className="text-3xl">
          $<span className="text-6xl font-bold">{cardInfo.price}</span>/mo
        </h2>
        <p className="uppercase font-bold">{cardInfo.para1}</p>
        <p>{cardInfo.para2}</p>
      </div>

      <div>
        <button
          className={`${
            cardInfo.btnDark
              ? "bg-gray-900 text-gray-100"
              : "border-gray-300 text-gray-900"
          } px-5 py-4 w-full rounded-md border hover:scale-105 transition-all`}
        >
          Get Started
        </button>
      </div>

      <ul className="space-y-3">
        <li>{cardInfo.tick ? "✔️" : "❌"} 3 new projects/month</li>
        <li>{cardInfo.tick ? "✔️" : "❌"} Basic Interaction</li>
        <li>✔️ Assets Library</li>
      </ul>
    </div>
  );
}
