import React from 'react';
import CatalogList from './CatalogList'
import Hits from './Hits';

import goods from '../testVariables'

export default function MainPage() {

  

  return (
    <>
      <section className="top-sales">
        <Hits goods = {goods}/>
      </section>
      <section className="catalog" >
        <h2 className="text-center" >Каталог</h2>
         <CatalogList goods={goods}/>
      </section>
    </>
  )
}
