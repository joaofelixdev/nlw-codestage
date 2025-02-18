import Image from "next/image";

import medalGold from "@/assets/medal-gold.svg";
import medalSilver from "@/assets/medal-silver.svg";
import medalCooper from "@/assets/medal-cooper.svg";

export function Ranking() {
    return (
        <div className="w-full max-w-[440px] space-y-5">
            <h2 className="text-gray-200 font-heading text-xl font-semibold leading-none">
                Ranking de indicações
            </h2>

            <div className="space-y-5">
                <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-4 space-y-2 flex flex-col justify-between">
                    <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">1º</span> | João Felix
                    </span>

                    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                        1030
                    </span>

                    <Image src={medalGold} alt="Medalha de ouro" className="absolute top-0 right-8" />
                </div>

                <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-4 space-y-2 flex flex-col justify-between">
                    <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">2º</span> | Julia Machado Lopes
                    </span>

                    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                        1020
                    </span>

                    <Image src={medalSilver} alt="Medalha de prata" className="absolute top-0 right-8" />
                </div>

                <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-4 space-y-2 flex flex-col justify-between">
                    <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">3º</span> | Theo Machado Lopes
                    </span>

                    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                        1010
                    </span>

                    <Image src={medalCooper} alt="Medalha de bronze" className="absolute top-0 right-8" />
                </div>
            </div>
        </div>
    );
}