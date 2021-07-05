import axios from 'axios';
import React, { Component } from 'react';
import {CardGroup,Card,Button} from 'react-bootstrap';
import UpdateForm from './UpdateForm';
class Favorite extends Component {
    constructor(props){
        super(props);
        this.state={
            favData:[],
            show:false,
            name:'',
            url:'',
            id:'',
        }
    }
    componentDidMount = () =>{
        const url =`${process.env.REACT_APP_SERVER}/getFav`;
        axios.get(url).then((result)=>{
            // console.log(result.data);
            this.setState({
                favData:result.data
            });
        })
    }

    delete =(item) =>{
        // console.log(item);
        const id=item._id;
        console.log(id);
        const url=`${process.env.REACT_APP_SERVER}/delete?id=${id}`;
        axios.delete(url).then((result)=>{
            this.setState({
                favData:result.data
            });
        })
    }

    sohwUpdateForm =(item) =>{
        console.log(item);
        this.setState({
            show:true,
            name:item.name,
            url:item.url,
            id:item._id,
        })
    }

    handleClose =()=>{
        this.setState({
            show:false
        })
    }

    updatePokemon =(event) =>{
        event.preventDefault();
        const obj= {
                name:event.target.name.value,
                url:event.target.url.value,
                id:this.state.id,
        }
        
        // console.log(obj);    
        const url =`${process.env.REACT_APP_SERVER}/updatePokemon`;
        axios.put(url,obj).then((result)=>{
            console.log(result.data);
            this.setState({
                favData:result.data
            });

            // this.setState({
            //     favData:result.data
            // });

        })
    }

    // updatePokemon =(event) => {
    // event.preventDefalut();
    // console.log('hi');
    // // const obj= {
    // //     name:event.target.name.value,
    // //     url:event.target.url.value,
    // //     id:this.state.id,
    // // }
    // // console.log(obj);
    // }
    
    render() {
        return (
            <>
            <CardGroup>

            {this.state.favData.map((item,idx)=>{
                return(
                    <div key={idx}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                            {item.url}
                            </Card.Text>
                            <Button variant="primary" onClick={()=>this.delete(item)}>Delete</Button>
                            <Button variant="primary" onClick={()=>this.sohwUpdateForm(item)}>Update</Button>
                        </Card.Body>
                        </Card> 
                    </div>
                )
            })}
             </CardGroup>
             <UpdateForm
             show={this.state.show}
             handleClose={this.handleClose}
             name={this.state.name}
             url={this.state.url}
             updatePokemon={this.updatePokemon}

             />
             </>
        );
    }
}

export default Favorite;
