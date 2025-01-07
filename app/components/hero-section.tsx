'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";
import React from 'react';
import { StoreCarousel } from './bar';

interface Product {
  id: string
  name: string
  description: string
  imageUrl: string
  href: string
  underlined?: boolean
}

const products: Product[] = [
  {
    id: "1",
    name: "Aromatique Hand Balm Trio",
    description: "Three hydrating hand balms, unique in aroma",
    imageUrl: "/p1.png?height=600&width=600",
    href: "#"
  },
  {
    id: "2",
    name: "Ptolemy Aromatique Candle",
    description: "A sensuous blend of leather, smoke and wood",
    imageUrl: "/p2.png?height=600&width=600",
    href: "#",
    underlined: true
  },
  {
    id: "3",
    name: "Reverence Duet",
    description: "A sumptuous pairing for hands",
    imageUrl: "/p3.png?height=600&width=600",
    href: "#"
  },
  {
    id: "4",
    name: "Lucent Facial Concentrate",
    description: "A Vitamin C-rich layering serum",
    imageUrl: "/p4.png?height=600&width=600",
    href: "#"
  },
  {
    id: "5",
    name: "Bronze Incense Holder",
    description: "Suited to any interior",
    imageUrl: "/p5.png?height=600&width=600",
    href: "#"
  }
]

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps'
  })
  const [scrollProgress, setScrollProgress] = React.useState(0)
  const [showLeftArrow, setShowLeftArrow] = React.useState(false)
  const [showRightArrow, setShowRightArrow] = React.useState(true)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onScroll = React.useCallback((emblaApi: any) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
    setShowLeftArrow(emblaApi.canScrollPrev())
    setShowRightArrow(emblaApi.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('scroll', () => onScroll(emblaApi))
    emblaApi.on('reInit', () => onScroll(emblaApi))

    return () => {
      emblaApi.off('scroll', () => onScroll(emblaApi))
      emblaApi.off('reInit', () => onScroll(emblaApi))
    }
  }, [emblaApi, onScroll])

  return (
    <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
      <section className="text-gray-600 body-font">
        <div className="flex flex-col lg:flex-row py-12 lg:py-28 gap-8">
          <div className="w-full lg:w-1/2">
            <img className="w-full h-auto object-cover object-center rounded" alt="hero" src="https://www.aesop.com/u1nb1km7t5q7/23mX2EVjoEY3EflqXW2ajg/7fb9b7d000b8cdb875fd12bbb5ad95b0/Aesop_Festive_Sleeve_HK_2024_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg"/>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 px-0 lg:px-12 gap-4">
            <p className="text-sm text-[#333]">Festive giving</p>
            <h2 className="text-2xl lg:text-[32px] text-[#333] font-heading">A complimentary sleeve for your gifts</h2>
            <p className="text-base lg:text-lg">Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the &apos;gift packaging&apos; option at checkout. Exclusions apply.</p>
            <Button 
              variant="outline" 
              className="flex justify-between text-black bg-transparent w-full sm:w-[291px] h-[60px] border-black/15 rounded-none hover:bg-[#333] hover:text-white transition-colors"
            >
              Explore Gifts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font py-12 lg:py-20">
        <div className="px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9">
                <img className="w-full h-full object-cover" alt="Six aromatic encounters" src="https://www.aesop.com/u1nb1km7t5q7/UNC2CaQtqARmMN0LO9DCc/bb34ebc74d72ea79ce7f7f7d0dac4ebc/Aesop_Fragrance_Anthology_Volume_I_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg"/>
              </div>
              <h3 className="text-xl lg:text-[1.25rem] leading-[1.2]">Six aromatic encounters</h3>
              <p className="text-sm lg:text-[0.875rem] leading-[1.7] text-[#333333]/80">
                Fragrance Anthology Volume I invites curious noses to explore and experience our range of unorthodox aromas, from the fresh to the floral, the woody and the opulent.
              </p>
            </div>
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src='https://videos.ctfassets.net/u1nb1km7t5q7/6zoc46Ksxu0R9C0Xc6LaCn/9f5ac4f239da5914926b403fae67d4f2/Aesop_Gift_Kits_2024-25_Web_Homepage_Secondary_Gifts_for_Home_1920x1080px.mp4.mp4' type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-xl lg:text-[1.25rem] leading-[1.2]">Home gifts</h3>
              <p className="text-sm lg:text-[0.875rem] leading-[1.7] text-[#333333]/80">
                From hand care to home fragrances, explore a curation of products that are ideal for hospitable hosts, the house-proud or the recently moved in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative py-12 lg:py-20">
        <div className="max-w-full lg:max-w-[1920px] mx-auto px-4 lg:px-12 group">
          {showLeftArrow && (
            <button 
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-12 h-12 lg:w-[5rem] lg:h-[4rem] bg-[#333] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
          {showRightArrow && (
            <button 
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-12 h-12 lg:w-[5rem] lg:h-[4rem] bg-[#333] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
          <div className="overflow-hidden mx-0 lg:mx-12" ref={emblaRef}>
            <div className="flex">
              {products.map((product) => (
                <div key={product.id} className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_25%] pl-4">
                  <div className="aspect-square relative bg-transparent text-center flex flex-col items-center">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-base mb-2 hover:underline text-center">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#333333]/80 text-center">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-4 right-4 lg:left-[5rem] lg:right-[5rem] h-[2px] bg-[#333333]/10">
            <div 
              className="h-full bg-[#333333] transition-all duration-100 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font py-12 lg:py-20">
        <div className="px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9">
                <img alt="For their travel bag" src="https://www.aesop.com/u1nb1km7t5q7/4yqO6ehckkTErlTa6NLC8G/23f3073fcac5f863e5cc3fafb9d94678/Aesop_Gift_Kits_2024-25_Web_Homepage_Secondary_Image_Gifts_for_Travel_1920x1080px.jpg" className="w-full h-full object-cover"/>
              </div>
              <h3 className="text-xl lg:text-[1.25rem] leading-[1.2] cursor-pointer">For their travel bag</h3>
              <p className="text-sm lg:text-[0.875rem] leading-[1.7] text-[#333333]/80">
                Explore a range of travel-size formulations for seasoned excursionists, including preselected kits, sun care and in-flight essentials.
              </p>
            </div>
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src='https://videos.ctfassets.net/u1nb1km7t5q7/6c1HYo7FKUKnKE54hG5bTu/f4a1349a1d43c502218801d91c3a1b99/Aesop_Gift_Kits_2024-25_Web_Homepage_Secondary_Favourite_Formulations_1920x1080px.mp4' type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-xl lg:text-[1.25rem] leading-[1.2] cursor-pointer">Noteworthy gifts</h3>
              <p className="text-sm lg:text-[0.875rem] leading-[1.7] text-[#333333]/80">
                From time-honoured body care to standout skin care—explore a range of formulations that remain dependably crowd-pleasing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col w-full lg:w-1/2 px-0 lg:px-12 gap-4 mb-8 lg:mb-0">
            <p className="text-sm text-[#333]">Our online offering</p>
            <h2 className="text-2xl lg:text-[32px] text-[#333] font-heading">Gestures to enhance your experience</h2>
            <p className="text-base lg:text-lg mb-8">Discover a suite of complimentary additions available with every order, including curated product samples, gift wrapping in our signature cotton bag and personalised gift messaging.</p>
            <Button 
              variant="outline" 
              className="flex justify-between text-black bg-transparent w-full sm:w-[291px] h-[60px] border-black/15 rounded-none hover:bg-[#333] hover:text-white transition-colors"
            >
              Explore our online offering
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="w-full lg:w-1/2">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-auto object-cover rounded"
            >
              <source src='https://videos.ctfassets.net/u1nb1km7t5q7/1vcs0LHREpU7wUIViDZfsh/165c6e7b54d4198d94005227a6768a2c/Aesop_Gestures_Page_Web_Secondary_Message_Mid_Desktop_1920x1080px.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img className="w-full h-auto object-cover object-center" alt="hero" src="https://www.aesop.com/u1nb1km7t5q7/6FbqraGc96gts4wqXBENFI/7af21353122e60409a730e81ba9e434a/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Corporate_Gifting_Mid_Desktop_2560x1440px.jpg"/>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 px-0 lg:px-12 gap-4">
            <p className="text-sm text-[#333]">Tokens of appreciation</p>
            <h2 className="text-2xl lg:text-[32px] text-[#333] font-heading">Corporate gifts</h2>
            <p className="text-base lg:text-lg mb-8">Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.</p>
            <Button 
              variant="outline" 
              className="flex justify-between text-black bg-transparent w-full sm:w-[291px] h-[60px] border-black/15 rounded-none hover:bg-[#333] hover:text-white transition-colors"
            >
              Learn more about this service
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col w-full lg:w-1/2 px-0 lg:px-12 gap-4 mb-8 lg:mb-0">
            <h2 className="text-2xl lg:text-[32px] text-[#333] font-heading">Store locator</h2>
            <p className="text-base lg:text-lg mb-8">Our consultants are available to host you in-store and provide tailored guidance on gift purchases.</p>
            <Button 
              variant="outline" 
              className="flex justify-between text-black bg-transparent w-full sm:w-[291px] h-[60px] border-black/15 rounded-none hover:bg-[#333] hover:text-white transition-colors"
            >
              Find a nearby store
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px]">
            <StoreCarousel />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img className="w-full h-auto object-cover object-center" alt="hero" src="https://www.aesop.com/u1nb1km7t5q7/48WUU7O1mDZ0jSogoWRyNl/151c278f42d867e1d2dd786e74174ab1/Aesop_IFT_Event_TH_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg"/>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 px-0 lg:px-12 gap-4">
            <h2 className="text-2xl lg:text-[32px] text-[#333] font-heading">Virtual guidance from home&apos;s comfort</h2>
            <p className="text-base lg:text-lg mb-8">For advice on our range of formulations, we welcome you to book a complimentary live consultation. Following your appointment, you will receive a bespoke product sample when you place an order.</p>
            <Button 
              variant="outline" 
              className="flex justify-between text-black bg-transparent w-full sm:w-[291px] h-[60px] border-black/15 rounded-none hover:bg-[#333] hover:text-white transition-colors"
            >
              Discover live consultations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <div className='text-center py-12 lg:py-20 sm:py-10'>
        <p className='font text-2xl lg:text-3xl tracking-wide text-[#333]'>&apos;The manner of giving is worth more than the gift.&apos;</p>
        <p className='text-sm mt-2'>Pierre Corneille</p>
      </div>
    </div>
  )
}