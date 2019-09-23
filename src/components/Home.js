import React, {useState, useEffect} from 'react'
import { Container, Row } from 'reactstrap'
import ItemList from './ItemList';

function Home(props) {
    const [userLists, setUserLists] = useState([])

    return (
        <section>
            <h2>My Lists</h2>
            <Container>
                <Row>
                    <div>
                        {/* {userLists.map(list=><ItemList {...list} />)} */}
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Home