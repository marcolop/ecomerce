import { useContext} from 'react';
import  './styles.css';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    const product = context.productToShow || {};
   
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
       <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>Detail</h2>
          <div className="">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
          </div>
       </div>
       <figure>
    {context.productToShow && context.productToShow.images && context.productToShow.images.length > 0 ? (
    <img
      className='w-full h-full rounded-lg'
      src={context.productToShow.images[0]}
      alt={context.productToShow.title}
    />
  ) : (
    <p>Imagen no disponible</p>
  )}
</figure>
       <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl'>${context.productToShow.price}</span>
        <span className='font-medium text-md'>${context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
       </p>
    </aside>
  )
}

export default ProductDetail;

