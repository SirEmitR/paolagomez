'use client'
import useObserver from '@/hooks/useObserver'
import React, { useEffect } from 'react'
const Observer = () => {
    const [observer, setElements, entries] = useObserver({
        threshold:0.1,
        root:null
    })
    useEffect(() =>{
        const elementos = document.querySelectorAll(`.hidden_lazy`)
        const elementosArray = Array.from(elementos).filter((elemento) => elemento !== null)
        setElements(elementosArray)
    }, [setElements])
    useEffect(()=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                const lazy = entry.target
                lazy.classList.remove('hidden_lazy')
                lazy.classList.add('aparicion')
                observer.unobserve(lazy)
            }
        })
    }, [entries, observer])
  return (
    <div></div>
  )
}

export default Observer