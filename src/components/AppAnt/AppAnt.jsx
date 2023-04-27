import React, { useState } from "react";
// импорт библиотеки ant design, достаем нужные нам компоненты
import { Layout, Row, Col, Typography, Slider } from 'antd';
import s from './AppAnt.module.css';
import Table from '../Table/Table';

// деструкторизацией достаем компоненты кот. нам нужны
const { Header, Footer, Content } = Layout;
// Достаем из типографии заголовок
const { Title } = Typography;

const AppAnt = () => {

    // хук для слайдера
    const [rows, setRows] = useState(10);
    console.log(rows);

    return (
       <Layout>
     {/* <Layout.Header> /запись валидна, но через точку каждый блок не очень удобно, поэтому делаем др. вариантом (через деструкторизацию, см. выше)
           Header
     </Layout.Header> */}
        <Header className={s.header}>
            Header
        </Header>
        <Content>
            <Row>
                {/* Настройка грид сетки, позиционирование ее: будет одна линия (row) и колонки (16 - размер, 4 - отступы)/xs и md - это брекпоинт - разрешения/у анд дизайна 24х колончатая сетка */}
                <Col xs={24} md={{ span:16, offset: 4}}>
                    {/* дефолтное занчение и onChange для того чтобы менять это значение, а далее свяжем с таблицей(см Table)*/}
                    <Slider min={1} max={100} defaultValue={rows} onChange={setRows}/>
                    <Title>Количество покемонов</Title>
                    <Table rows={rows}/>
                </Col>
            </Row>
        </Content>
        <Footer>
            Footer
        </Footer>
    </Layout>
    )
};

export default AppAnt;