'use client'
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'
import { motion } from "motion/react"
import * as variants from '@/lib/motionVariants'
import { overviewData, reviewData } from '@/constants'
import { Quote } from 'lucide-react'

const Review = () => {
    return (
        <section>
            <div className='section'>
                <div className='container'>
                    <div className='section-head'>
                        <motion.p variants={variants.fadeInUp} initial='start' whileInView='end' viewport={{ once: true }} className='section-subtitle'>
                            {overviewData.sectionSubtitle}
                        </motion.p>

                        <motion.h2 variants={variants.fadeInUp} initial='start' whileInView='end' viewport={{ once: true }} className='section-title'>
                            {overviewData.sectionTitle}
                        </motion.h2>

                        <motion.p variants={variants.fadeInUp} initial='start' whileInView='end' viewport={{ once: true }} className='section-text'>
                            {overviewData.sectionText}
                        </motion.p>
                    </div>

                    <motion.div
                        className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
                        variants={variants.staggerContainer}
                        initial='start'
                        whileInView='end'
                        viewport={{ once: true }}
                    >
                        {reviewData.reviewCard.map(({ title, text, reviewAuthor, date }, index) => (
                            <motion.div key={index} variants={variants.fadeInUp}>
                                <Card className='relative'>
                                    <CardHeader>
                                        <CardTitle className='text-lg'>
                                            {title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent>
                                        <p className='text-sm text-muted-foreground line-clamp-3'>
                                            {text}
                                        </p>
                                    </CardContent>

                                    <CardFooter className='block'>
                                        <p>
                                            {reviewAuthor}
                                        </p>

                                        <p className='text-xs text text-muted-foreground'>
                                            {date}
                                        </p>
                                    </CardFooter>

                                    <div className='absolute bottom-0 right-3 opacity-[0.02]'>
                                        <Quote size={80} />
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Review;