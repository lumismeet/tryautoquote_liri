import Question1 from "@/components/Question1";
import Question2 from "@/components/Question2";
import Question3 from "@/components/Question3";
import Question4 from "@/components/Question4";
import Question5 from "@/components/Question5";
import Question6 from "@/components/Question6";
import Question7 from "@/components/Question7";
import Question8 from "@/components/Question8";
import Question9 from "@/components/Question9";
import Question10 from "@/components/Question10";
import Question11 from "@/components/Question11";
import Question12 from "@/components/Question12";
import Question13 from "@/components/Question13";
import Question14 from "@/components/Question14";
import Question15 from "@/components/Question15";
import Results from "@/components/Results";
import { notFound } from "next/navigation";
import Question1_map from "@/components/Question1_map";

export default async function QuoteStep({
  params,
}: {
  params: Promise<{ step: string }>;
}) {
  const { step } = await params;

if(step === "1_map") return <Question1_map />;
if (step === "1") return <Question1 />;
if (step === "2") return <Question2 />;
if (step === "3") return <Question3 />;
if (step === "4") return <Question4 />;
if (step === "5") return <Question5 />;
if (step === "6") return <Question6 />;
if (step === "7") return <Question7 />;
if (step === "8") return <Question8 />;
if (step === "9") return <Question9 />;
if (step === "10") return <Question10 />;
if (step === "11") return <Question11 />;
if (step === "12") return <Question12 />;
if (step === "13") return <Question13 />;
if (step === "14") return <Question14 />;
if (step === "15") return <Question15 />;
if (step === "16") return <Results />;
return notFound();
}











