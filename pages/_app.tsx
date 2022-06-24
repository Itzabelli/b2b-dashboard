import	React, {ReactElement}		from	'react';
import	Head						from	'next/head';
import	Link						from	'next/link';
import	{useRouter}					from	'next/router';
import	{AppProps}					from	'next/app';
import	{DefaultSeo}				from	'next-seo';
import	{WithYearn}					from	'@yearn-finance/web-lib/contexts';
import	{Button}					from	'@yearn-finance/web-lib';
import	Footer						from	'components/StandardFooter';

import	'../style.css';

function	AppHead(): ReactElement {
	return (
		<>
			<Head>
				<title>{process.env.WEBSITE_NAME}</title>
				<meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
				<meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
				<meta name={'description'} content={process.env.WEBSITE_NAME} />
				<meta name={'msapplication-TileColor'} content={'#000000'} />
				<meta name={'theme-color'} content={'#FF90A1'} />

				<link rel={'shortcut icon'} type={'image/x-icon'} href={'/favicons/favicon.ico'} />
				<link rel={'apple-touch-icon'} sizes={'180x180'} href={'/favicons/apple-touch-icon.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'32x32'} href={'/favicons/favicon-32x32.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'16x16'} href={'/favicons/favicon-16x16.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'192x192'} href={'/favicons/android-chrome-192x192.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'512x512'} href={'/favicons/android-chrome-512x512.png'} />

				<meta name={'robots'} content={'index,nofollow'} />
				<meta name={'googlebot'} content={'index,nofollow'} />
				<meta charSet={'utf-8'} />
			</Head>
			<DefaultSeo
				title={process.env.WEBSITE_NAME}
				defaultTitle={process.env.WEBSITE_NAME}
				description={process.env.WEBSITE_DESCRIPTION}
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: process.env.WEBSITE_URI,
					site_name: process.env.WEBSITE_NAME,
					title: process.env.WEBSITE_NAME,
					description: process.env.WEBSITE_DESCRIPTION,
					images: [
						{
							url: `${process.env.WEBSITE_URI}og.jpeg`,
							width: 1200,
							height: 675,
							alt: 'Yearn'
						}
					]
				}}
				twitter={{
					handle: '@iearnfinance',
					site: '@iearnfinance',
					cardType: 'summary_large_image'
				}} />
		</>
	);
}

function	AppHeader(): ReactElement {
	const	router = useRouter();

	return (
		<header>
			<div className={'flex flex-row justify-between items-center py-6 w-full'}>
				<div className={'flex flex-row items-center space-x-6 md:space-x-10'}>
					<div>
						<Link href={'/'}>
							<nav
								aria-selected={router.pathname === '/'}
								className={'project--nav'}>
								{'Main'}
							</nav>
						</Link>
					</div>
					<div>
						<Link href={'/'}>
							<nav
								aria-selected={router.pathname === '/team-up'}
								className={'project--nav'}>
								{'Team up'}
							</nav>
						</Link>
					</div>
					<div>
						<Link href={'/'}>
							<nav
								aria-selected={router.pathname === '/learn-more'}
								className={'project--nav'}>
								{'Learn more'}
							</nav>
						</Link>
					</div>
				</div>
				<div>
					<Button variant={'filled'} className={'!h-[30px]'}>
						{'Log in'}
					</Button>
				</div>

			</div>
		</header>
	);
}

function	AppWrapper(props: AppProps): ReactElement {
	const	{Component, pageProps, router} = props;

	return (
		<>
			<AppHead />
			<div id={'app'} className={'grid flex-col grid-cols-12 gap-x-4 mx-auto mb-0 max-w-6xl md:flex-row'}>
				<div className={'flex flex-col col-span-12 w-full min-h-[100vh]'}>
					<AppHeader />
					<Component
						key={router.route}
						router={props.router}
						{...pageProps} />
					<Footer />
				</div>
			</div>
		</>
	);
}

function	MyApp(props: AppProps): ReactElement {
	const	{Component, pageProps} = props;
	
	return (
		<WithYearn
			options={{
				ui: {
					shouldUseThemes: false
				},
				web3: {
					shouldUseStrictChainMode: false,
					defaultChainID: 1,
					supportedChainID: [1, 250, 42161, 1337, 31337]
				}
			}}>
			<AppWrapper
				Component={Component}
				pageProps={pageProps}
				router={props.router} />
		</WithYearn>
	);
}

export default MyApp;
