import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            allData:[],
        }
    }
    componentDidMount = () =>{
        const url=`${process.env.REACT_APP_SERVER}/getAll`
        axios.get(url).then((result)=>{
            // console.log(result.data);
            this.setState({
                allData:result.data,
            })
        })
    }

    addToFav = (item)=>{
        // console.log(item.name);
        const obj ={
            name:item.name,
            url:item.url,
        }
        // console.log(obj.name,'---',obj.url);
        const url=`${process.env.REACT_APP_SERVER}/addToFav`;
        axios.post(url,obj);
    }
    render() {
        return (
            <>
               <PokemonCard 
               allData={this.state.allData}
               addToFav={this.addToFav}
               />

            </>
        );
    }
}

export default Main;
