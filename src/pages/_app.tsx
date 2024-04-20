import {SessionProvider} from 'next-auth/react';
import {Inter} from 'next/font/google';
import {type Session} from 'next-auth';
import {type AppType} from 'next/app';

import {api} from '~/utils/api';
import '~/styles/globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: {session, ...pageProps},
}) => {
	return (
		<SessionProvider session={session}>
			<div className={`font-sans ${inter.variable}`}>
				<Component {...pageProps} />
			</div>
		</SessionProvider>
	);
};

export default api.withTRPC(MyApp);
