import React from 'react';
import { useState } from 'react';
import { useContext } from 'react'; 
import { ShoppingCartContext} from '../../Context';

const Card = ({data}) => {
  const context = useContext(ShoppingCartContext)

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  }

  return (
   <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category?.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={
            !imageError
              ? data.images[0]
              : "https://images.pexels.com/photos/5939401/pexels-photo-5939401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt={data.title}
          onError={handleImageError}/>
         <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" 
           onClick={() => context.setCount(context.count + 1)}>
          +
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
};

export default Card;
