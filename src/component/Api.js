import React, { useEffect,useState } from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';

const Api = () => {
    const [users, setUsers] = useState([])

    const callApi = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        setUsers(await response.json());
    }
    useEffect(() => {
        callApi();
      },[]);
    return (
        <>
            <h1 className="text-center">Api Call</h1>
            <div className="container-fluid mt-5">
                <div className="row text-center ">

            {
                users.map((data)=>{
                    return (
                        <>
                            <Card style={{ width: '18rem' }} className="m-1">
                            <Card.Body >
                            <Card.Title>{data.id}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{data.title}</Card.Subtitle>
                            <Card.Text>
                                {data.body}
                            </Card.Text>
                            </Card.Body>
                            </Card>
                        </>
                    )
                })
            }
            </div>
        </div>
            
    </>
    )
}

export default Api
