import React from 'react';
import Echarts from 'echarts-for-react';

export default function MyEcharts() {
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

	return <Echarts option={option} style={{ width: '600px', height: '400px' }} />;
}
