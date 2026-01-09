// this component handles rendering of edit for business accounts

import { FaCamera } from 'react-icons/fa6';
import profilePhoto from '/src/assets/images/profilePhoto.png';
import { useState } from 'react';
import { cn } from '../../lib/Utils';
const H1 = ({children})=>{
    return(
        <h1 className="mb-10 text-center text-[var(--color-primary)] text-3xl font-bold tracking-[0.015]">
            {children}
        </h1>
    )
}
const Label = ({children})=>{
    return (
        <label className='mb-2 text-[var(--color-label)] font-semibold'>
            {children}
        </label>
    )
}
const Input = ({type, holder, value, onChange, others})=>{
    return (
        <input
            type={type}
            placeholder={holder} 
            value={value}
            onChange={onChange}
            className={cn('w-full px-4 py-3 font-medium text-lg text-[#708CAF]', 
                'border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-secondary', 
                'placeholder:text-[#708CAF] outline-none',
            others)}
        />
    )
}
const EditBusiness = () => {
    const [loading, setLoading] = useState(false)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [socialLinks, setSocialLinks] = useState('');
    const [website, setWebsite] = useState('');
    const [regNumber, setRegNumber] = useState('');
    const [dob, setDob] = useState('');


  return (
    <div className="bg-white p-6 rounded-3xl">
        <section>
            <H1>Edit Profile</H1>

                {/* image container start */}
            <div className='flex justify-center mb-10'>
                
                <div className='relative'>
                    <div className='center flex justify-center items-center rounded-full bg-[#00BEF3] w-7 h-7'>
                        <FaCamera size={13} className='text-white'/>
                    </div>
                <img 
                    src={profilePhoto} 
                    alt="user avatar" 
                    className='w-28 h-28 rounded-full'
                />
                </div>    
            </div>
            {/* image container end */}

            <form>
                <section className='flex flex-col gap-8 mb-14'>
                    <div className="flex justify-between gap-8">
                    <div className='flex flex-col w-full'>
                        <Label>First Name</Label>
                        <Input 
                            type='text'
                            holder='Steven'
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <Label>Last Name</Label>
                        <Input 
                            type='text'
                            holder='Richard'
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex justify-between gap-8">
                    <div className='flex flex-col w-full'>
                        <Label>Business Name</Label>
                        <Input 
                            type='text'
                            holder='Galaxy Stores'
                            value={businessName}
                            onChange={(e)=>setBusinessName(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <Label>Phone Number</Label>
                        <Input 
                            type='number'
                            holder='0705849880'
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                        />
                    </div>
                </div>        

                <div className="flex justify-between gap-8">
                    <div className='flex flex-col w-full'>
                        <Label>Email Address</Label>
                        <Input 
                            type='text'
                            holder='info@galaxystores.com'
                            value={mail}
                            onChange={(e)=>setMail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <Label>Social Links</Label>
                        <Input 
                            type='text'
                            holder='@thegalaxy_stores'
                            value={socialLinks}
                            onChange={(e)=>setSocialLinks(e.target.value)}
                        />
                    </div>
                </div>   

                <div className="flex justify-between gap-8">
                    <div className='flex flex-col w-full'>
                        <Label>Website</Label>
                        <Input 
                            type='text'
                            holder='www.galaxystores.com.ng'
                            value={businessName}
                            onChange={(e)=>setBusinessName(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <Label>Registration Number</Label>
                        <Input 
                            type='number'
                            holder='113300'
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                        />
                    </div>
                </div>   

                <div className="flex justify-between gap-8">
                    <div className='flex flex-col w-full'>
                        <Label>Business Address</Label>
                        <Input 
                            type='text'
                            holder='Ikeja, Lagos, Nigeria'
                            value={mail}
                            onChange={(e)=>setBusinessAddress(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col w-full relative'>

                        {/* brand calender icon */}
                        <div className='absolute top-11 right-3 flex items-center pointer-events-none'>
                            <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.7744 3.2254H19.8421V2.24795C19.8421 1.98872 19.7391 1.7401 19.5558 1.55679C19.3725 1.37349 19.1238 1.27051 18.8646 1.27051C18.6054 1.27051 18.3568 1.37349 18.1735 1.55679C17.9902 1.7401 17.8872 1.98872 17.8872 2.24795V3.2254H8.11274V2.24795C8.11274 1.98872 8.00975 1.7401 7.82645 1.55679C7.64314 1.37349 7.39453 1.27051 7.13529 1.27051C6.87606 1.27051 6.62744 1.37349 6.44413 1.55679C6.26083 1.7401 6.15785 1.98872 6.15785 2.24795V3.2254H3.22552C2.70705 3.2254 2.20982 3.43136 1.8432 3.79797C1.47659 4.16458 1.27063 4.66181 1.27063 5.18028V24.7292C1.27063 25.2476 1.47659 25.7449 1.8432 26.1115C2.20982 26.4781 2.70705 26.684 3.22552 26.684H22.7744C23.2929 26.684 23.7901 26.4781 24.1567 26.1115C24.5233 25.7449 24.7293 25.2476 24.7293 24.7292V5.18028C24.7293 4.66181 24.5233 4.16458 24.1567 3.79797C23.7901 3.43136 23.2929 3.2254 22.7744 3.2254ZM6.15785 5.18028V6.15773C6.15785 6.41696 6.26083 6.66558 6.44413 6.84888C6.62744 7.03219 6.87606 7.13517 7.13529 7.13517C7.39453 7.13517 7.64314 7.03219 7.82645 6.84888C8.00975 6.66558 8.11274 6.41696 8.11274 6.15773V5.18028H17.8872V6.15773C17.8872 6.41696 17.9902 6.66558 18.1735 6.84888C18.3568 7.03219 18.6054 7.13517 18.8646 7.13517C19.1238 7.13517 19.3725 7.03219 19.5558 6.84888C19.7391 6.66558 19.8421 6.41696 19.8421 6.15773V5.18028H22.7744V9.09006H3.22552V5.18028H6.15785ZM22.7744 24.7292H3.22552V11.0449H22.7744V24.7292ZM14.4661 15.4434C14.4661 15.7334 14.3801 16.0169 14.219 16.258C14.0579 16.4991 13.8289 16.687 13.561 16.798C13.2931 16.909 12.9983 16.938 12.7139 16.8814C12.4295 16.8249 12.1683 16.6852 11.9632 16.4802C11.7582 16.2751 11.6185 16.0139 11.562 15.7295C11.5054 15.4451 11.5344 15.1503 11.6454 14.8824C11.7564 14.6145 11.9443 14.3855 12.1854 14.2244C12.4265 14.0633 12.71 13.9773 13 13.9773C13.3888 13.9773 13.7617 14.1317 14.0367 14.4067C14.3116 14.6817 14.4661 15.0546 14.4661 15.4434ZM19.8421 15.4434C19.8421 15.7334 19.7561 16.0169 19.595 16.258C19.4339 16.4991 19.2049 16.687 18.937 16.798C18.6691 16.909 18.3743 16.938 18.0899 16.8814C17.8055 16.8249 17.5442 16.6852 17.3392 16.4802C17.1341 16.2751 16.9945 16.0139 16.9379 15.7295C16.8813 15.4451 16.9104 15.1503 17.0213 14.8824C17.1323 14.6145 17.3202 14.3855 17.5613 14.2244C17.8024 14.0633 18.0859 13.9773 18.3759 13.9773C18.7647 13.9773 19.1377 14.1317 19.4126 14.4067C19.6876 14.6817 19.8421 15.0546 19.8421 15.4434ZM9.09018 20.3307C9.09018 20.6206 9.00419 20.9041 8.84309 21.1452C8.68198 21.3863 8.453 21.5742 8.18509 21.6852C7.91718 21.7962 7.62239 21.8252 7.33798 21.7687C7.05357 21.7121 6.79233 21.5724 6.58728 21.3674C6.38223 21.1623 6.24259 20.9011 6.18602 20.6167C6.12945 20.3323 6.15848 20.0375 6.26945 19.7696C6.38042 19.5017 6.56835 19.2727 6.80946 19.1116C7.05057 18.9505 7.33403 18.8645 7.62401 18.8645C8.01286 18.8645 8.38579 19.019 8.66075 19.2939C8.93571 19.5689 9.09018 19.9418 9.09018 20.3307ZM14.4661 20.3307C14.4661 20.6206 14.3801 20.9041 14.219 21.1452C14.0579 21.3863 13.8289 21.5742 13.561 21.6852C13.2931 21.7962 12.9983 21.8252 12.7139 21.7687C12.4295 21.7121 12.1683 21.5724 11.9632 21.3674C11.7582 21.1623 11.6185 20.9011 11.562 20.6167C11.5054 20.3323 11.5344 20.0375 11.6454 19.7696C11.7564 19.5017 11.9443 19.2727 12.1854 19.1116C12.4265 18.9505 12.71 18.8645 13 18.8645C13.3888 18.8645 13.7617 19.019 14.0367 19.2939C14.3116 19.5689 14.4661 19.9418 14.4661 20.3307ZM19.8421 20.3307C19.8421 20.6206 19.7561 20.9041 19.595 21.1452C19.4339 21.3863 19.2049 21.5742 18.937 21.6852C18.6691 21.7962 18.3743 21.8252 18.0899 21.7687C17.8055 21.7121 17.5442 21.5724 17.3392 21.3674C17.1341 21.1623 16.9945 20.9011 16.9379 20.6167C16.8813 20.3323 16.9104 20.0375 17.0213 19.7696C17.1323 19.5017 17.3202 19.2727 17.5613 19.1116C17.8024 18.9505 18.0859 18.8645 18.3759 18.8645C18.7647 18.8645 19.1377 19.019 19.4126 19.2939C19.6876 19.5689 19.8421 19.9418 19.8421 20.3307Z" fill="#708CAF"/>
                            </svg>
                        </div>
                        

                        <Label>Date</Label>
                        <Input 
                            type='date'
                            holder='Benson'
                            value={dob}
                            onChange={(e)=>setDob(e.target.value)}
                            // hide the inbuilt calendar icon
                            others={cn("[&::-webkit-calendar-picker-indicator]:opacity-0",
                                        "[&::-webkit-calendar-picker-indicator]:inset-0",
                                        "[&::-webkit-calendar-picker-indicator]:cursor-pointer")}
                        />
                    </div>
                </div> 
                </section>
                <div className='flex justify-center'>
                       <button
                        type='submit'
                        disabled={false}
                        className="w-[45%] px-4 py-4 font-medium text-lg rounded-2xl text-white transition bg-[--color-submit] hover:bg-[--color-submit]/50"
                       >
                        Save
                       </button>
                </div>
            </form>
                
            
        </section>
    </div>
  )
  
}

export default EditBusiness
