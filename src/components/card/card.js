import './card.css'
export default function Card({card_data}){
    console.log(card_data)
    return(
        <div className="card-body">
            <table>
                <th className='left-title'>{card_data.title}</th>
                <th className='right'><span class="dot" style={{backgroundColor:`${card_data.color}`}}></span></th>
            <tr>
                <td className='left'>{card_data.row11}</td>
                <td className='right'>{card_data.row12}</td>
            </tr>
            <tr>
                <td className='left'>{card_data.row21}</td>
                <td className='right'>{card_data.row22}</td>
            </tr>
            <tr>
                <td className='left'>{card_data.row31}</td>
                <td className='right'>{card_data.row32}</td>
            </tr>

            </table>
        </div>
    )
}