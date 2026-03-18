"use client";
import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  limit: number;
  text: string;
}

function CounterItem({ limit, text }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, limit, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.round(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, limit]);

  return (
    <div className="flex items-center gap-4 py-6 md:py-0 md:px-12 justify-center lg:justify-start" ref={ref}>
      <div
        className="text-[50px] md:text-[60px] font-black leading-none min-w-[90px]"
        style={{ color: '#432CF3' }}
      >
        +{count}
      </div>
      <div className="max-w-[120px]">
        <p className="text-[14px] leading-tight font-bold text-gray-500 uppercase font-sans">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function Number() {
  return (
    <section className="flex justify-center py-20 bg-white">
      <div className="max-w-[1400px] w-full px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-gray-200">
          <CounterItem limit={15} text="anos entregando resultados" />
          <CounterItem limit={150} text="projetos de sucesso" />
          <CounterItem limit={40} text="especialistas no time" />
        </div>
      </div>
    </section>
  );
}
