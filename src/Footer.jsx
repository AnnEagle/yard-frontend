import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import arrow_img from './img/arrow.png'
import styled from 'styled-components'

export default () => {
  return (
     <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <h4 className="footer-title">ООО «Ярд»</h4>
          <p className="footer-contact">ОГРН 1175074002531</p>
          <p className="footer-contact">ИНН 5036165365</p>
          <p className="footer-contact footer-accent-line">+7 (999) 821-14-88</p>
        </div>
        <div className="col-md-2 col-md-offset-2">
          <hr className="footer-line"/>
          <h4 className="footer-title">Жилые комплексы</h4>
          <a href="" className="footer-column-link">ВТБ Арена Парк</a>
          <a href="" className="footer-column-link">Садовые кварталы</a>
          <a href="" className="footer-column-link">Резиденция Монэ</a>
          <a href="" className="footer-column-link footer-accent-line">Все ЖК Москвы
            <img src={arrow_img}/>
            </a>
        </div>
        <div className="col-md-2">
          <hr className="footer-line"/>
          <h4 className="footer-title">Компания</h4>
          <a href="" className="footer-column-link">Команда</a>
          <a href="" className="footer-column-link">О компании</a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-md-offset-4">
          <p className="footer-disclaimer">Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017</p>
        </div>
      </div>
    </div>
  </footer>
  );
};