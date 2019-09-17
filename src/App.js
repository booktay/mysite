import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Document from './Components/Document';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {
        "main": {
          "name": "Siwanont Sittinam",
          "occupation": "Computer Engineer",
          "description": "You can call me Books",
          "image": "profilepic.jpg",
          "bio": "Siwanont is a computer engineer. He is enthusiasm and good collaboration. He enjoys challenging himself and he like learning new experiences to know himself better and expose himself to new ideas. He interested in Network and Data Analytic. He currently looking for a job.",
          "contactmessage": "Here is where you should write your message to readers to have them get in contact with you.",
          "email": "siwanont1@gmail.com, siwanont.s@ku.th",
          "phone": "(+66) 82-202-6839, (+66) 92-686-8855",
          "address": {
            "street": "206/82 Icondo 2 Nwamwongwan, Nwamwongwan 6-21 Road",
            "city": "Bangkhen",
            "state": "Nonthaburi",
            "zip": "11000"
          },
          "website": "https://siwanont.ml",
          "download": [
            {
              "name": "Resume",
              "url": "siwanont_resume.pdf"
            },
            {
              "name": "Transcript",
              "url": "siwanont_transcript.pdf"
            },
            {
              "name": "CCNA R&S Letter",
              "url": "siwanont_ccna_nocert.pdf"
            },
            {
              "name": "HCNA R&S Certification",
              "url": "siwanont_hcia.pdf"
            }
          ],
          "social": [
            {
              "name": "facebook",
              "url": "https://fb.me/booktay",
              "className": "fa fa-facebook"
            },
            {
              "name": "linkedin",
              "url": "https://www.linkedin.com/in/siwanont-sittinam-8473a9174/",
              "className": "fa fa-linkedin"
            },
            {
              "name": "instagram",
              "url": "https://instagram.com/booktay",
              "className": "fa fa-instagram"
            },
            {
              "name": "github",
              "url": "https://github.com/booktay",
              "className": "fa fa-github"
            }
          ]
        },
        "resume": {
          "skillmessage": "Here you can create a short write-up of your skills to show off to employers",
          "education": [
            {
              "school": "Kasetsart University",
              "degree": "Bachelor of Engineering, B.Eng. (Computer Engineering)",
              "graduated": "May 2019",
              "description": "Describe your experience at school, what you learned, what useful skills you have acquired etc."
            },
            {
              "school": "Debsirin School",
              "degree": "High School Diploma",
              "graduated": "March 2013",
              "description": "Describe your experience at school, what you learned, what useful skills you have acquired etc."
            }
          ],
          "work": [
            {
              "company": "Massive Information and Knowledge Engineering Lab, Kasetsart University",
              "title": "Junior Researcher ",
              "years": "May 2016 - 2019",
              "description": "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
            },
            {
              "company": "ZEABUS (Autonomous Underwater Vehicle) Lab, Kasetsart University",
              "title": "Junior Robotic Electrician",
              "years": "August 2014 - May 2015",
              "description": "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
            },
            {
              "company": "ZEABUS (Autonomous Underwater Vehicle) Lab, Kasetsart University",
              "title": "Junior Robotic Electrician",
              "years": "August 2014 - May 2015",
              "description": "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
            },
            {
              "company": "ZEABUS (Autonomous Underwater Vehicle) Lab, Kasetsart University",
              "title": "Junior Robotic Electrician",
              "years": "August 2014 - May 2015",
              "description": "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
            }
          ],
          "internship": [
            {
              "company": "Internet Marketing CO., LTD (Pantip.com)",
              "title": "Web Developer ",
              "years": "June 2017 - July 2017",
              "description": "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
            },
            {
              "company": "Software Engineering Lab, Kyoto Institute of technology",
              "title": "Software Engineer ",
              "years": "June 2018 - July 2018",
              "description": "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
            }
          ],
          "skills": [
            {
              "name": "Git",
              "level": "60%"
            },
            {
              "name": "Illustrator",
              "level": "55%"
            },
            {
              "name": "ReactJs",
              "level": "50%"
            },
            {
              "name": "CSS",
              "level": "90%"
            },
            {
              "name": "HTML5",
              "level": "80%"
            },
            {
              "name": "VueJs",
              "level": "50%"
            },
            {
              "name": "MongoDB",
              "level": "80%"
            }
          ]
        },
        "portfolio": {
          "projects": [
            {
              "title": "Canadian Wanderlust",
              "category": "My Travel Blog for my post-university travels",
              "image": "canadian-wanderlust.jpg",
              "url": "https://www.canadianwanderlust.com"
            },
            {
              "title": "Fury Fighting Gear",
              "category": "(offline now) A fighting gear company I started",
              "image": "fury-fighting-gear.jpg",
              "url": "http://www.timbakerdev.com"
            },
            {
              "title": "Original Thai Food",
              "category": "Website I built for a restaurant I like in Thailand",
              "image": "original-thai-food.jpg",
              "url": "http://www.timbakerdev.com/originalthaifood.github.io"
            },
            {
              "title": "Resume Website",
              "category": "A React based resume website template",
              "image": "resume-website.jpg",
              "url": "http://www.timbakerdev.com"
            },
            {
              "title": "Smirkspace",
              "category": "(MVP Only) A React and Meteor based chat University project.",
              "image": "smirkspace.jpg",
              "url": "http://www.smirkspace.com"
            }
          ]
        }
      }
    };

  }

  // getResumeData(){
  //   $.ajax({
  //     url:'https://raw.githubusercontent.com/booktay/mysite/master/public/resumeData.json',
  //     dataType:'json',
  //     cache: false,
  //     success: function(data){
  //       this.setState({resumeData: data});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.log(err);
  //       alert(err);
  //     }
  //   });
  // }

  // componentDidMount(){
  //   this.getResumeData();
  // }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        {/* <Document data={this.state.resumeData.main} /> */}
        {/* <Resume data={this.state.resumeData.resume}/> */}
        {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        {/* <Footer data={this.state.resumeData.main}/> */}
      </div>
    );
  }
}

export default App;
