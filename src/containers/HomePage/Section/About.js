import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';
class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
            <div className='section-about-header'>
                Truyền thông nói về BookingCare
            </div>
            <div className='section-about-content'>
                <div className='content-left'>
                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/ezh7rQaDoJ4?list=PLofk0Qws87XWFsnDn_-37Ay4-lKM0rhwa" 
                title="2 Ngày 1 Đêm Việt Nam | Tập 3: Dương Lâm &quot;ngã quỵ&quot; trên sân với cú &quot;vô lê&quot; đẳng cấp từ Cris Phan"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
                </div>
            <div className='content-right'>
                <p>
                Trong video này, chúng ta sẽ hoàn tất việc design giao diện theo trang bookingcare.vn. Chúng ta sẽ hoàn thiện những phần đang còn dang dở, để từ video tiếp theo, chúng ta sẽ bắt đầu làm về backend và react để tạo dữ liệu thật cho trang home design này.
                </p>
            </div>
            </div>
            </div> 
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
