import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import  {CharacterPage, BookPage, HousePage, BooksItem} from  '../pages';
import './app.css';

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

        const element =  hideRandomchar === false ? null : <RandomChar interval={5000}/> ;
        
        if(this.state.error){
            console.log('error');
            return <ErrorMessage/>
        }


    return (
        <Router>
        <div className="app"> 
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
                <Route path='/characters' component={CharacterPage}/>
                <Route path='/books' exact component={BookPage}/>
                <Route path='/houses' component={HousePage}/>
                <Route path='/books/:id'  render={
                    ({match}) => {
                    const {id} = match.params;

                   return  <BooksItem bookId={id}/>
                    }
                }/>
            </Container>
            </div>
            </Router>
    );
}
}

export default App;