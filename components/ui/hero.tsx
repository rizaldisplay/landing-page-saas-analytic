"use client";

import React from "react";
import Image from "next/image";
import { useRef } from "react";


import { heroData } from "@/constants";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTitle, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion, Variants, useScroll, useSpring, useTransform } from "motion/react";
import ReactPlayer from "react-player";

// Animation variants for motion components
const heroVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const heroChildVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

import { heroBanner } from "@/public";
import { CirclePlay } from "lucide-react";
import { DialogTrigger } from "@radix-ui/react-dialog";

const Hero = () => {
  const heroBannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroBannerRef,
    offset: ["start 1080px", "50% start"],
  });

  const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);
  const scale = useSpring(scrollYTransform, {
    stiffness: 300,
    damping: 30,
    mass: 0.001,
  });

  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
      <div className="container px-4 sm:px-6">
        {/* Content Section */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            variants={heroVariant}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center justify-center px-4 py-2 mb-6 md:mb-8 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-border/50 shadow-sm"
          >
            <span className="text-sm font-medium text-primary">
              {heroData.sectionSubtitle}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={heroChildVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8"
          >
            {heroData.sectionTitle}
            <span className="relative inline-block ms-3 text-primary">
              {heroData.decoTitle}
              <span className="absolute inset-x-0 -bottom-1 h-2 bg-primary/10 rounded-full -z-10" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={heroChildVariants}
            initial="hidden"
            animate="visible"
            className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto"
          >
            {heroData.sectionText}
          </motion.p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-8 md:mt-10">
            <Button size="lg" className="px-8">
              Start Free Trial
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="px-8">
                  <CirclePlay className="w-4 h-4 me-2" />
                  Watch Demo
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-3xl">
                <DialogTitle className="text-lg font-semibold">
                  Watch Demo
                </DialogTitle>
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer
                    url="https://youtu.be/cvd2XGJBgLg"
                    style={{
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  ></ReactPlayer>
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative mt-12 md:mt-16 lg:mt-20 max-w-6xl mx-auto">
          <motion.div
            className="relative aspect-video rounded-2xl bg-background/80 border border-border/50 shadow-2xl overflow-hidden backdrop-blur-sm"
            initial={{ y: 120, opacity: 0, filter: "blur(20px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }} 
            ref={heroBannerRef}
            // style={{ scale}}
          >
            <Image
              src={heroBanner}
              alt="Analytix dashboard"
              fill
              className="object-cover object-top"
              quality={100}
              priority
            />
          </motion.div>

          {/* Glow Effects */}
          <motion.div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl -z-10" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1}} transition={{ duration: 2, delay: 0.5, ease: 'backInOut' }}/>
          <motion.div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl -z-10" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1}} transition={{ duration: 2, delay: 0.5, ease: 'backInOut' }}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
