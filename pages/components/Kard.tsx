import React from 'react'

interface CardProps {
    image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
  return (
    <div className="relative bg-center bg-cover"
     style={{backgroundImage: `url(${image})`, width: '300px', height: '200px'}}>
    </div>
  )
}

export default Card;
