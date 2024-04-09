import LineGraph from '../Graph/Linegraph';

const Efficiency = () => {
  const data = [
    { x: 0, y: 5 },
    { x: 1, y: 10 },
    { x: 2, y: 20 },
    { x: 3, y: 50 },
    { x: 4, y: 33 },
    { x: 6, y: 20 },
    { x: 7, y: 25 },
    { x: 8, y: 18 },
    { x: 9, y: 10 },
    { x: 10, y: 30 },
  ];
  const data1 = [
    { x: 0, y: 50 },
    { x: 1, y: 46 },
    { x: 2, y: 38 },
    { x: 3, y: 35 },
    { x: 4, y: 30 },
    { x: 6, y: 33 },
    { x: 7, y: 25 },
    { x: 8, y: 19 },
    { x: 9, y: 10 },
    { x: 10, y: 20 },
  ];
  const data2 = [
    { x: 0, y: 10 },
    { x: 1, y: 5 },
    { x: 2, y: 15 },
    { x: 3, y: 19 },
    { x: 4, y: 40 },
    { x: 6, y: 35 },
    { x: 7, y: 25 },
    { x: 8, y: 20 },
    { x: 9, y: 10 },
    { x: 10, y: 30 },
  ];
  const data3 = [
    { x: 0, y: 50 },
    { x: 1, y: 40 },
    { x: 2, y: 30 },
    { x: 3, y: 40 },
    { x: 4, y: 30 },
    { x: 6, y: 35 },
    { x: 7, y: 20 },
    { x: 8, y: 25 },
    { x: 9, y: 25 },
    { x: 10, y: 10 },
  ];
  const innerdata ={
    title :"Efficiency",
    value : "1.912",
    percent:"+0.0015(+0.13)",
    amount:"000.USD"
  }
  const innerdata1 ={
    title :"TIME TO MARKET",
    value : "327,176",
    percent:"-97,914.00(-23.03%)",
    amount:"131,040,723,108 JPY"
  }
  const innerdata2 ={
    title :"TECH DEBT",
    value : "1.1763",
    percent:"+0.0015(+0.13%)",
    amount:"0.00 USD"
  }
  const innerdata3 ={
    title :"PREDICTABLITY",
    value : "0.00313010",
    percent:"-.0050430(-13.88%)",
    amount:"1566 BTC"
  }

  return (
    <div >
      <LineGraph data={data}   bgcolor1={'#6188c2'} bgcolor2={'#81adef'} linecolor={'blue'} textcolor1={'white'}textcolor2={'#f5f5f5'} innerdata={innerdata}/>
      <LineGraph data={data1}   bgcolor1={'#007f5c'} bgcolor2={'#009f6b'} linecolor={'#00b7eb'} textcolor1={'white'}textcolor2={'#FFC4C9'} innerdata={innerdata1}/>
      <LineGraph data={data2}   bgcolor1={'white'} bgcolor2={'#fddde6'} linecolor={'#e4717a'} textcolor1={'black'}textcolor2={'#acacac'} innerdata={innerdata2}/>
      <LineGraph data={data3}   bgcolor1={'#f08080'} bgcolor2={'#e03c31'} linecolor={'red'} textcolor1={'white'}textcolor2={'#f5f5f5'} innerdata={innerdata3}/>
    </div>
  );
};

export default Efficiency;
