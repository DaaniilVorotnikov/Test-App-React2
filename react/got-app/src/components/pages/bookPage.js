import React from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';
import { Field } from '../itemDetails';
import ItemDetails from '../itemDetails';



export default class BookPage extends React.Component{

    gotService = new GotService();

    state = {
        selectedBook: null,
        error: false
    }


    componentDidCatch(){
        console.log('error');
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }
    
    render(){

        if(this.state.error){
            console.log('error');
            return <ErrorMessage/>
        }
        
        const itemList = (
            <ItemList 
            onItemSelected = {this.onItemSelected}
            getData = {this.gotService.getAllBooks}
            renderItem = {({name}) => `${name}`}/>

        );

        const itemDetails = (
            <ItemDetails
            itemId = {this.state.selectedBook} 
            getData = {this.gotService.getBook}>
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='NumberOfPages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
            );


        return(
                <RowBlock left={itemList} right={itemDetails}/>
            )
    }
}
