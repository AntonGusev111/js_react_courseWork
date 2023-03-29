import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import goods from '../testVariables'

export default function SinglePage() {
    const [goodsCount, setCount] = useState(1);
    const [size, setSize] = useState('')
    const param = useParams();

    const singleGoods=goods[2]
    
    const handleChangeCount = (e)=>{
        const sign = e.target.innerHTML;
        if (sign =="-"){
            setCount(goodsCount-1>0? goodsCount-1:goodsCount)
        } else{
            setCount(goodsCount+1<11?goodsCount+1:goodsCount)
        }
    }

    const dellSelectedSize=()=>{
        const sizes = document.querySelectorAll('.catalog-item-size');
        for (let i=0; i<sizes.length; i++){
            sizes[i].classList.remove('selected')
        }
    };

    const handleSizeChoise =(e)=>{
        dellSelectedSize();
        e.target.classList.add('selected')
        setSize(e.target.innerHTML)
        const button = document.querySelector('.btn-lg')
        button.classList.remove('hidden')
    }

  return (
    <section className='catalog-item'>
        <h2 className='text-center'>{singleGoods.title}</h2>
        <div className='row'>
            <div className='col-5'>
                <img src={singleGoods.images[0]} alt="" className='img-fluid singleImg'/>
            </div>
            <div className='col-7'>
                <table className='table table-bordered'>
                    <tbody className='table table-bordered'>
                        <tr>
                            <td>Артикул</td>
                            <td>{singleGoods.sku}</td>
                        </tr>
                        <tr>
                            <td>Производитель</td>
                            <td>{singleGoods.manufacturer}</td>
                        </tr>
                        <tr>
                            <td>Черный</td>
                            <td>{singleGoods.color}</td>
                        </tr>
                        <tr>
                            <td>Материалы</td>
                            <td>{singleGoods.material}</td>
                        </tr>
                        <tr>
                            <td>Сезон</td>
                            <td>{singleGoods.season}</td>
                        </tr>
                        <tr>
                            <td>Повод</td>
                            <td>{singleGoods.reason}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='text-center'>
                    <p>
                        Размеры в наличии:
                        {singleGoods['sizes'].map((element)=>{
                            if(element.available){
                                return (<span onClick={handleSizeChoise} className='catalog-item-size'>{element.size}</span>)
                            };
                        })}
                    </p>
                    <p>
                        Количество:
                        <span className='btn-group btn-group-sm pl-2'>
                            <button onClick={handleChangeCount} className='btn btn-secondary'>-</button>
                            <span className='btn btn-outline-primary'>{goodsCount}</span>
                            <button onClick={handleChangeCount} className='btn btn-secondary'>+</button>
                        </span>
                    </p>
                </div>
                <Link to={'/cart.html'}><button className='btn btn-danger btn-block btn-lg hidden'>В корзину</button></Link>
            </div>
        </div>
    </section>
  )
}
