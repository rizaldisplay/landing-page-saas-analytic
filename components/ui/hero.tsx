import React from "react";
import { heroData } from "@/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { heroBanner } from "@/public";

const Hero = () => {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
      <div className="container px-4 sm:px-6">
        {/* Content Section */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 md:mb-8 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-border/50 shadow-sm">
            <span className="text-sm font-medium text-primary">
              {heroData.sectionSubtitle}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8">
            {heroData.sectionTitle}
            <span className="relative inline-block ms-3 text-primary">
              {heroData.decoTitle}
              <span className="absolute inset-x-0 -bottom-1 h-2 bg-primary/10 rounded-full -z-10" />
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            {heroData.sectionText}
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-8 md:mt-10">
            <Button size="lg" className="px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative mt-12 md:mt-16 lg:mt-20 max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-2xl bg-background/80 border border-border/50 shadow-2xl overflow-hidden backdrop-blur-sm">
            <Image
              src={heroBanner}
              alt="Analytix dashboard"
              fill
              className="object-cover object-top"
              quality={100}
              priority
            />
          </div>

          {/* Glow Effects */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl -z-10" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;