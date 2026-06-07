import { useEffect } from "react";
import { useState } from "react";

const steps = [
  "Accessing repository...",
  "Reading README...",
  "Detecting frameworks...",
  "Analyzing dependencies...",
  "Mapping architecture...",
  "Building repository context...",
  "Assistant ready.",
];

const LoadingSequence =
  () => {
    const [
      current,
      setCurrent,
    ] = useState(0);

    useEffect(() => {
      const interval =
        setInterval(() => {
          setCurrent(
            (prev) =>
              prev + 1
          );
        }, 700);

      return () =>
        clearInterval(
          interval
        );
    }, []);

    return (
      <div className="space-y-4 border border-white/5 bg-white/[0.02] p-8">

        {steps
          .slice(
            0,
            current + 1
          )
          .map((step) => (
            <p
              key={step}
              className="mono text-sm text-zinc-400"
            >
              {">"} {step}
            </p>
          ))}
      </div>
    );
  };

export default LoadingSequence;