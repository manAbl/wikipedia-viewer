import React from 'react';
import '../styles/main-page-styles.css';

const MainPage = ({searchQuery}) => {
  return (
    <div className='wrapper-main'>
      <InputField label='Click to search an article' aria='inputSearch' type='text' onChange={searchQuery}/>
      <br/>
        or
      <br/>
      <Button btnLabel='Get Random' />
    </div>
  );
}

export default MainPage;
