// 'use client'

// import * as React from "react"
// import { ChevronLeft, ChevronRight, Pause } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { CarouselSlide } from "./carousalslide"
// import useEmblaCarousel from 'embla-carousel-react'
// import Image from "next/image"
// const slides = [
//   {
//     subtitle: "Tokens of appreciation",
//     title: "Corporate gifts",
//     description: "Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.",
//     buttonText: "Learn more about this service",
//     imageUrl: "/coro1.mp4"
//   },
//   {
//     subtitle: "Online only",
//     title: "Four bundles for hair, hands and home",
//     description: "The Home Necessities Duo, Adventurer Hand Care Trio, Basin Essentials and Hair Care Duo are arranged in a gift box suitable for sending directly to recipients.",
//     buttonText: "Explore bundles",
//     imageUrl: "/coro2.avif"
//   },
//   {
//     subtitle: "Festive giving",
//     title: "A complimentary sleeve for your gifts",
//     description: "Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the 'gift packaging' option at checkout.",
//     buttonText: "Explore gifts",
//     imageUrl: "/coro3.avif"
//   }
// ]

// export function MainCarousel() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
//   const [currentSlide, setCurrentSlide] = React.useState(0)
//   const [isPaused, setIsPaused] = React.useState(false)

//   React.useEffect(() => {
//     if (!emblaApi) return

//     emblaApi.on('select', () => {
//       setCurrentSlide(emblaApi.selectedScrollSnap())
//     })

//     return () => {
//       emblaApi.off('select', () => {
//         setCurrentSlide(emblaApi.selectedScrollSnap())
//       })
//     }
//   }, [emblaApi])

//   React.useEffect(() => {
//     if (!emblaApi || isPaused) return

//     const interval = setInterval(() => {
//       emblaApi.scrollNext()
//     }, 9000)

//     return () => clearInterval(interval)
//   }, [emblaApi, isPaused])

//   const scrollPrev = React.useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev()
//   }, [emblaApi])

//   const scrollNext = React.useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext()
//   }, [emblaApi])

//   const togglePause = React.useCallback(() => {
//     setIsPaused(!isPaused)
//   }, [isPaused])

//   return (
//     <div className="">
//     <div className="relative">
//       <div className="overflow-hidden" ref={emblaRef}>

//     <Image src = "/ae.jpg" width={80} height={60} alt = "" />
//         <div className="flex">
//           {slides.map((slide, index) => (
//             <div key={index} className="flex-[0_0_100%] min-w-0">
//               <CarouselSlide {...slide} />
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <div className="absolute bottom-8 left-12 flex items-center space-x-6">
//         <Button 
//           variant="ghost" 
//           size="icon" 
//           onClick={scrollPrev}
//           className="hover:bg-transparent"
//         >
//           <ChevronLeft className="h-4 w-4" />
//         </Button>
//         <span className="text-sm font-light">
//           {currentSlide + 1}/{slides.length}
//         </span>
//         <Button 
//           variant="ghost" 
//           size="icon" 
//           onClick={scrollNext}
//           className="hover:bg-transparent"
//         >
//           <ChevronRight className="h-4 w-4" />
//         </Button>
//         <Button 
//           variant="ghost" 
//           size="icon" 
//           onClick={togglePause}
//           className="hover:bg-transparent"
//         >
//           <Pause className="h-4 w-4" />
//         </Button>
//       </div>
//     </div>
//     </div>
//   )
// }


'use client'

import * as React from "react"
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { CarouselSlide } from "./carousalslide"
import useEmblaCarousel from 'embla-carousel-react'

const slides = [
  {
    subtitle: "Tokens of appreciation",
    title: "Corporate gifts",
    description: "Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.",
    buttonText: "Learn more about this service",
    imageUrl: "/coro1.mp4"
  },
  {
    subtitle: "Online only",
    title: "Four bundles for hair, hands and home",
    description: "The Home Necessities Duo, Adventurer Hand Care Trio, Basin Essentials and Hair Care Duo are arranged in a gift box suitable for sending directly to recipients.",
    buttonText: "Explore bundles",
    imageUrl: "/coro2.avif"
  },
  {
    subtitle: "Festive giving",
    title: "A complimentary sleeve for your gifts",
    description: "Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the 'gift packaging' option at checkout.",
    buttonText: "Explore gifts",
    imageUrl: "/coro3.avif"
  }
]

export function MainCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    skipSnaps: false,
    dragFree: false
  })
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)

  React.useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', () => {
      setCurrentSlide(emblaApi.selectedScrollSnap())
    })

    return () => {
      emblaApi.off('select', () => {
        setCurrentSlide(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi || isPaused) return

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [emblaApi, isPaused])

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const togglePause = React.useCallback(() => {
    setIsPaused(!isPaused)
  }, [isPaused])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <CarouselSlide {...slide} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute -bottom-[4rem] left-1/2 transform -translate-x-1/2 flex items-center   px-4 py-2 ">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollPrev}
          className="hover:bg-transparent text-[#333] transition-opacity hover:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-xs font-light text-[#333]">
          {currentSlide + 1} of {slides.length}
        </span>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollNext}
          className="hover:bg-transparent text-[#333] transition-opacity hover:opacity-50"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={togglePause}
          className="hover:bg-transparent text-[#333] transition-opacity hover:opacity-50"
        >
          {isPaused ? (
            <Play className="h-4 w-4" />
          ) : (
            <Pause className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  )
}
