import { pokemonData } from "./pokemon";
import { Table as TableAnt, Typography, Image} from 'antd';

// Деструкторизацией достаем текст
const { Text } = Typography;

// копируем с сайта в How To Use, делаем заготовку, как будут выглядеть колонки, посути наш конфиг/ далее делаем костомизацию
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    // добавили свойство, на каждой этерации для каждой строки возьми текст кот будет приходить и положи его в тег <Text>
     render: (text) => <Text>{text}</Text>,
    },
    {
      title: 'Numder',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Class',
      dataIndex: 'classification',
      key: 'classification',
    //   в массиве устанавливаем фильтры, по которым будем фильтровать
      filters: [
        {
            text: 'Seed Pokémon',
            value: 'Seed Pokémon',
        },
        {
            text: 'Worm Pokémon',
            value: 'Worm Pokémon',
        },
        {
            text: 'Cocoon Pokémon',
            value: 'Cocoon Pokémon',
        },
      ],
    // передаем value - то, что выбираем, смотрим содержится это валью в наших данных
      onFilter: (value, item) => item.classification.includes(value)
    },

    {
        title: 'Maximum HP',
        dataIndex: 'maxHP',
        key: 'maxHP',
        // сортировка, как фильтр в js (стрелочки от меньшего к большему или от большего к меньшему)
        sorter: (a, b) => a.maxHP - b.maxHP,
      },
      {
        title: 'Maximum CP',
        dataIndex: 'maxCP',
        key: 'maxCP',
      },
      {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        // когда придет src картинки, то верни нам image тег и тот артибут src который придет
        render: (src) => <Image src={src} width={150}/>
      },
  ];

// подготавливаем данные покемонов для таблицы
const dataPokemon = pokemonData.map(pokemon => ({
    name: pokemon.name,
    number: pokemon.number,
    classification: pokemon.classification,
    maxHP: pokemon.maxHP,
    maxCP: pokemon.maxCP,
    key: pokemon.id,
    image: pokemon.image,
}))

console.log(dataPokemon);

// создаем компонент таблицу, пробрасываем пропсы для слайдера и если пришел параметр и он андефайнд/его не передали, то зададим значение по умолчанию (= 10), если не передать м. все сломаться
const Table = ({rows = 10}) => {
    
    return (
        // пробрасываем как в примере на сайте в How To Use/pagination - принимает объект, куда необходимо передать размер - rows кот. приходит (отображается на странице то кол-во покемонов, кот ставим на слайдере = внизу  на странице в page)
        <TableAnt 
        dataSource={dataPokemon} 
        columns={columns} 
        pagination={{
            pageSize: rows,
            // pageSizeOptions: [20, 50, 100],
            // убрать page - вывод кол-ва покемонов на страницу таблицы
            // showSizeChanger: false,
            // выводить подефолту 100 покемонов на страницу таблицы
            // defaultPageSize: 100,

        }}/>
    )
}

export default Table;