import React from 'react';
import './page.css';
import Pagegraph from '../Graph/Pagegraph';

export default function NestedDictTable({ data }) {
  const data1 = {
    Pageviews: [800, 500,600, 1200,1500, 500,400, 300,200],
    Unique: [574332, 456792, 405860, 340765, 317543, 310554, 340765, 317543, 310554],
    Time: [5.43, 5.24, 4.36, 4.12, 4.11,2.56, 4.12, 4.11, 2.56],
    Entrance: [802873, 793982, 684873, 638982, 555982, 297303, 638982, 555982, 297303],
    Exit: [25.96, 76.13, 41.54, 46.42, 27.4, 28.89, 46.42, 27.4, 28.89],
    Value: [1093, 6792, 702, 2659, 4508, 495, 2659, 4508, 495],
    y: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  };

  const dataArray = Object.entries(data).map(([key, value], index) => ({
    x: data1.y[index], 
    y: data1.Pageviews[index] 
    
  }));
  const dataArray1 = Object.entries(data).map(([key, value], index) => ({
    x: data1.y[index], 
    y: data1.Unique[index] 
    
  }));
  const dataArray2 = Object.entries(data).map(([key, value], index) => ({
    x: data1.y[index], 
    y: data1.Time[index] 
    
  }));
  const dataArray3 = Object.entries(data).map(([key, value], index) => ({
    x: data1.y[index], 
    y: data1.Entrance[index] 
    
  }));
  const dataArray4 = Object.entries(data).map(([key, value], index) => ({
    x: data1.y[index], 
    y: data1.Exit[index] 
    
  }));
  const dataArray5 = Object.entries(data).map(([key, value], index) => ({
    x: data1.y[index], 
    y: data1.Value[index] 
    
  }));

  return (
    <table className="table-page">
      <thead>
        <tr className='tr-page'>
            <th className='th-page'>page</th>
            <th className='th-page'><p className='th-top'>Pageviews</p><p className='th-bottom'>356,928</p><Pagegraph dataArray={dataArray} width={70} height={14}/></th>
            <th className='th-page'><p className='th-top'>Unique Pageviews</p><p className='th-bottom'>275,588</p><Pagegraph dataArray={dataArray1} width={70} height={14}/></th>
            <th className='th-page'><p className='th-top'>Avg.time on page</p><p className='th-bottom'>00:03:51</p><Pagegraph dataArray={dataArray2} width={70} height={14}/></th>
            <th className='th-page'><p className='th-top'>Extrances</p><p className='th-bottom'>315,643</p><Pagegraph dataArray={dataArray3} width={70} height={14}/></th>
            <th className='th-page'><p className='th-top'>% Exit</p><p className='th-bottom'>39,84%</p><Pagegraph dataArray={dataArray4} width={70} height={14}/></th>
            <th className='th-page'><p className='th-top'>Page value</p><p className='th-bottom'>$19,983</p><Pagegraph dataArray={dataArray5} width={70} height={14}/></th>
        </tr>
      </thead>
      <tbody className='scroll-container'>
        {Object.keys(data).map((key, index) => {
          const rowData = data[key];
          return (
            <tr  className='tr-page' key={index}>
              <td className='align-left'>/{key}</td>
              <td className='align-right'><span>{rowData['Pageviews']}</span><span className='page-content-percent'>({rowData['Pageviews_p']}%)</span></td>
              <td className='align-right'><span>{rowData['Unique']}</span><span className='page-content-percent'>({rowData['Unique_p']}%)</span></td>
              <td className='align-right'><span>{rowData['Time']}</span></td>
              <td className='align-right'><span>{rowData['Entrance']}</span><span className='page-content-percent'>({rowData['Entrance_p']}%)</span></td>
              <td className='align-right'><span>{rowData['Exit']}</span></td>
              <td className='align-right'><span>{rowData['Value']}</span><span className='page-content-percent'>({rowData['Value_p']}%)</span></td>
            </tr>
          );

        })}
      </tbody>
    </table>
  );
}