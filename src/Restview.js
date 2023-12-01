import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Operatingtime from './Operatingtime.js';
import Review from './Review.js';

function Restview() {

    const [restList, setRest] = useState([])

    const getData = async () => {
        const result = await fetch('/restaurants.json')
        result.json().then(data => setRest(data.restaurants))
    }

    const params = useParams()    //object create for useParams
    console.log(params.id);

    const singleRest = restList.find(i => i.id == params.id)
    console.log(singleRest);

    useEffect(() => {
        getData()
    }, [])


    return (


        <>
            { 
            singleRest?
                (<Row className='mt-3 w-100'>
                <Col lg={6} md={6} className='mb-3 p-3'>
                    <img className='img-fluid  p-3' src={singleRest.photograph} />
                </Col>
                <Col lg={6} md={6} className='p-3'>
                    <ListGroup className='pe-4'>
                        <ListGroup.Item><h1 className='text-warning'>{singleRest.name}</h1></ListGroup.Item>
                        <ListGroup.Item className='text-start'>Address: <strong>{singleRest.address}</strong></ListGroup.Item>
                        <ListGroup.Item className='text-start'>neighborhood:<strong>{singleRest.neighborhood}</strong></ListGroup.Item>                        
                        <ListGroup.Item className='text-start'>Cuisine Type:<strong>{singleRest.cuisine_type}</strong></ListGroup.Item>
                        <ListGroup.Item className='text-start'>    

                            <Operatingtime workingTime={singleRest.operating_hours}/>
                            <Review reviewList={singleRest.reviews}/>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>):""
            }
        </>
    )
}

export default Restview

