import React, {Component} from 'react'
import '../../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    LineSeries,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis
} from 'react-vis';
import {Alert} from 'react-bootstrap';
import {connect} from "react-redux";

class Chart extends Component {
    render() {
        const series = this
            .props
            .chartData
            .map(item => {
                const data = item
                    .values
                    .map(point => {
                        return {x: point.date, y: point.value}
                    })
                    .slice(this.props.startDate - 1, this.props.startDate + this.props.period - 1)
                return <LineSeries key={item.charCode} data={data} color={item.color}/>
            })

        return (
                series.length == 0
                ? <Alert variant="warning">
                    <Alert.Heading>Выберите курс</Alert.Heading>
                    <p>
                        Данные не выбраны
                    </p>
                </Alert>
                : <XYPlot height={700} width={800} xType='ordinal'>
                    {
                        series
                        /* <LineSeries data={[{x: 'Данные отсутствуют', y:null}]} /> */
                    }
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis
                        title='Дата'
                        style={{
                            text: {
                                stroke: 'none',
                                fill: 'white',
                                fontWeight: 600
                            },
                            title: {
                                stroke: 'none',
                                fill: 'white',
                                fontWeight: 600
                            }
                        }}/>
                    <YAxis
                        title='Курс'
                        style={{
                            text: {
                                stroke: 'none',
                                fill: 'white',
                                fontWeight: 600
                            },
                            title: {
                                stroke: 'none',
                                fill: 'white',
                                fontWeight: 600
                            }
                        }}/>
                </XYPlot>
            )
    }
}

const mapStateToProps = state => {
    return {
        chartData: state
            .valutes
            .filter(valute => valute.checked),
        period: state.date.period,
        startDate: state.date.startDate
    };
};

export default connect(mapStateToProps)(Chart);
