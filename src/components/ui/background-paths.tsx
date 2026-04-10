"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="h-full w-full text-slate-950"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.08 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.45 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.45, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 18 + Math.random() * 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

type HeroAction = {
  href: string;
  label: string;
  external?: boolean;
  download?: boolean;
};

export function BackgroundPaths({
  title = "Background Paths",
  eyebrow,
  description,
  primaryAction,
  secondaryAction,
  media,
  className,
}: {
  title?: string;
  eyebrow?: string;
  description?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  media?: ReactNode;
  className?: string;
}) {
  const words = title.split(" ");

  const renderAction = (
    action: HeroAction | undefined,
    variant: "default" | "ghost",
  ) => {
    if (!action) {
      return null;
    }

    const isExternal = action.external ?? action.href.startsWith("http");

    return (
      <Button
        asChild
        size="lg"
        variant={variant}
        className={cn(
          "rounded-full border px-7 text-base font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5",
          variant === "default" &&
            "border-slate-900 bg-slate-950 text-white hover:bg-slate-900",
          variant === "ghost" &&
            "border-slate-200 bg-white/85 text-slate-900 backdrop-blur hover:bg-white",
        )}
      >
        <a
          href={action.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          download={action.download}
        >
          {action.label}
          {isExternal && <ArrowRight className="ml-2 h-4 w-4" />}
        </a>
      </Button>
    );
  };

  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-white bg-mesh",
        className,
      )}
    >
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-teal-500/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid w-full gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {eyebrow ? <div className="eyebrow mb-6">{eyebrow}</div> : null}

            <h1 className="text-5xl font-bold tracking-[-0.06em] text-slate-950 sm:text-7xl xl:text-[6.75rem]">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="mr-4 inline-block last:mr-0"
                >
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: wordIndex * 0.08 + letterIndex * 0.025,
                        type: "spring",
                        stiffness: 150,
                        damping: 24,
                      }}
                      className="inline-block bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600 bg-clip-text text-transparent"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            {description ? (
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
                className="mt-8 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl"
              >
                {description}
              </motion.p>
            ) : null}

            {(primaryAction || secondaryAction) && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
                className="mt-10 flex flex-wrap gap-4"
              >
                {renderAction(primaryAction, "default")}
                {renderAction(secondaryAction, "ghost")}
              </motion.div>
            )}
          </motion.div>

          {media ? (
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="relative lg:justify-self-end"
            >
              {media}
            </motion.div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
