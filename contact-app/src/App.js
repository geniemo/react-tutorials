import { useState } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

function App() {

  const [id, setId] = useState(0);
  const [information, setInformation] = useState([]);

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
      <PhoneInfoList data={information} onRemove={handleRemove} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
