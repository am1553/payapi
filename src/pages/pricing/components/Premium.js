import React from 'react'
import AccessBtn from './AccessBtn'

function Premium(props) {
    return (
        <div className='plan-container'>
            <h4>{props.planName}</h4>
            <h1 className='heading-one-large'>{props.price}</h1>
            <hr />
            <div className='lists'>
                <ul>
                    <li>
                        <img src={props.tickMark} alt="" />
                        Transaction
                    </li>
                    <li>
                        <img src={props.tickMark} alt="" />
                        Auth
                    </li>
                    <li>
                        <img src={props.tickMark} alt="" />
                        Identity
                    </li>
                    <li>
                        <img src={props.tickMark} alt="" />
                        Investment
                    </li>
                    <li>
                        <img src={props.tickMark} alt="" />
                        Assets
                    </li>
                    <li>
                        <img src={props.tickMark} alt="" />
                        Liabilities
                    </li>
                    <li>
                        <img src={props.tickMark} alt="" />
                        Income
                    </li>
                </ul>
            </div>
            <hr />
            <AccessBtn />
        </div>
    )
}

export default Premium
