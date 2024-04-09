/* eslint-disable jsx-a11y/anchor-is-valid */
import './page.css';
import React from 'react';
import NestedDictTable from './NestedDictTable';
export default function page(){

    const data = {
        'Defect Arrival Rate': {
            'Pageviews': 872337,
            'Pageviews_p': 15.82,
            'Unique': 574332,
            'Unique_p': 15.33,
            'Time': '00:05:43',
            'Entrance': 802873,
            'Entrance_p': 16.75,
            'Exit': 25.96,
            'Value': 1093,
            'Value_p': 5.11
        },
        'Fixed Rate': {
            'Pageviews': 803792,
            'Pageviews_p': 14.39,
            'Unique': 456792,
            'Unique_p': 13.93,
            'Time': '00:05:24',
            'Entrance': 793982,
            'Entrance_p': 15.64,
            'Exit': 76.13,
            'Value': 6792,
            'Value_p': 36.16
        },
        'Cycle Time': {
            'Pageviews': 740702,
            'Pageviews_p': 13.46,
            'Unique': 405860,
            'Unique_p': 13.25,
            'Time': '00:04:36',
            'Entrance': 684873,
            'Entrance_p': 14.33,
            'Exit': 41.54,
            'Value': 702,
            'Value_p': 3.47
        },
        'Lead Time': {
            'Pageviews': 676659,
            'Pageviews_p': 10.29,
            'Unique': 340765,
            'Unique_p': 11.70,
            'Time': '00:04:12',
            'Entrance': 638982,
            'Entrance_p': 13.02,
            'Exit': 46.42,
            'Value': 2659,
            'Value_p': 11.64
        },
        'New Features': {
            'Pageviews': 508837,
            'Pageviews_p': 7.74,
            'Unique': 317543,
            'Unique_p': 10.66,
            'Time': '00:04:11',
            'Entrance': 555982,
            'Entrance_p': 10.44,
            'Exit': 27.40,
            'Value': 4508,
            'Value_p': 23.43
        },
        'Ready Features': {
            'Pageviews': 495938,
            'Pageviews_p': 7.38,
            'Unique': 310554,
            'Unique_p': 10.58,
            'Time': '00:02:56',
            'Entrance': 297303,
            'Entrance_p': 6.07,
            'Exit': 28.89,
            'Value': 495,
            'Value_p': 7.38
        },
        'Lead Time1': {
            'Pageviews': 676659,
            'Pageviews_p': 10.29,
            'Unique': 340765,
            'Unique_p': 11.70,
            'Time': '00:04:12',
            'Entrance': 638982,
            'Entrance_p': 13.02,
            'Exit': 46.42,
            'Value': 2659,
            'Value_p': 11.64
        },
        'New Features1': {
            'Pageviews': 508837,
            'Pageviews_p': 7.74,
            'Unique': 317543,
            'Unique_p': 10.66,
            'Time': '00:04:11',
            'Entrance': 555982,
            'Entrance_p': 10.44,
            'Exit': 27.40,
            'Value': 4508,
            'Value_p': 23.43
        },
        'Ready Features1': {
            'Pageviews': 495938,
            'Pageviews_p': 7.38,
            'Unique': 310554,
            'Unique_p': 10.58,
            'Time': '00:02:56',
            'Entrance': 297303,
            'Entrance_p': 6.07,
            'Exit': 28.89,
            'Value': 495,
            'Value_p': 7.38
        }
    };
    
    return(
        <div className="page-body">
            <div className="navbar">
                <div className='nav-left'>
                    <span>Page View</span>
                </div>
                <div className='nav-right pagination'>
                    <a href="#">Today</a>
                    <a href="#" class="active">Yesterday</a>
                    <a href="#">Week</a>
                    <a href="#">Month</a>
                    <a href="#">Quarter</a>
                    <a href="#">Year</a>
                    <div class="dropdown">
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                    </div>

                </div>
            </div>
            <div className="page-content">
            <NestedDictTable data={data}/>
            </div>
        </div>
    )
}