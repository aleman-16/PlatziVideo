/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
//import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';
/* ya no es necesaria la variable de API ya que era necesaria cuando se usaba hooks
 ahora se utilizara redux
const API = 'http://localhost:3000/initalState';
*/

const Home = ({ mylist, trends, originals }) => {
  //const initialState = useInitialState(API);
  //return initialState.length === 0 ? <h1>Loading...</h1> : (
  return (
    /*Browser fragment*/
    <>
      <Search />
      {mylist.length > 0 &&
        <Categories title='Mi Lista'>
          <Carousel>
            {mylist.map(item =>
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
