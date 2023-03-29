import React from 'react'
import CatalogList from './CatalogList';

import goods from '../testVariables'


export default function Hits(props) {

    const {goods} = props;
 

    
  return (
    <>
    <h2 className="text-center">Хиты продаж!</h2>

        <div className='row'>
            <CatalogList goods={goods} />
            </div>
    </>
  )
}
