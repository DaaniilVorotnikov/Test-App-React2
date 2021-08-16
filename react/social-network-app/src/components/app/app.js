import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : 
            [
                {label:"Going to study React", important: false, like:false, id:"qqsw"},
                {label:"Good", important: false, like:false, id:"saadas"},
                {label:"I need a breack...", important: false, like:false, id:"sdadaz"}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant =this.onToggleImportant.bind(this);
        this.onToggleLiked =this.onToggleLiked.bind(this);
    }

    deleteItem(id) {
            this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const allArr = [...before, ...after];
            return{
            data: allArr
            }
        });
    }
    addItem(boddy){
        const newItem ={
            label: boddy,
            important: false,
            id: Math.random()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
                data:newArr
            }
        })

        console.log(boddy);
    }

    onToggleMain(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newLike = {...old, value:!old.value}

            const newArray = [...data.slice(0, index), newLike, ...data.slice(index + 1)];

            return{
                data: newArray
            }
        })
    }

    onToggleImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newLike = {...old, important:!old.important}

            const newArray = [...data.slice(0, index), newLike, ...data.slice(index + 1)];

            return{
                data: newArray
            }
        })
    }

    onToggleLiked(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newLike = {...old, like:!old.like}

            const newArray = [...data.slice(0, index), newLike, ...data.slice(index + 1)];

            return{
                data: newArray
            }
        })
    }

render(){
    const liked  = this.state.data.filter(item => item.like).length;
    const allPosts  = this.state.data.length;

    return(
        <div className = "app">
    <AppHeader
    liked = {liked} allPosts={allPosts}/>
    <div className = "search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
    </div>
    <PostList 
    posts={this.state.data}
    onDelete={this.deleteItem}
    onToggleImportant={this.onToggleImportant}
    onToggleLiked={this.onToggleLiked}/>
    <PostAddForm
    onAdd={this.addItem}/>
    </div>
    )
}
}