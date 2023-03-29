import React from 'react'
import CatalogList from './CatalogList'
import goods from '../testVariables'

export default function Catalog() {
  const catigories = [{id:11, title:'All'}, {id:12, title:"Мужская обувь"}, {id:13, title:"Женская обувь"}]
  


const removeActive=()=>{
  const links=document.querySelectorAll('.nav-link-categories');
  for(let i=0; i<links.length; i++){
      links[i].classList.remove('linkactive')
  }
  
}

const handleChoose = (e) =>{
  removeActive();
  e.target.classList.add('linkactive')
}

  return (
    <section className='catalog'>
        <h2 className='text-center'>Каталог</h2>
        <input type="text" className='form-control' placeholder='Поиск' />
        <ul className='catalog-categories nav justify-content-center'>
            {catigories.map((object)=>{
                return (
                    <li className='nav-item-categories'>
                        <a id={object.id} key={object.id} href="#" onClick={handleChoose} className={`nav-link-categories${object.title == 'All'? ' linkactive':''}`}>{object.title}</a>
                    </li>
                )
            })}
        </ul>
        <CatalogList goods={goods}/>
    </section>
  )
}
