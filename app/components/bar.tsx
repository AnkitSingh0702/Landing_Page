'use client'

import * as React from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"

const images = [
  "/t1.jpg",
  "/t2.jpg",
  "/t3.jpg",
]

export function StoreCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    duration: 30
  })
  const [, setCurrentIndex] = React.useState(0)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(true)
  const [progress, setProgress] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    const currentIndex = emblaApi.selectedScrollSnap()
    setCurrentIndex(currentIndex)
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    // Calculate progress based on current index
    setProgress((currentIndex / (images.length - 1)) * 100)
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative bg-[#333333] h-full group">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              <Image
                src={image}
                alt={`Store image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-[#333333]/90 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${!canScrollPrev && 'pointer-events-none'}`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={scrollNext}
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-[#333333]/90 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${!canScrollNext && 'pointer-events-none'}`}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Single Progress Bar */}
      <div className="absolute -bottom-[3.5rem] left-0 right-0 px-4 py-2">
        <div className="h-[2px] bg-[#a8a6a6] w-full">
          <div 
            className="h-full bg-black transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

 