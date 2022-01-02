import React from 'react'
import AccessBtn from './AccessBtn'

function Basic(props) {
    return (
        <div className='plan-container'>
            <h4>{props.planName}</h4>
            <h1 className='heading-one-large'>{props.price}</h1>
            <hr />
            <div className='lists'>
                <ul>
                    <li>
                        <img src={props.tickMark} alt="" />
                        <span>Transaction</span>
                    </li>
                    <li>
                        <img src={props.tickMark} alt="" />
                        <span>Auth</span>
                    </li>
                    <li>
                        <img src={props.tickMark} alt="" />
                        <span>Identity</span>
                    </li>
                    <li>
                        <img src={props.tickMark} alt="" />
                        <span>Investment</span>
                    </li>
                    <li>
                        <img src={props.tickMark} alt="" />
                        <span>Transaction</span>
                    </li>
                    <li><span className='opacity'>Liabilities</span></li>
                    <li><span className='opacity'>Income</span></li>
                </ul>
            </div>
            <AccessBtn />
        </div>
    )
}

export default Basic
