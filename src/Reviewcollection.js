import React from 'react';

const Reviewcollection = () => {
  const colldata = [
    { thumbnail: 'https://gumlet.assettype.com/filmcompanion%2F2023-04%2Fd260afd8-034c-4a3e-b197-bfb117cc9d9c%2FVetriramaan_lead_image.jpg?auto=format%2Ccompress&fit=max&w=1200', name: 'Movies of Vertimaran', link: 'one.html' },
    { thumbnail: 'https://www.90daykorean.com/wp-content/uploads/2021/05/Kdrama-2.png', name: 'K-dramas', link: 'two.html' },
    { thumbnail: 'https://c.saavncdn.com/editorial/Let_sPlaySelenaGomez_20231018052134.jpg', name: 'Favourites of Selena Gomez', link: 'three.html' }
  ];

  const cellStyle = {
    paddingRight: '50px',
    paddingLeft: '60px',
    textAlign: 'center', // Align content in the center
  };

  return (
    <table>
      <tr>
        {colldata.map((row, index) => (
          <td key={index} style={{ ...cellStyle, paddingLeft: index === 0 ? '145px' : '25px', paddingRight: index === colldata.length - 1 ? '80px' : '25px' }}>
            <img className='' src={row.thumbnail} alt={row.name} style={{ width: '400px', height: '280px' }} />
          </td>
        ))}
      </tr>
      <tr>
        {colldata.map((row, index) => (
          <td key={index} style={cellStyle}>
            <a className='text-slate-50' href={row.link}>{row.name}</a>
          </td>
        ))}
      </tr>
    </table>
  );
};

export default Reviewcollection;
