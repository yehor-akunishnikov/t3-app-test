import {signIn, signOut, useSession} from 'next-auth/react';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Spark RPG</title>
				<meta name="description" content="Util app for the Spark RPG system"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<header>Header</header>
			<main>
				<AuthShowcase/>
			</main>
			<footer>Footer</footer>
		</>
	);
}

function AuthShowcase() {
	const {data: sessionData} = useSession();

	return (
		<div>
			<p>
				{sessionData && <span>Logged in as {sessionData.user?.name}</span>}
			</p>

			<button
				onClick={sessionData ? () => void signOut() : () => void signIn()}
			>
				{sessionData ? 'Sign out' : 'Sign in'}
			</button>
		</div>
	);
}
