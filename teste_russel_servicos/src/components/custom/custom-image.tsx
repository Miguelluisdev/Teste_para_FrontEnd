import Image from "next/image"

interface CustomImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string
  alt: string
  className?: string
  width: number
  quality?: number
  height: number
  blurDataURL: string
}

const CustomImage = (props: CustomImageProps) => {
  return (
    <Image
      src={props.src}
      width={props.width}
      height={props.height}
      quality={props.quality}
      priority
      blurDataURL={props.src}
      alt={props.alt}
      className={props.className}
    />
  )
}

export default CustomImage
