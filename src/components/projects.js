import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import './styles.css'
import {Link} from 'react-router-dom'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { 

      posts : [] 
    
    };
  }


  async componentDidMount() {
    // Este codigo retorna todos los posts
    await fetch("https://api.github.com/users/GabrielGalati/repos")
    .then( response => response.json())
    .then(
        // handle the result
        (result) => {
            this.setState({
          
                posts : result
            });
        },

        // Handle error 
        
    )
}


  toggleCategories() {

    
      const {posts} = this.state;
      return(

      
        
       <div className="containe">
           <h1 className="text-center">Open Source Projects</h1>
      <div className="row hidden-md-up">
       
    
                        
      {
          posts.map(post=>  (
            
          
          
            <div className=" col-sm-12 col-md-4">

         

          <div className= "card dr">
          <a href={post.html_url}>
          <img  src="https://cdn.dribbble.com/users/2442115/screenshots/8699490/media/48bbda278683c7879bebd57f0e2f9271.gif" className="card-img-top" />

          </a>

          <h4 className="card-title cart">{post.name}</h4>

          <div className="linea"></div>
           
          {/* <p class="card-text p-y-1">Some quick example text to build on the card title .</p>
         */}
            <a className="li" href={post.html_url}> <h6 class="card-subtitle text-muted">GitHub</h6></a>
          </div>
      
      

          </div>

          ))
    }
    

       
        </div>
        </div> 


      )
    

  }



  render() {
    return(
      <div>



          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}


export default Projects;
