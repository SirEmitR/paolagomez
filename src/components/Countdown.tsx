'use client'
import React, { useEffect, useState } from 'react'

const Countdown = (json: any) => {
    const { fecha } = json?.data
    const data = json?.data
    const [timerDay, setTimerDay] = useState('')
    const [timerHour, setTimerHour] = useState('')
    const [timerMinute, setTimerMinute] = useState('')
    const [timerSecond, setTimerSecond] = useState('')
    let interval: any
    const startTimer = (date: any) =>{
        interval = setInterval(() =>{
            const now = new Date().getTime()
            const dinstance = date - now

            //Days
            const days = ('0' + Math.floor(dinstance / (24 * 60 * 60 * 1000))).slice(-2)
            //Hours
            const hours = ('0' + Math.floor((dinstance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))).slice(-2)
            //Minutes
            const minutes = ('0' + Math.floor((dinstance % (60 * 60 * 1000)) / (1000 * 60))).slice(-2)
            //Seconds
            const seconds = ('0' + Math.floor((dinstance % (60 * 1000)) / 1000)).slice(-2)

            if(dinstance < 0){
                //stop
                clearInterval(interval.current)
            }else{
                //update
                setTimerDay(days)
                setTimerHour(hours)
                setTimerMinute(minutes)
                setTimerSecond(seconds)
            }
        }, 1000)
        
    }
    useEffect(() => {
        const newDate = new Date(fecha).getTime()
        startTimer(newDate)
    })
  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-red-500 font-semibold bg-white/10 w-max p-4 text-2xl hidden_lazy lazy'>{data?.titulo}</h2>
        <p className='hidden_lazy lazy'>Esta oferta termina en</p>
        <div className='flex gap-4 text-center hidden_lazy lazy'>
            <div className='p-2 text-xl bg-green-200/30 px-5 w-[100px] hidden_lazy lazy'>
                <div id='day' className='text-4xl'>{timerDay}</div>
                <span className='text-sm'>Días</span>
            </div>
            <div className='p-2 text-xl bg-green-200/30 px-5 w-[100px] hidden_lazy lazy'>
                <div id='hour' className='text-4xl'>{timerHour}</div>
                <span className='text-sm'>Horas</span>
            </div>
            <div className='p-2 text-xl bg-green-200/30 px-5 w-[100px] hidden_lazy lazy'>
                <div id='minute' className='text-4xl'>{timerMinute}</div>
                <span className='text-sm'>Min.</span>
            </div>
            <div className='p-2 text-xl bg-green-200/30 px-5 w-[100px] hidden_lazy lazy'>
                <div id='second' className='text-4xl'>{timerSecond}</div>
                <span className='text-sm'>Seg.</span>
            </div>
        </div>
    </div>
  )
}

export default Countdown