import	React		from	'react';

import type {ReactElement, SVGProps} from 'react';

type TLogo = SVGProps<SVGSVGElement> & {isColored?: boolean};

function	LogoDeus(props: TLogo): ReactElement {
	const defaultProps = {
		width: 40,
		height: 40
	};

	props = {...defaultProps, ...props};

	return props.isColored ? (
		<svg
			viewBox={'0 0 80 80'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}>
			<path d={'M40 0C17.9094 0 0 17.9094 0 40C0 62.0906 17.9094 80 40 80C62.0906 80 80 62.0906 80 40C79.9303 17.9094 62.0209 0 40 0Z'} fill={'#141516'}/>
			<path d={'M57.2143 37.2356C56.8247 37.2261 56.4383 37.3071 56.0853 37.4721L42.5396 23.9195C42.6967 23.5626 42.7811 23.178 42.7882 22.7882C42.7864 22.0493 42.492 21.3412 41.9695 20.8187C41.447 20.2962 40.7389 20.0019 40.0001 20C39.2616 20.0081 38.556 20.3058 38.0349 20.829C37.5139 21.3523 37.2192 22.0592 37.2142 22.7976C37.2053 23.1879 37.2861 23.5751 37.4509 23.929L23.9172 37.439C23.56 37.287 23.1764 37.2066 22.7882 37.2024C22.0509 37.2043 21.3442 37.4973 20.822 38.0177C20.2998 38.5381 20.0044 39.2439 20 39.981C20.0074 40.7184 20.3034 41.4236 20.8247 41.9453C21.3459 42.467 22.0508 42.7636 22.7882 42.7716C23.1778 42.782 23.5645 42.7009 23.9172 42.5349L37.4509 56.0804C37.2988 56.4377 37.2185 56.8213 37.2142 57.2094C37.2155 57.9484 37.5092 58.6567 38.0313 59.1796C38.5533 59.7026 39.2611 59.9974 40.0001 60C40.7374 59.992 41.4423 59.6953 41.9636 59.1737C42.4847 58.652 42.7808 57.9469 42.7882 57.2094C42.7949 56.8189 42.7097 56.4321 42.5396 56.0804L56.0853 42.5231C56.4422 42.6763 56.8259 42.7567 57.2143 42.7597C57.9533 42.7579 58.6615 42.4631 59.1837 41.9401C59.7059 41.417 59.9994 40.7083 60 39.9693C59.9926 39.2374 59.695 38.5386 59.1727 38.026C58.6504 37.5136 57.946 37.2291 57.2143 37.2356ZM54.6107 39.0367L49.3491 40.3124C49.121 40.0007 48.824 39.7461 48.4811 39.5683C48.1383 39.3906 47.7589 39.2944 47.3729 39.2876C46.8046 39.2861 46.2543 39.4867 45.8201 39.8533L42.4 38.2627V38.1823C42.404 37.7183 42.2715 37.2634 42.0189 36.8741C41.7665 36.485 41.4051 36.1784 40.9799 35.9929V25.4012C41.0154 25.4012 41.0486 25.3657 41.0841 25.3657L54.6296 38.9231C54.6156 38.957 54.6068 38.993 54.6036 39.0296L54.6107 39.0367ZM40.0072 54.4639H39.7965L34.5065 43.2734C34.8729 42.8383 35.0725 42.2871 35.0698 41.7183L38.5255 40.0947C38.9507 40.424 39.4696 40.6096 40.0072 40.6249C40.5568 40.6161 41.0889 40.4303 41.5243 40.0947L44.9823 41.7183V41.7539C44.9794 42.3219 45.1791 42.8724 45.5456 43.3066L40.1847 54.4639H40.0072ZM38.9775 25.4012V35.9929C38.5601 36.189 38.2058 36.4979 37.9548 36.8849C37.704 37.2717 37.5662 37.7211 37.5574 38.1823V38.2509L34.1373 39.839C33.7042 39.4723 33.1546 39.2717 32.587 39.2734C32.1993 39.2751 31.8179 39.3706 31.475 39.5516C31.1322 39.7324 30.8381 39.9934 30.6178 40.3124L25.4107 39.0414C25.4107 39.0059 25.3752 38.9704 25.3752 38.8994L38.9184 25.342C38.9066 25.3657 38.9421 25.3657 38.9775 25.4012ZM25.3633 41.1124L30.2651 42.3124C30.3975 42.8389 30.7027 43.3057 31.1318 43.6383C31.5609 43.9709 32.0891 44.1499 32.632 44.1467H32.6675L36.5468 52.3384L25.3633 41.1124ZM47.3372 44.1467H47.3729C47.9143 44.1441 48.4397 43.963 48.8676 43.6314C49.2955 43.2997 49.6021 42.8361 49.7397 42.3124L54.6415 41.1124V41.148L43.4604 52.3384L47.3372 44.1467Z'} fill={'url(#paint0_linear_1767_792)'}/>
			<defs>
				<linearGradient
					id={'paint0_linear_1767_792'}
					x1={'20'}
					y1={'40'}
					x2={'60'}
					y2={'40'}
					gradientUnits={'userSpaceOnUse'}>
					<stop stopColor={'#0BADF4'}/>
					<stop offset={'0.93'} stopColor={'#30EFE4'}/>
				</linearGradient>
			</defs>
		</svg>
	):(
		<svg
			viewBox={'0 0 29 28'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}>
			<path d={'M26.2289 12.0649C25.9543 12.0583 25.682 12.115 25.4332 12.2305L15.8861 2.74367C15.9968 2.49382 16.0563 2.22462 16.0613 1.95172C16.06 1.43449 15.8525 0.93883 15.4843 0.573096C15.116 0.207363 14.6169 0.0013122 14.0962 0C13.5757 0.00563536 13.0784 0.214032 12.7111 0.580311C12.3439 0.94659 12.1362 1.44145 12.1327 1.95834C12.1264 2.23155 12.1834 2.50254 12.2995 2.7503L2.76085 12.2073C2.50909 12.1009 2.23873 12.0446 1.96512 12.0417C1.4455 12.043 0.94743 12.2481 0.579374 12.6124C0.211317 12.9767 0.00307827 13.4707 0 13.9867C0.0052061 14.5029 0.213865 14.9965 0.581227 15.3617C0.94859 15.7269 1.4454 15.9345 1.96512 15.9401C2.23975 15.9474 2.51228 15.8906 2.76085 15.7744L12.2995 25.2563C12.1923 25.5064 12.1357 25.7749 12.1327 26.0466C12.1336 26.5639 12.3406 27.0597 12.7086 27.4257C13.0765 27.7918 13.5754 27.9982 14.0962 28C14.6159 27.9944 15.1127 27.7867 15.4801 27.4216C15.8474 27.0564 16.0561 26.5628 16.0613 26.0466C16.066 25.7732 16.006 25.5025 15.8861 25.2563L25.4332 15.7662C25.6847 15.8734 25.9552 15.9297 26.2289 15.9318C26.7498 15.9305 27.2489 15.7242 27.617 15.3581C27.985 14.9919 28.1919 14.4958 28.1923 13.9785C28.1871 13.4662 27.9773 12.977 27.6092 12.6182C27.2411 12.2595 26.7446 12.0604 26.2289 12.0649ZM24.3939 13.3257L20.6855 14.2187C20.5247 14.0005 20.3154 13.8223 20.0737 13.6978C19.8321 13.5734 19.5647 13.5061 19.2926 13.5013C18.8921 13.5003 18.5042 13.6407 18.1982 13.8973L15.7877 12.7839V12.7276C15.7905 12.4028 15.6971 12.0844 15.5191 11.8119C15.3412 11.5395 15.0865 11.3249 14.7868 11.195V3.78083C14.8118 3.78083 14.8352 3.75598 14.8602 3.75598L24.4072 13.2462C24.3973 13.2699 24.3911 13.2951 24.3889 13.3207L24.3939 13.3257ZM14.1012 24.1247H13.9527L10.2243 16.2914C10.4825 15.9868 10.6232 15.601 10.6213 15.2028L13.0569 14.0663C13.3566 14.2968 13.7223 14.4267 14.1012 14.4374C14.4886 14.4313 14.8636 14.3012 15.1705 14.0663L17.6077 15.2028V15.2277C17.6057 15.6253 17.7464 16.0107 18.0047 16.3146L14.2263 24.1247H14.1012ZM13.3755 3.78083V11.195C13.0813 11.3323 12.8316 11.5485 12.6547 11.8194C12.4779 12.0902 12.3808 12.4048 12.3746 12.7276V12.7756L9.96407 13.8873C9.6588 13.6306 9.27144 13.4902 8.87141 13.4914C8.59819 13.4926 8.32933 13.5594 8.08768 13.6861C7.84604 13.8127 7.63876 13.9954 7.48348 14.2187L3.81347 13.329C3.81347 13.3041 3.78845 13.2793 3.78845 13.2296L13.3338 3.73941C13.3255 3.75598 13.3505 3.75598 13.3755 3.78083ZM3.78011 14.7787L7.23492 15.6187C7.32824 15.9872 7.54332 16.314 7.84575 16.5468C8.14818 16.7796 8.52049 16.9049 8.90311 16.9027H8.92813L11.6623 22.6369L3.78011 14.7787ZM19.2675 16.9027H19.2926C19.6742 16.9009 20.0445 16.7741 20.3461 16.542C20.6477 16.3098 20.8638 15.9853 20.9608 15.6187L24.4156 14.7787V14.8036L16.5351 22.6369L19.2675 16.9027Z'} fill={'black'}/>
		</svg>
	);
}

export default LogoDeus;