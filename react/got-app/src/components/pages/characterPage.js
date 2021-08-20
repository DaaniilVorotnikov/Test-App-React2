import React from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';
import { Field } from '../itemDetails';
import ItemDetails from '../itemDetails';




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

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
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
            getData = {this.gotService.getAllCharacters}
            renderItem = {({name, gender}) => `${name} (${gender}) ` }/>

        );

       

        const itemDetails = (
        <ItemDetails
        itemId = {this.state.selectedChar} 
        getData = {this.gotService.getCharacter}>
            <Field field='name' label='Name'/>
            <Field field='gender' label='Gender'/>
            <Field field='born' label='Born'/>
            <Field field='died' label='Died'/>
            <Field field='culture' label='Culture'/>
        </ItemDetails>
        );

        return(
                <RowBlock left={itemList} right={itemDetails}/>
            )
    }
}
