import React from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';


 class BookPage extends React.Component{

    gotService = new GotService();

    state = {
        error: false
    }


    componentDidCatch(){
        console.log('error');
        this.setState({
            error: true
        })
    }

    
    render(){

        if(this.state.error){
            console.log('error');
            return <ErrorMessage/>
        }
        


        return(
            <ItemList 
            onItemSelected = {(itemId)=>{
               this.props.history.push(itemId) 
            }}
            getData = {this.gotService.getAllBooks}
            renderItem = {({name}) => `${name}`}/>
            )
    }
}
export default withRouter(BookPage)