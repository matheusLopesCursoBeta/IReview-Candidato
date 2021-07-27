import { createGlobalStyle } from 'styled-components';

import '../assets/css/normalize.css';
import '../assets/css/tooltip.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,600,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
  }

  a {
    text-decoration: none;
  }

  .none {
    display: none;
  }

  ::-webkit-scrollbar-track
{
	background-color: #F5F5F5;
  border-radius: 50px;
  -webkit-box-shadow: rgb(26 26 26 / 20%) 0px 2px 8px 0px;
}

::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

.button-no-style {
  background-color: transparent;
  border: none;
}

.flex-center {
  display: flex;
  align-items: center;
}

.css-2b097c-container {
  width: 100%;
}

body .css-yk16xz-control, body .css-1pahdxg-control {
  border:none !important;
  background-color: #f9f9f9;
  min-height: 31px;
  padding: 7px 0px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
}

body .css-1uccc91-singleValue {
  color: #79869f;
}

body .css-1okebmr-indicatorSeparator {
  display: none;
}

::-webkit-scrollbar-thumb
{
  background: rgb(12,30,91);
background: -moz-linear-gradient(90deg, rgba(12,30,91,1) 15%, rgba(18,34,88,1) 54%);
background: -webkit-linear-gradient(90deg, rgba(12,30,91,1) 15%, rgba(18,34,88,1) 54%);
background: linear-gradient(90deg, rgba(12,30,91,1) 15%, rgba(18,34,88,1) 54%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0c1e5b",endColorstr="#122258",GradientType=1);
border-radius: 50px;
}

  li {
    list-style: none;
  }

  button, a {
    cursor: pointer;
  }

  .container-table100 {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 33px 30px;

    .wrap-table100 {
    width: 100%;
  }

  &.vagas  {
    padding: 0px 0px;
  }
  
  table {
    border-spacing: 1;
    border-collapse: collapse;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  table * {
    position: relative;
  }
  table td,
  table th {
    padding-left: 8px;
  }
  table thead tr {
    height: 60px;
    background: #0c1e5b;
  }
  table tbody tr {
    height: 50px;
  }
  table tbody tr:last-child {
    border: 0;
  }
  table td,
  table th {
    text-align: left;
  }
  table td.l,
  table th.l {
    text-align: right;
  }
  table td.c,
  table th.c {
    text-align: center;
  }
  table td.r,
  table th.r {
    text-align: center;
  }

  .table100-head th {
    font-size: 18px;
    color: #fff;
    line-height: 1.2;
    font-weight: unset;
  }

  tbody tr:nth-child(even) {
    background-color: #f5f5f5;
  }

  tbody tr {
    font-size: 15px;
    color: #808080;
    line-height: 1.2;
    font-weight: unset;
  }

  tbody tr:hover {
    color: #555555;
    background-color: #f5f5f5;
    cursor: pointer;
  }

  tbody img {
    width: 50px;
    margin: 15px 25px 15px 0px;
  }

  @media screen and (max-width: 992px) {
    table {
      display: block;
    }
    table > *,
    table tr,
    table td,
    table th {
      display: block;
    }
    table thead {
      display: none;
    }
    table tbody tr {
      height: auto;
      padding: 37px 0;
    }
    table tbody tr td {
      padding-left: 40% !important;
      margin-bottom: 24px;
    }
    table tbody tr td:last-child {
      margin-bottom: 0;
    }
    table tbody tr td:before {
      font-size: 14px;
      color: #999999;
      line-height: 1.2;
      font-weight: unset;
      position: absolute;
      width: 40%;
      left: 30px;
      top: 0;
    }
    table tbody tr td:nth-child(1):before {
      content: 'Nome';
    }
    table tbody tr td:nth-child(2):before {
      content: 'Cargo';
    }
    table tbody tr td:nth-child(3):before {
      content: 'E-mail';
    }
    table tbody tr td:nth-child(4):before {
      content: 'Ações';
    }

    .column4,
    .column5,
    .column6 {
      text-align: left;
    }

    .column4,
    .column5,
    .column6,
    .column1,
    .column2,
    .column3 {
      width: 100%;
    }

    tbody tr {
      font-size: 14px;
    }
  }

  @media (max-width: 576px) {
    .container-table100 {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  }

  body .Toastify__toast {
    font-family: 'Roboto', 'sans-serif' !important;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 5px !important;
  }

  body .Toastify__toast--error {
    background: #e74c3c !important;
  }

  .no-style {
    background-color: transparent;
    border:none;
    display: flex;
  }

  .ReactModal__Content {
    font-family: 'Roboto', 'sans-serif' !important;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px !important;
    border:none !important;
  }

  

  body .Toastify__toast-container--bottom-center {
    width: auto !important;
    margin-left: -261px !important;
  }

  .flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }


  

`;
