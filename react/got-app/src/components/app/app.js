import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ErrorMessage from '../errorMessage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/gotService';


class App extends React.Component{

    gotService = new GotService();

  
    state ={
            hideRandomchar: false,
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

        const {hideRandomchar} = this.state;

        const element =  hideRandomchar === false ? null : <RandomChar/> ;
        
        if(this.state.error){
            console.log('error');
            return <ErrorMessage/>
        }


    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                    <button 
                    type="button"
                    className="btn btn-primary" 
                    onClick={() => this.setState({hideRandomchar:!hideRandomchar})
                    }> Toggle random character </button>
                    {element}
                    </Col>
                </Row>
                <CharacterPage/>
               <Row>
                <Col md='6'>
                <ItemList  
                onCharSelected = {this.onCharSelected}
                getData = {this.gotService.getAllBooks}/>
                </Col>
                <Col md='6'>
                <CharDetails charId = {this.state.selectedChar}/>
                </Col>
                </Row>
                { /*
                <Row>
                <Col md='6'>
                <ItemList  onCharSelected = {this.onCharSelected}/>
                </Col>
                <Col md='6'>
                <CharDetails charId = {this.state.selectedChar}/>
                </Col>
              </Row> */  }
            </Container>
        </>
    );
}
}

export default App;