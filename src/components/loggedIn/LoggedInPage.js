import React from 'react';
import {withRouter} from '../commonComponents/withRouter';
import localStorageService from '../../api/localStorage/localStorageService';
import api from '../../api/api'; 


class LoggedInPage extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            toDisplayPage: false
        }
        this.onClickLogOut = this.onClickLogOut.bind(this);
    }
    componentDidMount() {
        api.checkIfLoggedIn().then(res => {
            if(res === true) {
                this.setState({toDisplayPage: true});
            }
        })
    }

    onClickLogOut = () => {
        let userId = localStorageService.getUserId()
        api.logOut(userId).then( () => {
            localStorageService.clearToken();
            this.props.navigate('/login');
        });
    }

    renderPage() {
        if(this.state.toDisplayPage === true) {
            return (
                <div className="logged-in-container">
                    <div className="home-page-welcome">Welcome to Home Page</div>
                    <div className="logout-button" onClick={this.onClickLogOut}>Log Out</div>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="logged-in-main">
                {this.renderPage()}
            </div>
        );
    }
}


export default withRouter(LoggedInPage);