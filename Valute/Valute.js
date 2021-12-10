import React, {Component} from 'react'
import reactCSS from 'reactcss'
import './valute.css'
import {Card, Form} from 'react-bootstrap';
import {TwitterPicker} from 'react-color';
import {connect} from "react-redux";

class Valute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayColorPicker: false,
            color: {
                r: '241',
                g: '112',
                b: '19',
                a: '1'
            }
        };
    }

    handleClick = () => {
        this.setState({
            displayColorPicker: !this.state.displayColorPicker
        })
    };

    handleClose = () => {
        this.setState({displayColorPicker: false})
    };

    handleChange = (color) => {
        this.setState({color: color.rgb})
        this
            .props
            .dispatch({
                type: 'valutes/setValuteColor',
                payload: {
                    charCode: this.props.charCode,
                    color: color.hex
                }
            })
    };

    render() {
        const styles = reactCSS({
            'default': {
                color: {
                    background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`
                }
            }
        });

        return (
            <Card>
                <Card.Body className='d-flex align-items-center justify-content-between'>
                    <div className='position-relative'>
                        <div className='swatch' onClick={this.handleClick}>
                            <div style={styles.color}/>
                        </div>
                        {
                            this.state.displayColorPicker
                                ? <div className='popover'>
                                        <div className='cover' onClick={this.handleClose}/>
                                        <TwitterPicker color={this.state.color} onChange={this.handleChange}/>
                                    </div>
                                : null
                        }
                    </div>
                    <span className="ms-4">
                        {this.props.name}</span>
                    <Form.Check
                        onChange={(e) => {
                            this
                                .props
                                .dispatch({type: 'valutes/toggleValuteVisible', payload: this.props.charCode})
                        }} checked={this.props.checked}/>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    state.valutes.forEach(valute => {
        if (valute.color == '') {
            valute.color = '#F17013'
        }
    });

    return {valutes: state};
};

export default connect(mapStateToProps)(Valute);
