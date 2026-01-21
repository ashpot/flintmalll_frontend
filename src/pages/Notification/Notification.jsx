// this components handles display of useful account information to the user.
import React, { useState } from 'react';
import { cn } from '../../lib/Utils';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const MessageCard = ()=>{
    const [isRead, setIsRead] = useState(false)
    return (
        <div className='flex flex-col gap-4 border-b border-gray-200 pb-5 pt-12 hover:cursor-pointer'>
            <div className='flex justify-between tracking-wider font-semibold'>
                <div className='sm:max-w-[55%] max-w-[75%] sm:text-base text-sm'>Your ad "Office Chair Set" is under review and will go live shortly.</div>
                <div className='sm:h-3 sm:w-3 h-2 w-2 rounded-full bg-[#00BEF3]'></div>
            </div>
            <div className='flex justify-end sm:text-base text-sm'>
                5 minutes ago
            </div>
        </div>
    ) 
}

const Notification = () => {
    const navigate = useNavigate();
    const buttonClasses = cn('sm:text-base text-sm flex gap-1 font-semibold bg-[#E5F9FE]', 
        'text-[var(--color-header)] sm:px-3 sm:py-2 py-1.5 px-1 rounded-2xl');
    const spanClass = 'font-bold'
  return (
    <div className='sm:bg-[#F7F7F7]'>
      <title>Flintmall - Notifications</title>
          <nav className={cn('text-[var(--color-header)] flex items-center justify-between px-6 md:px-36 py-4 md:py-8 shadow-sm bg-white',
            'text-xl xs:text-2xl sm:text-3xl font-bold tracking-[0.015]'
          )}>
            <button onClick={()=>navigate(-1)}>
                <IoIosArrowBack size={25} className='text-[var(--color-header)]'/>
            </button>
            <h1>Notifications</h1>
            <div></div>
          </nav>
          <main className='min-h-screen md:max-w-3xl sm:max-w-xl mx-auto py-10 space-y-6'>
            <section className='rounded-2xl shadow-sm bg-white sm:px-20 sm:py-16 px-5'>
                {/* filters */}
                <nav className='flex justify-between sm:mb-10'>
                    <div className='flex sm:gap-5 gap-1.5'>
                        <button className={cn(buttonClasses)}>All <span className={`${spanClass}`}>30</span></button>
                        <button className={cn(buttonClasses)}>Unread <span className={`${spanClass}`}>18</span></button>
                    </div>
                    <button className='font-semibold sm:text-base text-sm text-[var(--color-header)]'>Mark all as read</button>
                </nav>

                {/* notifications from backend api based on user interaction */}
                <MessageCard />
                <MessageCard />
                <MessageCard />
                <MessageCard />
            </section>
        </main>
    </div>
  )
}

export default Notification;
