import {Container, Row, Col, Stack, Form} from 'react-bootstrap';
import React, {Component} from 'react'
import Valute from './Valute/Valute';
import Chart from './Chart/Chart';
import Api from './Store/api'
import {connect} from "react-redux";
import RangeSlider from 'react-bootstrap-range-slider';

class App extends Component {

    componentDidMount() {
        Api.getValutes()
            .then(valutes => {
                valutes.forEach(valute => {
                    valute.color = '';
                    valute.checked = false
                })
                this
                    .props
                    .dispatch({type: 'valutes/setValutes', payload: valutes})
                this
                    .props
                    .dispatch({type: 'valutes/toggleValuteVisible', payload: valutes[0].charCode})
            })
    }

    render() {
        return (
            <Container className="mt-5">
                <Row>
                    <Col className="col">
                        <Chart/>
                    </Col>
                    <Col className="col-md-4">
                    <div className='text-light'>
                            <Form.Label>Выбор начальной даты</Form.Label>
                            <Form>
                                <Form.Group as={Row}>
                                    <Col xs="9">
                                        <RangeSlider
                                            value={this.props.startDate}
                                            min={1}
                                            max={15}
                                            step={1}
                                            onChange={(e) => this.props.dispatch({type: 'period/setStartDate', payload: e.target.value})}/>
                                    </Col>
                                    <Col xs="3">
                                        {this.props.valutes.length > 0 ? <Form.Control value={this.props.startDate - 1}/> : null}
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className='text-light'>
                            <Form.Label>Выбор периода</Form.Label>
                            <Form>
                                <Form.Group as={Row}>
                                    <Col xs="9">
                                        <RangeSlider
                                            value={this.props.period}
                                            min={1}
                                            max={7}
                                            step={1}
                                            onChange={(e) => this.props.dispatch({type: 'period/setPeriod', payload: e.target.value})}/>
                                    </Col>
                                    <Col xs="3">
                                        <Form.Control value={this.props.period}/>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div>
                        <Stack
                            className="mt-3"
                            gap={2}
                            style={{
                                overflowY: 'auto',
                                height: '500px'
                            }}>
                            {
                                this
                                    .props
                                    .valutes
                                    .map(
                                        valute => <Valute
                                            key={valute.charCode}
                                            charCode={valute.charCode}
                                            name={valute.name}
                                            checked={valute.checked}
                                            color={valute.color}/>
                                    )
                            }
                        </Stack>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {valutes: state.valutes, period: state.date.period, startDate: state.date.startDate};
};

export default connect(mapStateToProps)(App);
