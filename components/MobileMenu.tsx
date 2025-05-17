'use client'

import React from 'react'
import { MenuItem } from '@/types'
import { Button } from './ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from './ui/separator'

import { ChevronsUpDown } from 'lucide-react'


type MobileMenuProps = {
  navMenu: MenuItem[]
}

const MobileMenu = ({ navMenu }: MobileMenuProps) => {
  return (
    <div>
      <ul className='mb-3'>
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={index} className='w-full'>
            {submenu ? (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between items-center py-2">
                    <span>{label}</span>
                    <span className="flex items-center">
                      <ChevronsUpDown className="h-4 w-4" />
                    </span>
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className='ps-2'>
                  <ul className='border-l border-l-muted-foreground/20'>
                    {submenu.map(({ href, label }, index) => (
                      <li key={index}>
                        <Button asChild variant='ghost' className='w-full justify-start text-muted-foreground hover:bg-transparent'>
                          <a href={href}> {label} </a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button asChild variant="ghost" className='w-full justify-start items-center py-2'>
                <a href={href}> {label} </a>
              </Button>
            )}
          </li>
        ))
        }
      </ul >

      <Separator className='bg-muted-foreground/20' />
      <div className='flex items-center gap-2 mt-4'>
        <Button variant='ghost' className='w-1/2 h-10 px-4'>
          Sign In
        </Button>
        <Button variant='ghost' className='w-1/2 h-10 px-4 text-white bg-indigo-600 hover:bg-indigo-700'>
          Free Trial
        </Button>
      </div>
    </div >
  )
}

export default MobileMenu;