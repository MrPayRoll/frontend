import React from 'react';
import images from '../assets/images.jpg';
import bosh from '../assets/bosh.webp';
import '../Components/Home.css';

function Home() {
  return (
    <div className='glavni'>
      <div className="container">
        <div className="category-section">
          <div className="category-item">
            <img src={images} alt="Двигатель" className="category-img" />
            <p>Все каталоги</p>
          </div>
          <div className="category-item">
            <img src={images} alt="Шина" className="category-img" />
            <p>Шины и диски</p>
          </div>
          <div className="category-item">
            <img src={images} alt="Технические запчасти" className="category-img" />
            <p>Тех запчасти</p>
          </div>
          <div className="category-item">
            <img src={images} alt="Масла и жидкости" className="category-img" />
            <p>Масла и жидкости</p>
          </div>
          <div className="category-item">
            <img src={images} alt="Инструменты" className="category-img" />
            <p>Инструменты</p>
          </div>
          <div className="category-item">
            <img src={images} alt="Автохимия" className="category-img" />
            <p>Автохимия</p>
          </div>
        </div>
      </div>
      <div class="info-section">
           <div class="payment-info">
                <div class="dot"></div>
                   <p>Оплата при получении<br/>Для заказов до 55 тысяч рублей не требуется предоплата, можно оплатить при получении наличными или банковской картой</p>
                    </div>
                    <div class="payment-info">
                   <div class="dot"></div>
                    <p>Доставка по всей России<br/>Наши склады открыты во всех регионах страны, по вашему выбору доставим заказ курьером, через транспортную компанию или Почтой России</p>
                </div>
            </div>
            <div class="brands-section">
         <h2>Популярные бренды</h2>
        <div class="brands-container">
            <div class="brand-item"><img src={bosh} alt="Stellox"/></div>
            <div class="brand-item"><img src={bosh} alt="Areol"/></div>
            <div class="brand-item"><img src={bosh} alt="Wezer"/></div>
            <div class="brand-item"><img src={bosh} alt="Wezer"/></div>
            <div class="brand-item"><img src={bosh} alt="Wezer"/></div>
            <div class="brand-item"><img src={bosh} alt="Wezer"/></div>
            <div class="brand-item"><img src={bosh} alt="Wezer"/></div>
            <div class="brand-item"><img src={bosh} alt="Wezer"/></div>
            <div class="brand-item"><img src={bosh} alt="Wezer"/></div>
            <div class="brand-item"><img src={bosh} alt="Wezer"/></div>
            </div>
          </div>
     </div>
  );
}

export default Home;