import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const films = [
    {
        type: "Film",
        title: "'The Soap Service': a gift-giving spectacle, inspired by cinema",
        image: "/p1.png",
        href: "#"
    },
    {
        type: "Film",
        title: "An Aesop film can stir the imagination",
        image: "/p1.png",
        href: "#"
    },
    {
        type: "Film",
        title: "An Aesop film can stir the imagination",
        image: "/p1.png",
        href: "#"
    },
    {
        type: "Film",
        title: "An Aesop film can stir the imagination",
        image: "/p1.png",
        href: "#"
    }
]

export function MobileFilms() {
    return (
        <div className="px-5 pb-8">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={2}
                className="mySwiper"
            >
                {films.map((film, index) => (
                    <SwiperSlide key={index}>
                        <Link href={film.href} className="space-y-2">
                            <div className="aspect-[4/3] relative bg-[#f6f5e8] overflow-hidden">
                                <Image
                                    src={film.image}
                                    alt={film.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-xs uppercase tracking-wide text-gray-600">{film.type}</div>
                            <h3 className="text-[15px] leading-tight font-light">{film.title}</h3>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
