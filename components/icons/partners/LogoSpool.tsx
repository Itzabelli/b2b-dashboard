import	React		from	'react';

import type {ReactElement, SVGProps} from 'react';

type TLogo = SVGProps<SVGSVGElement> & {isColored?: boolean};

function	LogoSpool(props: TLogo): ReactElement {
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
			<circle
				cx={'40'}
				cy={'40'}
				r={'40'}
				fill={'#090C0F'}/>
			<path d={'M51.1244 15.3723C51.3523 14.8932 51.4424 14.3534 51.3838 13.8202L51.9029 13.5293L56.0811 21.3776C56.4039 21.9824 56.6114 22.6489 56.6918 23.339C56.7722 24.0291 56.7241 24.7293 56.5501 25.3996C56.3759 26.0699 56.0795 26.6972 55.6774 27.2454C55.2755 27.7937 54.7759 28.2523 54.2072 28.5951L30.1422 43.1019C29.7039 43.3661 29.3482 43.7618 29.1198 44.2397C28.8915 44.7175 28.8004 45.2564 28.858 45.7889L28.351 46.0928L24.1759 38.2511C23.5253 37.0291 23.3575 35.5823 23.7096 34.2287C24.0616 32.8751 24.9045 31.7259 26.0531 31.0336L50.1026 16.5137C50.5412 16.2483 50.8966 15.8513 51.1244 15.3723Z'} fill={'#23B3E5'}/>
			<path d={'M51.1741 35.76C51.4024 35.2821 51.4935 34.7434 51.436 34.2109L51.9428 33.9068L56.1179 41.7487C56.7686 42.9706 56.9363 44.4175 56.5844 45.771C56.2322 47.1245 55.3893 48.2738 54.2409 48.966L30.1759 63.473C29.7373 63.7384 29.382 64.1354 29.1541 64.6144C28.9263 65.0934 28.8361 65.6332 28.8948 66.1664L28.3909 66.4705L24.2096 58.6221C23.5609 57.4007 23.3943 55.9554 23.7463 54.6035C24.0983 53.2515 24.9399 52.1034 26.0868 51.4111L50.1517 36.8978C50.5901 36.6335 50.9456 36.2378 51.1741 35.76Z'} fill={'#23B3E5'}/>
		</svg>
	) : (
		<svg
			width={'40'}
			height={'40'}
			viewBox={'0 0 40 40'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}>
			<circle
				cx={'20'}
				cy={'20'}
				r={'20'}
				fill={'#0c0c0c'}/>
			<path d={'M25.5623 7.68613C25.6762 7.44661 25.7213 7.17671 25.6919 6.91011L25.9515 6.76465L28.0406 10.6888C28.202 10.9912 28.3057 11.3244 28.346 11.6695C28.3862 12.0146 28.3621 12.3647 28.2751 12.6998C28.188 13.035 28.0398 13.3486 27.8388 13.6227C27.6378 13.8969 27.388 14.1262 27.1037 14.2976L15.0711 21.551C14.852 21.6831 14.6742 21.8809 14.56 22.1198C14.4458 22.3588 14.4003 22.6282 14.4291 22.8944L14.1756 23.0464L12.088 19.1255C11.7627 18.5145 11.6788 17.7911 11.8549 17.1144C12.0309 16.4376 12.4523 15.8629 13.0266 15.5168L25.0513 8.25685C25.2706 8.12414 25.4484 7.92564 25.5623 7.68613Z'} fill={'white'}/>
			<path d={'M25.5871 17.88C25.7012 17.6411 25.7468 17.3717 25.718 17.1054L25.9715 16.9534L28.059 20.8743C28.3844 21.4853 28.4682 22.2087 28.2922 22.8855C28.1162 23.5622 27.6947 24.1369 27.1205 24.483L15.088 31.7365C14.8687 31.8692 14.691 32.0677 14.5771 32.3072C14.4632 32.5467 14.4181 32.8166 14.4475 33.0832L14.1955 33.2352L12.1049 29.311C11.7805 28.7004 11.6972 27.9777 11.8732 27.3017C12.0492 26.6258 12.47 26.0517 13.0435 25.7056L25.0759 18.4489C25.2951 18.3168 25.4729 18.1189 25.5871 17.88Z'} fill={'white'}/>
		</svg>
	);
}

export default LogoSpool;



