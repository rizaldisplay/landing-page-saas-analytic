import React, { JSX } from 'react'
import { motion } from 'motion/react'

type FeatureCardProps = {
    classes?: string,
    children: JSX.Element
}

const FeatureCard = ({ classes, children } : FeatureCardProps) => {
  return (
    <motion.div className={`relative overflow-hidden p-[1px] ring ring-index ${classes}`}>
        <div className={` ${classes} `}>
            {children}
        </div>
    </motion.div>
  )
}

export default FeatureCard;