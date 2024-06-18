'use client';

import '@/scss/main.scss';
import QuizView from './components/QuizView';
import { QuizContextProvider } from './context/QuizContext';

export default function Home() {
	return (
		<main>
			<QuizContextProvider>
				<QuizView />
			</QuizContextProvider>
		</main>
	);
}
