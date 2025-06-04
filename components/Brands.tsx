"use client";

import React from 'react'
import { motion } from "motion/react";
import { brands } from "@/public"
import Image from 'next/image'
import * as variants from '@/lib/motionVariants'

const Brands = () => {
  return (
     <section className=''>
       <div className='container'>
            <motion.p variants={variants.fadeInUp} initial='start' whileInView='end' className='text-center mb-4 md:mb-6'>
              Powering data insight for todays startup and tomorrows leader.
            </motion.p>

            <motion.div className='flex justify-center flex-wrap gap-5 md:gap-10'>
              {brands.map((brand, index) => (
                <motion.figure variants={variants.fadeInUp} initial='start' whileInView='end' viewport={{ once:true }} key={index}>
                  {/* Add content for each brand here */}
                  <Image key={index} src={brand} alt={`Brand ${index + 1}`} width={100} height={50} className='opacity-[0.6]' />
                </motion.figure>
              ))}
            </motion.div> 
        </div> 
    </section>
  )
}

export default Brands;