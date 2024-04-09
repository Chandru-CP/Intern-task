
import Card from '../card/card'
export default function cardBody(){
    const card_data={
        "title" : "On Time",
        "row11":"completed Iterations",
        "row21":"Total Iterations",
        "row31":"% Iterations Done",
        "row12":"7",
        "row22":"9",
        "row32":"77.9%",
        'color':'green',
    }
    const card_data1={
        "title" : "On Scope",
        "row11":"Story Point Done",
        "row21":"Total Story Point",
        "row31":"% Stories Done",
        "row12":"3200",
        "row22":"4230",
        "row32":"70.9%",
        'color':'green',
    }
    const card_data2={
        "title" : "On Velocity",
        "row11":"Average Velocity",
        "row21":"Required Velocity",
        "row12":"428.6",
        "row22":"615.0",
        'color':'red'

    }

    return(
        <div style={{display:'inline-flex'}}>
            <Card card_data={card_data}/>
            <Card card_data={card_data1}/>
            <Card card_data={card_data2}/>
        </div>

    )
}