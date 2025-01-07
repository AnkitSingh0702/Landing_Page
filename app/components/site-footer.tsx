'use client'

import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'
import { IoArrowForward } from "react-icons/io5"

export function SiteFooter() {
  return (
    <div className=""><section className=" py-20 mt-40">
      <div className="  px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-[1rem] font-[700px] font-heading2 mb-2">Certified B Corp</h3>
            <p className="text-[0.875rem] leading-[1.7] tracking-wide text-[#333333]/80 max-w-[320px] mx-auto">
              We meet the highest verified standards of social and environmental performance, transparency and accountability.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-[1rem] font-[700px] font-heading2 mb-2">Leaping Bunny approved</h3>
            <p className="text-[0.875rem] leading-[1.7] text-[#333333]/80 max-w-[320px] mx-auto tracking-wide">
              Our formulations are approved as cruelty free under the Cruelty Free International Leaping Bunny programme.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-[1rem] font-[700px] font-heading2 mb-2">PETA recognition</h3>
            <p className="text-[0.875rem] leading-[1.7] text-[#333333]/80 max-w-[320px] mx-auto">
              We appear on PETA&apos;s internationally recognised vegan and cruelty-free lists.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    
    <footer className="bg-[#252525] text-white">
        <div className=" px-[50px] py-[51px]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-5 gap-y-5">
            {/* Email Subscription */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-base border-b py-4">Subscribe to Aesop communications</h3>

              <div className="space-y-6">
                <div className="relative">
                  {/* Input Field */}
                  <Input
                    type="email"
                    placeholder="Email address"
                    className="peer bg-transparent text-lg border border-white rounded-none h-10 px-4 placeholder:text-white placeholder:text-lg placeholder:font-medium w-full transition-all duration-300 focus:placeholder:opacity-0 focus:outline-none" />

                  {/* Arrow Icon */}
                  <span className="absolute inset-y-0 right-4 flex items-center text-white">
                    <IoArrowForward size={20} className="cursor-pointer transition-transform duration-300 hover:scale-110" />
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox id="subscribe" className="rounded-none mt-1 border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-black" />
                  <label htmlFor="subscribe" className="text-sm text-white">
                    Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our{' '}
                    <Link href="#" className="underline hover:text-white">
                      privacy policy
                    </Link>
                    .
                  </label>
                </div>
              </div>
            </div>

            {/* Orders and Support */}
            <div className="space-y-4">
              <h3 className="text-base border-b py-4">Orders and support</h3>
              <nav className="space-y-4">
                {[
                  { text: "Contact us", hasArrow: true },
                  { text: "FAQs", hasArrow: true },
                  { text: "Shipping", hasArrow: true },
                  { text: "Returns", hasArrow: true },
                  { text: "Order history" },
                  { text: "Check gift card balance" },
                  { text: "Terms and conditions" },
                ].map((item) => (
                  <Link
                    key={item.text}
                    href="#"
                    className="flex items-center  text-sm text-white hover:text-white "
                  >
                    {item.text}
                    {item.hasArrow && <ArrowUpRight className="h-4 w-4" />}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-base border-b py-4">Services</h3>
              <nav className="space-y-4">
                {[
                  { text: "Live assistance" },
                  { text: "Corporate gifts" },
                  { text: "Facial Appointments" },
                  { text: "Click and Collect" },
                  { text: "Video consultation" },
                ].map((item) => (
                  <Link
                    key={item.text}
                    href="#"
                    className="flex items-center  text-sm text-white hover:text-white "
                  >
                    {item.text}
                    {/* {item.hasArrow && <ArrowUpRight className="h-4 w-4" />} */}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Location and Language */}
            <div className="space-y-4">
              <h3 className="text-base border-b py-4">Location preferences</h3>
              <nav className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm">Shipping:</p>
                  <Link href="#" className="block text-sm text-white hover:text-white underline">
                    Hong Kong, SAR
                  </Link>
                </div>
                <div className="space-y-2">
                  <p className="text-sm">Language:</p>
                  <div className="space-y-1">
                    <Link href="#" className="block text-sm text-white hover:text-white underline">
                      English
                    </Link>
                    <Link href="#" className="block text-sm text-white hover:text-white hover:underline">
                      繁體中文
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* Sustainability Section */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-x-5 gap-y-5">
            <div className="lg:col-span-2">
              <h3 className="text-base border-b py-4">Sustainability</h3>
              <p className=" py-4 text-sm text-white">
                All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation.{' '}
                <Link href="#" className="">
                  Learn more
                </Link>
              </p>
            </div>

            {/* About */}
            <div className="md:grid grid-cols-2 gap-x-5 gap-y-5">
            <div className="space-y-4">
              <h3 className="text-base border-b py-4">About</h3>
              <nav className="space-y-4">
                {[
                  { text: "Our story" },
                  { text: "Foundation" },
                  { text: "Careers" },
                  { text: "Privacy policy" },
                  { text: "Accessibility" },
                  { text: "Cookie Policy" },
                ].map((item) => (
                  <Link
                    key={item.text}
                    href="#"
                    className="flex items-center justify-between text-sm text-white"
                  >
                    {item.text}

                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-base border-b py-4">Social media</h3>
              <nav className="space-y-4">
                {[
                  { text: "Instagram", hasArrow: true },
                  { text: "Twitter", hasArrow: true },
                  { text: "LinkedIn", hasArrow: true },
                  { text: "WeChat" },
                  { text: "Weibo", hasArrow: true },
                ].map((item) => (
                  <Link
                    key={item.text}
                    href="#"
                    className="flex items-center text-sm text-white"
                  >
                    {item.text}
                    {item.hasArrow && <ArrowUpRight className="h-4 w-4" />}
                  </Link>
                ))}
              </nav>
            </div>
            </div>
            
          </div>



        </div>

        {/* Copyright */}
        <div className="border-t-2 border-white">
          <div className=" px-8 py-6">
            <p className="text-lg font-medium text-white">&copy; Aesop</p>
          </div>
        </div>
      </footer></div>
  )
}

