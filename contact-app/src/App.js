import { useState } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

function App() {

  const [id, setId] = useState(3);
  const [information, setInformation] = useState([
    {
      id: 0,
      name: '홍길동',
      phone: '010-0000-0001',
    },
    {
      id: 1,
      name: '김혜린',
      phone: '010-0000-0002',
    },
    {
      id: 2,
      name: '박지원',
      phone: '010-0000-0003',
    },
  ]);
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  const handleCreate = (data) => {
    setInformation(information.concat(Object.assign(
      {},
      data,
      { id: id }
    )));
    setId(id + 1);
  };

  const handleRemove = (id) => {
    setInformation(information.filter(info => info.id !== id));
  }

  const handleUpdate = (id, data) => {
    setInformation(information.map(
      info => {
        if (info.id === id) {
          return {
            id,
            ...data,
          };
        }
        return info;
      }
    ))
  }

  return (
    <div>
      <PhoneForm onCreate={handleCreate} />
      <input value={keyword} onChange={handleChange} placeholder="검색..." />
      <PhoneInfoList data={information.filter(
        info => info.name.indexOf(keyword) > -1
      )} onRemove={handleRemove} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
