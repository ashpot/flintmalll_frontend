const SmallFooter = () => {
  return (
    <footer className='w-[80%] md:max-w-5xl mx-auto pt-9 pb-6 md:flex md:justify-between '>
        <p className='font-medium md:text-lg text-sm mt-5'>
            &copy; 2025 Flintmall. 
            <span className='ml-2'>All Rights Reserved</span>
        </p>
        <div className='font-medium md:text-lg text-sm mt-5 space-x-5'>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </footer>
  )
}

export default SmallFooter
