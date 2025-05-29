'use client'
import React from 'react'
import { motion } from 'framer-motion' // Perbaiki import motion
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image' 

import { featureData } from '@/constants'
import FeatureCard from './FeatureCard'
import * as variants from '@/lib/motionVariants'

const Features = () => {
    return (
        <section className="py-16">
            <div className="container">
                <motion.div
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <motion.p variants={variants.fadeInUp} className="section-subtitle">
                        {featureData.sectionSubtitle}
                    </motion.p>
                    <motion.h2 variants={variants.fadeInUp} className="section-title">
                        {featureData.sectionTitle}
                    </motion.h2>
                    <motion.p variants={variants.fadeInUp} className="section-text">
                        {featureData.sectionText}
                    </motion.p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
                    {featureData.features.map(({ icon, iconBoxColor, title, desc, imgSrc }, index) => (
                        <FeatureCard
                            key={index}
                            classes={
                                index < 2
                                    ? 'md:col-span-2 xl:col-span-3'
                                    : 'xl:col-span-2'
                            }
                        >
                            <>
                                <div className="p-6">
                                    <motion.div variants={variants.fadeInUp} className={`w-16 h-16 grid place-items-center rounded-full ${iconBoxColor}`}>
                                        {icon}
                                    </motion.div>
                                    <motion.h3 variants={variants.fadeInUp} className="text-xl font-semibold mt-4 mb-2 text-foreground">
                                        {title}
                                    </motion.h3>
                                    <motion.p variants={variants.fadeInUp} className="text-muted-foreground line-clamp-2">
                                        {desc}
                                    </motion.p>
                                    <motion.div variants={variants.fadeInUp}>
                                        <Button variant="ghost" className="p-2 h-auto mt-3 group">
                                            Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                        </Button>
                                    </motion.div>
                                </div>

                                {imgSrc && (
                                    <motion.figure variants={variants.fadeInUp} className="p-6 pt-0">
                                        <Image
                                            src={imgSrc}
                                            alt={title}
                                            width={500}
                                            height={300}
                                            className="rounded-lg shadow-md w-full h-auto object-cover"
                                        />
                                    </motion.figure>
                                )}
                            </>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
