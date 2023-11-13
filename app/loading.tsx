import React from 'react'
import { GetRecipes } from './page'
import SkeletonCard from '@/components/SkeletonCard'

export default async function Loading() {

    
  return (
    <main>
        <div className='grid grid-cols-3 gap-8'>
        {"abcdefghi".split("").map(i =>(
            <>
            <SkeletonCard key={i}/>
            </>
        ))}
        </div>
    </main>
  )
}
