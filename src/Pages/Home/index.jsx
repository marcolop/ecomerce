import {useState, useEffect} from 'react';
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from '../../Components/ProductDetail/ProductDetail';

const Home = () => {
  const [items, setItems] = useState(null);
  
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      Home
      <div className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl'>
        {
            items?.map(item => (
              <Card key={item.id} data={item}/>
           ))
        }
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home;
