import	React		from	'react';
import Chevron from '@yearn-finance/web-lib/icons/IconChevron';

import Bar from './Bar';
import ChartLegend from './ChartLegend';
import Composed from './Composed';

import type {ReactElement} from 'react';
import type {TChartProps} from 'types/chart';

function Chart(props: TChartProps): ReactElement {

	function chartNavigation(): void {
		alert('Feature currently unavailable');
	}

	return (
		<div className={props.className}>
			<h2 className={'mt-10 text-lg font-semibold'}>{props.title}</h2>
			<div className={'mt-2 mb-4 flex h-[350px] items-center justify-start'}>

				{props.type === 'bar' ?  <Bar {...props} /> : <Composed {...props} /> }

				<ChartLegend items={props.legendItems}/>
			</div>

			<div className={'ml-10 flex w-3/4 items-center justify-center' }>
				<Chevron className={'cursor-pointer'} onClick={chartNavigation} />
				<span className={'ml-10 text-neutral-500'}>{'May'}</span> 
				<span className={'mx-10 font-semibold'}>{'June'}</span>
				<span className={'mr-10 text-neutral-500'}>{'July'}</span>
				<Chevron className={'rotate-180 cursor-pointer'} onClick={chartNavigation} />
			</div>
		</div>
	);
}

export default Chart;