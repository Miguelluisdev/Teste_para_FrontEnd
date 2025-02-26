import React from "react"
import CustomImage from "./custom/custom-image"

const HeroHome = () => {
  return (
    <section className="pt-4 px-4">
      <CustomImage
        alt="hero image banner"
        height={1080}
        width={1920}
        quality={100}
        src="/home-banner.png"
        blurDataURL="/home-banner.png"
        className="object-cover mx-auto m-5 sm:p-4 md:p-4"
      />
    </section>
  )
}

export default HeroHome
