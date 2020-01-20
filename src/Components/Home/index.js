import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeData } from '../../actions/home'
import { Button } from 'antd'
import { Menu, Icon } from 'antd';


class Home extends Component {



    fetchData = () => {
        const { dispatch } = this.props;
        dispatch(getHomeData());
    }
    render() {
        return(
            <div>
                      <Menu  mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="mail" />
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />
          Navigation Two
        </Menu.Item>
        
          
      </Menu>
                <Button type="primary" loading={this.props.isLoading} onClick={this.fetchData}>
                    Load Data
                </Button>
                <div>
                    {this.props.jsonAPI.body}
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    
    return state.Home;
}

export default connect(mapStateToProps)(Home);
