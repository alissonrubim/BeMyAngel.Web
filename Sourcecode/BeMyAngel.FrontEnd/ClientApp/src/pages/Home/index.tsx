import React, { Component } from 'react';
import Globalization from '../../helpers/Globalization';
//@material-ui
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
//Resources
import Logo from '../../resources/images/be_my_angel.svg';


export default class Home extends Component {
    render() {
        return <Container maxWidth="sm">
            Be My Angel
            <img src={Logo} />
            <p>We are here to listen YOU! We can make your life better! Talk with someone that may help you. </p>
            <div><Button variant="contained" color="primary">{Globalization.GetString('I need to talk with someone')}</Button></div>

            <p>Do you want to help or be a volunter? Read more here.</p>
        </Container>;
    }
};