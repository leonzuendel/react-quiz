'use client';

import '@/scss/main.scss';
import QuizView from './components/QuizView';
import { QuizContext, QuizContextValueType } from './context/QuizContext';
import { useState } from 'react';

import quizData from '@/data/quiz.json';

export default function Home() {
	const [quizContext, setQuizContext] = useState<QuizContextValueType>({
		...quizData,
		currentQuestion: 0,
	} as unknown as QuizContextValueType);

	return (
		<main>
			<QuizContext.Provider value={[quizContext, setQuizContext]}>
				<QuizView />
			</QuizContext.Provider>
		</main>
	);
}
