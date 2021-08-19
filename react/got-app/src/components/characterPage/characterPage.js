import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';

export default class CharacterPage extends React.Component{

    gotService = new GotService();

    state = {
        selectedChar: 130,
        error: false
    }

    componentDidCatch(){
        console.log('error');
        this.setState({
            error: true
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }
    
    render(){

        if(this.state.error){
            console.log('error');
            return <ErrorMessage/>
        }


        return(
            <Row>
            <Col md='6'>
                <ItemList 
                 onCharSelected = {this.onCharSelected}
                 getData = {this.gotService.getAllCharacters}
                 renderItem = { ((item) => `${item.name} (${item.gender}) `) }/>
            </Col>
            <Col md='6'>
                <CharDetails charId = {this.state.selectedChar}/>
            </Col>
        </Row>
            )
    }
}