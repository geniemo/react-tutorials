import { useState } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

function App() {

  let id = 0;
  const [information, setInformation] = useState([]);

  const handleCreate = (data) => {
    setInformation(information.concat(Object.assign(
      {},
      data,
      { id: id++ }
    )));
  };

  return (
    <div>
      <PhoneForm onCreate={handleCreate} />
      <PhoneInfoList data={information} />
    </div>
  );
}

export default App;
