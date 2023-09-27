import React from 'react'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'

const Newsletter = () => {
  return (
<section className="newsletter w-[80vw] mx-auto flex flex-col items-center justify-center overflow-hidden min-h-screen space-y-5 md:min-h-[30vh]">
        <div className='flex flex-col jusitfy-center items-center'>
          <h2 className="scroll-m-20 text-5xl font-semibold tracking-tight transition-colors first:mt-0">
            Subscribe our Newsletter
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Get the latest information and promo offers directly
          </p>
        </div>
        <div className="flex w-[full] max-w-sm lg:w-[30vw] items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </section>  )
}

export default Newsletter