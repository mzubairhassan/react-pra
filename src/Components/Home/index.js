import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeData } from '../../actions/home'
import { Menu, Icon } from 'antd';
import { Input } from 'antd';
import { Layout, Card, Col, Row, Spin, notification  } from 'antd';

const {  Content, Footer } = Layout;

const { Search } = Input;


class Home extends Component {

    openErrorToast = () => {
        notification.open({
          message: 'Error',
          description: 'Please enter correct City Name'
        });
      }


    fetchData = (value) => {
        const { dispatch } = this.props;
        dispatch(getHomeData(value));
        
        
    }
    render() {
        return(
            <div>
                <Layout className="layout">
                   
                    {this.props.error !== 'Nill'? this.openErrorToast(): ''}
                    <Menu  mode="horizontal">
                        <Menu.Item key="mail">
                        <Icon type="tool" />
                        Weather App
                        </Menu.Item>

                        
                        
                    </Menu>
                   
                    <Content style={{ padding: '0 50px' }}>
                    
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            
                        <Search
                            placeholder="Enter City Name"
                            onSearch={value => this.fetchData(value)}
                            enterButton

                        />
                        <Spin spinning={this.props.isLoading} >
         
                            <div style={{ background: '#fff', padding: 50, minHeight: 500 }}>
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Card title="Description" bordered={true} loading={this.props.isLoading}>
                                            {this.props.weatherDesc}
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card title="Feel Like" bordered={true} loading={this.props.isLoading}>
                                            {this.props.feels_like}
                                        </Card>
                                    </Col>
                                    
                                </Row>
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Card title="Wind Speed" bordered={true} loading={this.props.isLoading}>
                                            {this.props.windSpeed}
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card title="Temp" bordered={true} loading={this.props.isLoading}>
                                            {this.props.temp}
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Spin>
                    </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Weather App 2020</Footer>
                </Layout>
                      
               
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    let error1 = '';
    if(state.Home.error !== 'Nill') {
        error1 = 'Please Enter Correct'
        return {
            ...state.Home,
            error: error1
    
        };
    }
    return state.Home;
}

export default connect(mapStateToProps)(Home);
