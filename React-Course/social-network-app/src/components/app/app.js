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
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleElementJoin =this.onToggleElementJoin.bind(this);
        this.onToggleImportant =this.onToggleImportant.bind(this);
        this.onToggleLiked =this.onToggleLiked.bind(this);
        this.onUpdateSearch =this.onUpdateSearch.bind(this);
        this.onFilterSelect =this.onFilterSelect.bind(this);
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

   
  onToggleElementJoin(el, id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newElemProps = {
                [el]: !old[el]
              };
              const newElem = {...old, ...newElemProps};
              const newArr = [...data.slice(0, index), newElem, ...data.slice(index + 1)];
              return {
                data: newArr
              }
            });
          }          

    onToggleImportant(id){
        this.onToggleElementJoin('important', id);
    }

    onToggleLiked(id){
        this.onToggleElementJoin('like', id);
    }


    searchPost(items, term){
        if(term.length === 0){
            return items
        }
        return items.filter((items) => {
            return items.label.indexOf(term) > -1
        })
    }
    filterPost(items, filter){
         if(filter === 'like'){
            return items.filter(item => item.like)
        } else{
        return items
        }
    }

    onUpdateSearch(term){
        this.setState({term})
    }

    onFilterSelect(filter){
        this.setState({filter})
    }

render(){

    const {data, term, filter} = this.state;

    const liked  = this.state.data.filter(item => item.like).length;
    const allPosts  = this.state.data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return(
        <div className = "app">
    <AppHeader
    liked = {liked} allPosts={allPosts}/>
    <div className = "search-panel d-flex">
        <SearchPanel
         onUpdateSearch = {this.onUpdateSearch}
         />
        <PostStatusFilter 
        filter={filter}
        onFilterSelect={this.onFilterSelect}/>
    </div>
    <PostList 
    posts={visiblePosts}
    onDelete={this.deleteItem}
    onToggleImportant={this.onToggleImportant}
    onToggleLiked={this.onToggleLiked}/>
    <PostAddForm
    onAdd={this.addItem}/>
    </div>
    )
}
}