import React from 'react';
import { Link } from 'react-router-dom';

export default function CatalogList(props) {
    const {goods} = props;



  return (
    <>
        <div className='row'>
            {goods.map((object)=>{
                return(
                    <div key={object.id} className='col-4'>
                        <div className='catalog-item-card'>
                            <img src={object.images[0]} alt={object.title} className='card-img-top img-fluid'/>
                            <div className='card-body'>
                                <p className='card-text'>{object.title}</p>
                                <p className='card-text'>{object.price}</p>
                                <Link key={object.id} className='btn btn-outline-primary'  to={`/catalog/${object.id}.html`} >Заказать</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}
