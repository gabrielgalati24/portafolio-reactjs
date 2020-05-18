import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Landing extends Component {
  componentDidMount() {

  setInterval(
      () => {
        this.setState.color = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(1,1,1,1) 50%, rgba(222,76,9,11) 100%)"
        this.render()
      },
      1000
    );
  }

  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid   className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media1.tenor.com/images/57c3b9b9018b3a072aecdbed0c20e662/tenor.gif"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | Angular | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/gabriel-galati-02245b192" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/GabrielGalati" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a> */}

          {/* Youtube
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a> */}

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
