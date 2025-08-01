"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Responsive scale
  const scaleDimensions = () => (isMobile ? [0.95, 1] : [1.05, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div
      className="
        relative
        h-[36rem] md:h-[80rem]
        flex items-center justify-center
        p-2 md:p-20
        bg-white font-poppins text-white
        overflow-hidden
      "
      ref={containerRef}
    >
      {/* Grid Background */}
      <div
        className="
          absolute inset-0 z-0
          [background-size:40px_40px]
          [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
          pointer-events-none
        "
        aria-hidden="true"
      />
      <div
        className="py-6 md:py-40 w-full relative z-10"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} isMobile={isMobile}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => (
  <motion.div
    style={{
      translateY: translate,
    }}
    className="max-w-2xl md:max-w-5xl mx-auto text-center font-poppins text-black md:text-white"
  >
    {titleComponent}
  </motion.div>
);

export const Card = ({
  rotate,
  scale,
  translate,
  children,
  isMobile,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  isMobile: boolean;
}) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow:
        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
    }}
    className={`
      max-w-full md:max-w-5xl
      -mt-6 md:-mt-12
      mx-auto
      h-[24rem] md:h-[41rem]
      w-full
      p-2 ${isMobile ? "py-4" : "md:p-6"}
      bg-white rounded-[20px] md:rounded-[30px]
      shadow-2xl font-poppins text-black
      transition-all
    `}
  >
    <div className="h-full w-full overflow-hidden rounded-xl md:rounded-2xl bg-white p-2 md:p-4 font-poppins text-black">
      {children}
    </div>
  </motion.div>
);
