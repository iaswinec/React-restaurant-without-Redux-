import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Review({ reviewList }) {
    return (
    <div>
        <Accordion defaultActiveKey="0" className='mt-3'>
            <Accordion.Item eventKey="0">
                <Accordion.Header> <h5>Reviews</h5></Accordion.Header>
                <Accordion.Body>
                {
                reviewList.map(i=>
                <>
                    <div>
                        <h6>{i.name}</h6>
                        <p>{i.date}</p>
                        <p>{i.rating}</p>
                        <p><span>"</span>{i.comments}<span>"</span></p>
                    </div>
                    <hr />
                </>
                )
                }
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
    )
}

export default Review