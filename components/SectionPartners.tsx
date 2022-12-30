import	React, {useEffect, useState}	from	'react';
import router from 'next/router';
import {usePartner} from 'contexts/usePartner';
import {PARTNERS} from 'utils/b2b/Partners';
import	{motion}				from	'framer-motion';

import type {ReactElement} from 'react';
import	type {TFramerTransition, TPartnerList}		from	'types/types';

const variants = {
	enter: (i: number): TFramerTransition => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
			ease: 'linear'
		}
	}),
	initial: {y: 60, opacity: 0}
};

function	Partners(): ReactElement {
	const	{set_partner} = usePartner();
	const	[partnerList, set_partnerList] = useState<TPartnerList[]>([]);

	useEffect((): void => {
		const	_partnerList: TPartnerList[] = [...PARTNERS];
		_partnerList.sort((): number => Math.random() - 0.5);
		set_partnerList(_partnerList);
	}, []);

	async function navToDashboard(partner: string): Promise<void> {
		if(set_partner){
			set_partner(partner);
			router.push('/dashboard');
		}
	}


	return (
		<section aria-label={'partners'} className={'mb-28 flex flex-row items-center space-x-8 md:mb-50'}>
			<div>
				<div>
					<h2 className={'text-3xl font-bold'}>{'Built on Yearn'}</h2>
				</div>
				<div className={'mt-8 grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3'}>
					{partnerList?.map((partner: TPartnerList, i: number): ReactElement => (
						<motion.div
							key={partner.name}
							custom={i % 3}
							initial={'initial'}
							whileInView={'enter'}
							className={'flex h-66 cursor-pointer flex-col justify-between border-2 border-neutral-200 bg-neutral-200 p-6'}
							variants={variants}
							onClick={async (): Promise<void> => navToDashboard(partner.name)}	
						>
							<div className={'h-14'}>
								{partner.logo}
							</div>
							<div className={'space-y-2'}>
								<b className={'text-lg'}>{partner.name}</b>
								<p>{partner.description}</p>
							</div>
						</motion.div>	
					))}
				</div>
			</div>
		</section>
	);
}

export default Partners;
