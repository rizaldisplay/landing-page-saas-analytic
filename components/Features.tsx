'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

import { featureData } from '@/constants'
import FeatureCard from './FeatureCard'

const Features = () => {
    return (
        <section>
            <div className='container'>
                <div className='section-head'>
                    <motion.p className='section-subtitle'>
                        {featureData.sectionSubtitle}
                    </motion.p>

                    <motion.h2 className='section-title'>
                        {featureData.sectionTitle}
                    </motion.h2>

                    <motion.p className='section-text'>
                        {featureData.sectionText}
                    </motion.p>
                </div>

                <div className=''>
                    {featureData.features.map(({ icon, iconBoxColor, title, desc, imgSrc }, index) => (
                        <div>
                            <FeatureCard key={index}>
                                <>
                                    <div className={` ${iconBoxColor} `}>
                                        <motion.div className={` ${iconBoxColor} `}>
                                            {icon}
                                        </motion.div>
                                        <motion.h3 className=''>
                                            {title}
                                        </motion.h3>
                                        <motion.p>
                                            {desc}
                                        </motion.p>
                                        <motion.div>
                                            <Button variant='link' className=''>
                                                Learn More <ArrowRight />
                                            </Button>
                                        </motion.div>
                                    </div>

                                    {imgSrc && (
                                        <motion.figure className=''>
                                            <Image src={imgSrc} alt=''/>
                                        </motion.figure>
                                    )}
                                </> 
                            </FeatureCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;