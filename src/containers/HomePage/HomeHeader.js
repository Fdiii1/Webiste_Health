import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {LANGUAGE} from '../../utils/constant'
import './HomeHeader.scss'
import logo from '../../assets/bookingcare-2020.svg';
import { changLanguageApp } from '../../store/actions/appActions';
class HomeHeader extends Component {
        changLanguage = (language) =>{
            this.props.changLanguageAppRedux(language)
        }
    render() {
        let language = this.props.language
        console.log('this ',language)
        return (
            <React.Fragment>
        <div className='home-header-container'>
            <div className='home-header-content'>
                    <div className='left-content'>
                    <i className="fas fa-bars"></i>
                    <img className='header-logo' src={logo} />
                    </div>
                <div className='center-content'>
                    <div className='child-content'>
                        <div><b> <FormattedMessage id="homeheader.speciality" /></b></div>
                        <div className='subs-title'><FormattedMessage id='homeheader.searchdoctor' /></div>
                    </div>
                    <div className='child-content'>
                        <div><b><FormattedMessage id="homeheader.health-facility" /></b></div>
                        <div className='subs-title'><FormattedMessage id='homeheader.select-room' /></div>
                    </div>
                    <div className='child-content'>
                        <div><b><FormattedMessage id='homeheader.doctor' /></b></div>
                        <div className='subs-title'><FormattedMessage id='homeheader.select-doctor' /></div>
                    </div>
                    <div className='child-content'>
                        <div><b><FormattedMessage id='homeheader.fee' /></b></div>
                        <div className='subs-title'><FormattedMessage id='homeheader.check-health' /></div>
                    </div>
                    </div>
                    <div className='right-content'>
                   <div className='support'><i className="fas fa-question-circle"></i><FormattedMessage id='homeheader.support' /></div>
                   <div className={language === LANGUAGE.VI ? 'language-vi active' :'language-vi'}><span onClick={()=>this.changLanguage(LANGUAGE.VI)}>VN</span></div>
                   <div className={language === LANGUAGE.EN ? 'language-en active' :'language-en'}><span onClick={()=>this.changLanguage(LANGUAGE.EN)}>EN</span></div>

                    </div>
                </div>
                <div className='home-header-banner'>
                   <div className='content-up'>
                   <div className='title1'><FormattedMessage id='banner.title1'/></div>
                    <div className='title2'><FormattedMessage id='banner.title2'/></div>
                    <div className='search'>
                    <i className="fas fa-search"></i>
                        <input type='text' placeholder='Tìm chuyên khoa khám bệnh'/>
                    </div>
                   </div>
                   <div className='content-down'>
                     <div className='options'>
                        <div className='option-child'>
                            <div className='icon-child'><i className="fas fa-hospital"></i></div>
                            <div className='text-child'><FormattedMessage id='banner.child1'/></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'><i className="fas fa-mobile-alt"></i></div>
                            <div className='text-child'><FormattedMessage id='banner.child2'/></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'><i className="fas fa-stethoscope"></i></div>
                            <div className='text-child'><FormattedMessage id='banner.child3'/></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'><i className="fas fa-vials"></i></div>
                            <div className='text-child'><FormattedMessage id='banner.child4'/></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'><i className="fas fa-user-md"></i></div>
                            <div className='text-child'><FormattedMessage id='banner.child5'/></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'><i className="fas fa-teeth"></i></div>
                            <div className='text-child'><FormattedMessage id='banner.child6'/></div>
                        </div>

                     </div>
                   </div>
                </div>
            </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        

    };
};

const mapDispatchToProps = dispatch => {
    return {
        changLanguageAppRedux: (language) => dispatch(changLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
