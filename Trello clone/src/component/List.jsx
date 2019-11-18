import React from 'react';
import { Card } from 'react-bootstrap';




export let List = (props) => {
    let i = 0;

    return (
        props.lists.map((element) => {
            return (
                <React.Fragment key={i}>
                    <br />

                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>
                                {element} {i++}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <button onClick={() => props.remove(element)}>Remove</button>
                </React.Fragment>
            )

        })
    )


}
