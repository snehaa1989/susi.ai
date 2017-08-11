import './Support.css';
import $ from 'jquery';
import Close from 'material-ui/svg-icons/navigation/close';
import code from '../../images/code.png';
import Dialog from 'material-ui/Dialog';
import documentation from '../../images/programmer.png';
import ForgotPassword from '../Auth/ForgotPassword/ForgotPassword.react';
import Footer from '../Footer/Footer.react';
import github from '../../images/github.png';
import googleGroups from '../../images/google-groups.png';
import Login from '../Auth/Login/Login.react';
import PropTypes  from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import SignUp from '../Auth/SignUp/SignUp.react';
import stackoverflow from '../../images/stackoverflow.png';
import StaticAppBar from '../StaticAppBar/StaticAppBar.react';
import support from '../../images/support.png';
import question from '../../images/question.png';
import React, { Component } from 'react';

class Support extends Component {

    constructor(props) {
      super(props);
      this.state = {
        showLogin: false,
        showSignUp: false,
			  showForgotPassword: false,
      };
    }

    componentDidMount() {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
      document.title = 'Support for SUSI.AI - Open Source Artificial Intelligence for Personal Assistants, Robots, Help Desks and Chatbots';
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    }

    handleLogin = () => {
      this.setState({
        showLogin: true,
        showSignUp: false,
  			showForgotPassword: false,
      });
    }

    handleSignUp = () => {
      this.setState({
        showSignUp: true,
        showLogin: false,
  			showForgotPassword: false,
      });
    }

  	handleForgotPassword = () => {
  		this.setState({
  			showForgotPassword: true,
  			showLogin: false,
  		});
  	}

    handleClose = ()  => {
  		this.setState({
  			showLogin: false,
  			showSignUp: false,
  			showForgotPassword: false,
  		})
  	}

    render() {

    const style ={
      marginTop: '25px',
      marginBottom: '25px'
    }

    const bodyStyle = {
      'padding': 0,
      textAlign: 'center'
    }

    const closingStyle ={
      position: 'absolute',
      zIndex: 1200,
      fill: '#444',
      width: '26px',
      height: '26px',
      right: '10px',
      top: '10px',
      cursor:'pointer'
    }

    return (
            <div>
              <StaticAppBar {...this.props} location={this.props.location}/>
            <div className='gray-wrapper'>
              <div className="white-grey" >
                <div className="conversation__description">
                  <div className="support__heading">Support</div>
                  <p className="support__text">
                  Get the help and information you need from our
                  community and team through various channels.
                  </p>
                </div>
                <div className='image-container'>
                  <img src={support} alt='support' className='support' />
                </div>
              </div>
            </div>

              <div className="section">
                <div className="conversation__description">
                  <div className="support__heading">Developer Documentation</div>
                </div>
                <div className="devsite-landing-row-group">
                <div className=" support-item  support-item-with-icon  support-item-no-image">
                    <a href="http://dev.susi.ai/">
                    <div className=" support-item-icon-container">
                    <img alt='gitter' src={documentation} className=" support-item-icon"/></div></a>
                    <div className="support-description">
                          <a href="http://dev.susi.ai/">
                          <h3 id="stack-overflow">SUSI.AI Docs</h3>
                          </a>
                          <div className="support-description-content">
                          Access the full Developer Documentation on <a href="http://dev.susi.ai">
                          http://dev.susi.ai</a> to begin setting up and running SUSI.AI on your machine.
                          </div>
                          </div>
                  </div>
              </div>
              </div>
              <div className="section">
                <div className="conversation__description">
                  <div className="support__heading">Ask the community</div>
                </div>
                <div className="devsite-landing-row-group">
                <div className=" support-item  support-item-with-icon  support-item-no-image ">
                    <a href="https://stackoverflow.com/questions/tagged/susi.ai">
                    <div className=" support-item-icon-container">
                    <img alt='gitter' src={stackoverflow} className=" support-item-icon"/></div></a>
                    <div className="support-description ">
                          <a href="https://stackoverflow.com/questions/tagged/susi.ai">
                          <h3 id="stack-overflow">Stack Overflow</h3>
                          </a>
                          <div className="support-description-content">
                          Your resource for all technical questions and answers
                          </div>
                          </div>
                  </div>
                <div className=" support-item support-item-with-icon  support-item-no-image">
                    <a href="http://groups.google.com/forum/#!forum/susiai">
                    <div className=" support-item-icon-container">
                    <img alt='google groups' src={googleGroups} className=" support-item-icon"/></div></a>
                    <div className="support-description">
                          <a href="http://groups.google.com/forum/#!forum/susiai">
                          <h3 id="stack-overflow">SUSI.AI Forums</h3>
                          </a>
                          <div className="support-description-content">
                         Discuss about the projects on our Google Groups Channel.
                          </div>
                          </div>
                  </div>
                <div className=" support-item  support-item-with-icon  support-item-no-image">
                    <a href="https://github.com/fossasia?utf8=%E2%9C%93&q=susi&type=&language=">
                    <div className=" support-item-icon-container">
                    <img alt='github' src={github} className=" support-item-icon"/></div></a>
                    <div className="support-description">
                          <a href="https://github.com/fossasia?utf8=%E2%9C%93&q=susi&type=&language=">
                          <h3 id="stack-overflow">Github</h3>
                          </a>
                          <div className="support-description-content">
                          Visit our repositories and start contributing.
                          </div>
                          </div>
                  </div>
              </div>
              </div>
              <div className="section">
              <div className='left'>
                  <div className="conversation__description_">
                    <div className="support__heading">Chat With Us</div>
                  </div>
                  <div className="devsite-landing-row-group">
                  <div className=" support-item  support-item-with-icon  support-item-no-image">
                    <a href="https://gitter.im/fossasia/susi_server">
                    <div className=" support-item-icon-container">
                    <img alt='question' src={question} className=" support-item-icon"/></div></a>
                    <div className="support-description">
                          <a href="https://gitter.im/fossasia/susi_server">
                          <h3 id="stack-overflow">Get Support</h3>
                          </a>
                          <div className="support-description-content">
                          Got a problem? We are here to help.
                          </div>
                          </div>
                  </div>
                </div>
                </div>
                <div className='right'>
                <div className="conversation__description_">
                    <div className="support__heading">Browse, Create and Edit your own Skills</div>
                  </div>
                  <div className="devsite-landing-row-group">
                  <div className=" support-item  support-item-with-icon support-item-no-image">
                    <a href="http://skills.susi.ai/">
                    <div className=" support-item-icon-container">
                    <img alt='code' src={code} className=" support-item-icon"/></div></a>
                    <div className="support-description">
                          <a href="http://skills.susi.ai/">
                          <h3 id="stack-overflow">Create a SUSI Dream</h3>
                          </a>
                          <div className="support-description-content">
                          You can easily create a SUSI.AI dream in the SUSI Etherpad at
                          <a href='http://dream.susi.ai'>&nbsp;http://dream.susi.ai</a>
                          </div>
                          </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="blue-wrapper">
                <div className="non-flex blue-background">
                  <div className="conversation__description footer-desc">
                    <div className="support__heading center blue-text">Get Started Today</div>

                  <RaisedButton label="Sign Up" onTouchTap={this.handleSignUp} style={style} />
                </div>
              </div>
            <Footer/>

                  </div>


              {/* Login */}
						<Dialog
								className='dialogStyle'
								modal={true}
								open={this.state.showLogin}
								autoScrollBodyContent={true}
								bodyStyle={bodyStyle}
								contentStyle={{ width: '35%', minWidth: '300px' }}
								onRequestClose={this.handleClose}>
								<Login {...this.props}
								handleForgotPassword={this.handleForgotPassword}/>
								<Close style={closingStyle} onTouchTap={this.handleClose} />
						</Dialog>
						{/* SignUp */}
						<Dialog
								className='dialogStyle'
								modal={true}
								open={this.state.showSignUp}
								autoScrollBodyContent={true}
								bodyStyle={bodyStyle}
								contentStyle={{ width: '35%', minWidth: '300px' }}
								onRequestClose={this.handleClose}>
								<SignUp {...this.props}
								onRequestClose={this.handleClose}
								onLoginSignUp={this.handleLogin}/>
								<Close style={closingStyle}
								onTouchTap={this.handleClose} />
						</Dialog>
            {/* ForgotPassword */}
						<Dialog
								className='dialogStyle'
								modal={false}
								open={this.state.showForgotPassword}
								autoScrollBodyContent={true}
								contentStyle={{width: '35%',minWidth: '300px'}}
								onRequestClose={this.handleClose}>
								<ForgotPassword {...this.props}
								showForgotPassword={this.handleForgotPassword}/>
								<Close style={closingStyle}
								onTouchTap={this.handleClose}/>
							</Dialog>
            </div>
        );
    };
}

Support.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
}

export default Support;
