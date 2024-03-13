// import { getImageUrl } from '@/utils';
import { getImageUrl } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string; // Add imageUrl prop
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
}) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="max-w-lg glass bg-gray-953 rounded-sm overflow-hidden h-full flex flex-col justify-between">
       
        <div className="relative h-96 bg-center">
            <Image
              src={getImageUrl(imageUrl)}
              alt={name}
              fill={true}
              className="rounded-t"
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
  </div>
      
        <div className="px-6 py-2">
          <span className="inline-block text-2xl text-gray-952 mr-2">
            ${price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;