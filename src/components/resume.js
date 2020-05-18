import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://i.pinimg.com/originals/0c/5f/4c/0c5f4c05f62f13e236bc03dbd03c2959.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Gabriel Galati</h2>
            <h4 style={{color: 'grey'}}>Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> I am 20 years old and I am a web and mobile developer passionate about software and hardware</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            
        
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={2021}
              schoolName="Universidad Alejandro de humbolt"
              schoolDescription="Estudio de ingenieria en infromatica"
               />

              
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Designio"
              jobDescription="Desarrollador principal de designio"
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={100}
                      />
                  <Skills
                      skill="Angular"
                      progress={80}
                      />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
