'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"

interface CarouselSlideProps {
  subtitle: string
  title: string
  description: string
  buttonText: string
  imageUrl: string
}

export function CarouselSlide({ subtitle, title, description, buttonText, imageUrl }: CarouselSlideProps) {
  const isVideo = imageUrl.endsWith('.mp4');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[600px]">
      <div className="flex flex-col justify-center p-6 lg:p-12 bg-[#f0efe3] order-2 lg:order-1">
        <p className="text-xs lg:text-sm mb-2 lg:mb-4">{subtitle}</p>
        <h2 className="text-2xl lg:text-[32px] font-light mb-2 lg:mb-4">{title}</h2>
        <p className="text-sm lg:text-base leading-relaxed mb-4 lg:mb-8 max-w-[500px]">{description}</p>
        <Button 
          variant="outline" 
          className="flex justify-between bg-transparent w-full lg:w-[291px] h-[50px] lg:h-[60px] border-black/15 rounded-none hover:bg-black hover:text-white transition-colors"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="relative bg-[#3d3d3d] h-[300px] lg:h-auto order-1 lg:order-2">
        {isVideo ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="object-cover w-full h-full"
          >
            <source src={imageUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image 
            src={imageUrl} 
            layout="fill" 
            objectFit="cover" 
            alt={title} 
          />
        )}
      </div>
    </div>
  )
}
