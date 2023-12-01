import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restaurant.css'
import { Link } from 'react-router-dom';
function Restaurant() {

    const [restList, setRest] = useState([])

    //api to access data
    const getData = async () => {
        const result = await fetch('/restaurants.json')
        result.json().then(data => setRest(data.restaurants))    //store the data in restList by using setRest function
    }

    // console.log(restList);

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <h1 className='text-warning'>Food Paradises of Kerala</h1>
            <div className='container mt-2'>As we think about ‘God’s Own Country’, Kerala, we usually visualize the backwaters, houseboats, and beaches. What we do not think about is the wide variety of sumptuous Kerala cuisines. Kerala is one state where you will find a lot of Malabari, Arabic, French, and Brit influence in the cuisines. From Karimeen Pollicahthu to Puttu, from Appam to various types of seafood, the options are endless. Almost each of the Malayalam cuisines is made in coconut oil, which as a result gives a very authentic taste. There is also a lot of use of tamarind and curry leaves in the cuisines. The best part is that there are several restaurants in the state; therefore, you will never fall short of options when it comes to tasting the local food in Kerala. </div>
        <Row style={{width:'100%'}}>
            {
                restList.map(rest => (
                    
            <Col className='p-2 cardDiv' lg={4} md={6}>
                    <Link to={`/viewRest/${rest.id}`} id='l1'>
                            <Card id='c1' className=' mt-5 ms-5' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={rest.photograph} />
                                <Card.Body>
                                    <Card.Title>{rest.name}</Card.Title>
                                    <Card.Text>
                                        {rest.address}
                                    </Card.Text>                           
                                </Card.Body>
                            </Card>
                    </Link>
            </Col>
                )
                )
            }
            
        </Row>
        </div>
    )
}

export default Restaurant