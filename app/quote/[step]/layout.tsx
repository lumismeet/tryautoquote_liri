import QuizProgress from "@/components/QuizProgress";

export default async function QuoteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ step: string }>;
}) {
  const { step } = await params;

  return (
    <>
      {/* {step !== "16" && <QuizProgress step={step} />} */}
      {children}
    </>
  );
}
