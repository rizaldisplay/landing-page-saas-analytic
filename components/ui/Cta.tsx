'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import * as variants from '@/lib/motionVariants';
import { ctaData } from '@/constants';
import { motion } from "motion/react";
import Image from 'next/image';
import { ctaBanner } from '@/public';

const Cta = () => {
    return (
        <section>
            <div className='section'>
                <div className='container'>
                    <motion.div
                        variants={variants.fadeInUp}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: true }}
                        className="bg-indigo-500 rounded-xl border-t border-primary-foreground/30 overflow-hidden grid grid-cols-1 lg:grid-cols-2 lg:items-center"
                    >
                        {/* Text Section */}
                        <div className="p-6 md:p-12 xl:p-16 order-2 lg:order-1">
                            <motion.h2
                                variants={variants.fadeIn}
                                initial="start"
                                whileInView="end"
                                viewport={{ once: true }}
                                className="text-[26px] leading-tight font-semibold mb-6 capitalize sm:text-[34px] md:text-[40px] lg:text-[46px] lg:mb-10"
                            >
                                {ctaData.text}
                            </motion.h2>

                            <motion.div
                                variants={variants.fadeInUp}
                                initial="start"
                                whileInView="end"
                                viewport={{ once: true }}
                                className="flex items-center gap-3 lg:gap-4"
                            >
                                <Button className="bg-foreground text-background hover:bg-foreground/95">
                                    Free Trial
                                </Button>

                                <Button variant="outline" className="!bg-transparent border-current">
                                    Pricing & Plans
                                </Button>
                            </motion.div>
                        </div>

                        {/* Image Section */}
                        <motion.figure
                            variants={variants.fadeInLeft}
                            initial="start"
                            whileInView="end"
                            viewport={{ once: true }}
                            className="order-1 lg:order-2 flex justify-center lg:justify-end p-6 lg:p-0"
                        >
                            <div className="relative w-full max-w-[500px] h-[250px] sm:h-[300px] lg:h-[400px] lg:w-[500px]">
                                <Image
                                    src={ctaBanner}
                                    alt="banner"
                                    fill
                                    className="object-contain object-right"
                                />
                            </div>
                        </motion.figure>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Cta;