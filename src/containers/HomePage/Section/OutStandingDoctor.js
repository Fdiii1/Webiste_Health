import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';
class OutStandingDoctor extends Component {

    render() {

        return (
            <div className='section-share section-outStanding-doctor'>
            <div className='section-container'>
                <div className='section-header'>
                    <span className='title-section'>Bác sĩ nổi bậc</span>
                    <button className='btn-section'>Xem thêm</button>
                </div>
                <div className='section-body'>
                <Slider {...this.props.settings}> 
                <div className="section-customize">
                  <div className='customize-border'>
                  <div className='outer-bg'>
                    <img className='bg-image section-outstanding-doctor' />
                    </div>
                    <div className='position text-center'>
                        <div>Giáo sư , Tiến sĩ Fruzii</div>
                        <div>Cơ Xương khớp</div>
                    </div>
                  </div>
                </div>
                <div className="section-customize">
                <div className='customize-border'>
                    <div className='outer-bg'>
                    <img className='bg-image section-outstanding-doctor' />
                    </div>
                    <div className='position text-center'>
                        <div>Giáo sư , Tiến sĩ Fruzii</div>
                        <div>Cơ Xương khớp 1</div>
                    </div>
                </div>
                </div>
                <div className="section-customize">
                <div className='customize-border'>
                    <div className='outer-bg'>
                    <img className='bg-image section-outstanding-doctor' />
                    </div>
                    <div className='position text-center'>
                        <div>Giáo sư , Tiến sĩ Fruzii</div>
                        <div>Cơ Xương khớpc2</div>
                    </div>
                </div>
                </div>
                <div className="section-customize">
                <div className='customize-border'>
                    <div className='outer-bg'>
                    <img className='bg-image section-outstanding-doctor' />
                    </div>
                    <div className='position text-center'>
                        <div>Giáo sư , Tiến sĩ Fruzii</div>
                        <div>Cơ Xương khớp 3</div>
                    </div>
                </div>
                </div>
                <div className="section-customize">
                <div className='customize-border'>
                    <div className='outer-bg'>
                    <img className='bg-image section-outstanding-doctor' />
                    </div>
                    <div className='position text-center'>
                        <div>Giáo sư , Tiến sĩ Fruzii</div>
                        <div>Cơ Xương khớp 4</div>
                    </div>
                </div>
                </div>
                <div className="section-customize">
                <div className='customize-border'>
                    <div className='outer-bg'>
                    <img className='bg-image section-outstanding-doctor' />
                    </div>
                    <div className='position text-center'>
                        <div>Giáo sư , Tiến sĩ Fruzii</div>
                        <div>Cơ Xương khớp 5</div>
                    </div>
                </div>
                </div>
                <div className="section-customize">
                <div className='customize-border'>
                    <div className='outer-bg'>
                    <img className='bg-image section-outstanding-doctor' />
                    </div>
                    <div className='position text-center'>
                        <div>Giáo sư , Tiến sĩ Fruzii</div>
                        <div>Cơ Xương khớp 6</div>
                    </div>
                </div>
                </div>
                
                </Slider>
                </div>
            
            </div> 
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
