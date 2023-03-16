import './home.css';
import React, { useEffect ,useState} from 'react';
import Product from './ProductCard';
import MetaData from '../layout/MetaData';
import {clearErrors, getProducts} from '../../actions/ProductActions';  
import {useSelector,useDispatch} from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';
import ProductCard from './ProductCard';
import {UncontrolledCarousel} from 'reactstrap';

//for crousel
import Carousel from 'react-bootstrap/Carousel';

//import {CgMouse} from 'react-icons/all';



function Home() {

   

  const alert=useAlert();
  const dispatch=useDispatch();

 
  //products is same name as from database 
  const {loading,error,products}=useSelector(
    state => state.productsitem
    );

  useEffect(()=>{
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProducts());
  },[dispatch,error,alert]);


  //crousel
  // const items=[
  //   {
  //     altText: 'Slide 1',
  //     caption: 'Slide 1',
  //     key: 1,
  //     src: 'https://picsum.photos/id/123/1200/400'
  //   },
  //   {
  //     altText: 'Slide 2',
  //     caption: 'Slide 2',
  //     key: 2,
  //     src: 'https://picsum.photos/id/456/1200/400'
  //   },
  //   {
  //     altText: 'Slide 3',
  //     caption: 'Slide 3',
  //     key: 3,
  //     src: 'https://picsum.photos/id/678/1200/400'
  //   }
  // ];

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title='YUM MARKET' />
          {/* <div className='banner'>
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href='#container'>
               <button>
                Scroll 
               </button>
            </a>
        </div> */}

          {/* <UncontrolledCarousel
        className='uncontrolcarousel'
        items={items}
        /> */}

          <Carousel slide={false}>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://picsum.photos/id/123/1200/400'
                alt='First slide'
              />
              <Carousel.Caption>
                <div className='carouselTopContent'>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://picsum.photos/id/456/1200/400'
                alt='Second slide'
              />

              <Carousel.Caption>
                <div className='carouselTopContent'>
                  <h3>Second slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://picsum.photos/id/678/1200/400'
                alt='Third slide'
              />

              <Carousel.Caption>
                <div className='carouselTopContent'>
                  <h3>Third slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <h2 className='homeHeading'>Features Products</h2>

          <div className='container' id='container'>
            {products &&
              products.map(product => (
                <ProductCard product={product} key={product._id} />
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
