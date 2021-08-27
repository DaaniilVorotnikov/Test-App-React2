import React from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';
import { Field } from '../itemDetails';
import ItemDetails from '../itemDetails';




export default class HousePage extends React.Component{

    gotService = new GotService();

    state = {
        selectedHouse: null,
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
            selectedHouse: id
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
            getData = {this.gotService.getAllHouses}
            renderItem = {({name}) => name}/>

        );

        const itemDetails = (
            <ItemDetails
            itemId = {this.state.selectedHouse} 
            getData = {this.gotService.getHouse}>
                <Field field='name' label='Name'/>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>
            );

        return(
                <RowBlock left={itemList} right={itemDetails}/>
            )
    }
}
