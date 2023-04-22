import { createElement } from 'react'

interface ICardProps {
  title: string
  subtitle: string
  image: string
  asHeading?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Card = ({ title, subtitle, image, asHeading = "h6"}: ICardProps) => {
  return (
    <div className="rounded-lg p-4 shadow-md w-[375px] font-sans">
      <div>
        <img className="rounded-lg" src={image} />
      </div>
      <div className="flex flex-col items-center bg-white px-4 py-5 rounded-lg">
        <div className="flex flex-col items-center text-center space-y-4">
          {createElement(asHeading, { className: 'text-2xl font-bold' }, title)}
          <p className="text-[15px] text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}
