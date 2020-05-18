import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import "../components/styles.css"


class Contact extends Component {
  render() {
    return(



      <div className="contact">
        <div className="contact-grid">
          <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">

        <h2>Gabriel Galati </h2>
             <img
              src="https://i.pinimg.com/originals/0c/5f/4c/0c5f4c05f62f13e236bc03dbd03c2959.jpg"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Pues me gusta programar</p>
  


          </div>  

          <div className="col-sm-12 col-md-6 col-lg-6">

          <ul class="list-group">

          <div className="cont list-group-item ">
          <i className ="fa fa-phone-square" />
          <p className="texto">(+54) 0414-1330060</p>
          </div>
          <div className="cont list-group-item">
          <i className ="fa fa-envelope " />
          <p className="texto">gabrielgalati.js@gmail.com</p>
          </div>
          <div className="cont list-group-item">
          <i className ="fa fa-skype" />
          <p className="texto">galati gabriel</p>
          </div>

          </ul>

        </div>

      




          </div>  



        </div>




      </div>// termina contacto











      // <div className="contact-body">
      //   <Grid className="contact-grid">
      //     <Cell col={6}>
      //       <h2>Gabriel Galati </h2>
      //       <img
      //         src="https://i.pinimg.com/originals/0c/5f/4c/0c5f4c05f62f13e236bc03dbd03c2959.jpg"
      //         alt="avatar"
      //         style={{height: '250px'}}
      //          />
      //        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Pues me gusta programar</p>

      //     </Cell>
      //     </Grid>
      //  <div className="col-lg-6">
      //  <div className="cont">
      //    <i className ="fa fa-phone-square" />
      //    <p className="texto">(+54) 0414-1330060</p>
      //    </div>

      //    <div className="cont">
      //    <i className ="fa fa-envelope" />
      //    <p className="texto">gabrielgalati.js@gmail.com</p>
      //    </div>

      //    <div className="cont">
      //    <i className ="fa fa-skype" />
      //    <p className="texto">galati gabriel</p>
      //    </div>

      //  </div>
      
      // </div>
    )
  }
}

export default Contact;
