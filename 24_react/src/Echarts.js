import React from 'react';
import echarts from 'echarts';

export default class MyEcharts extends React.Component {
	constructor(props) {
		super(props);
		this.ecRef = React.createRef();
	}

	componentDidMount() {
		const ec = echarts.init(this.ecRef.current);
		const option = {
			toolbox: {
				feature: {
					saveAsImage: {},
				},
			},
			title: { text: 'React Test' },
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			},
			yAxis: { type: 'value' },
			series: [
				{
					type: 'line',
					data: [820, 932, 901, 934, 1290, 1330, 1320],
				},
			],
		};

		ec.setOption(option);
	}

	render() {
		return <div ref={this.ecRef} style={{ width: '600px', height: '400px' }} />;
	}
}
