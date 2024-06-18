'use client';

import { Question } from '@/types/question.dt';

import {
	Dispatch,
	PropsWithChildren,
	createContext,
	useContext,
	useReducer,
} from 'react';

import quizData from '@/data/quiz.json';

export interface QuizContextValue {
	points: number;
	currentQuestion: number;
	questions: Question[];
	hasStarted: boolean;
}

const initialQuizContext = {
	...quizData,
	points: 0,
	currentQuestion: 0,
	hasStarted: false,
} as unknown as QuizContextValue;

const QuizContext = createContext<QuizContextValue>(initialQuizContext);

const QuizDispatchContext = createContext<Dispatch<any>>(() => {});

export function QuizContextProvider({ children }: PropsWithChildren) {
	const [quizContext, dispatch] = useReducer(
		quizContextReducer,
		initialQuizContext as never
	);

	return (
		<QuizContext.Provider value={quizContext}>
			<QuizDispatchContext.Provider value={dispatch}>
				{children}
			</QuizDispatchContext.Provider>
		</QuizContext.Provider>
	);
}

export function useQuizContext() {
	return useContext(QuizContext);
}

export function useQuizContextDispatch() {
	return useContext(QuizDispatchContext);
}

function quizContextReducer(quizContext: QuizContextValue, action: string) {
	if (quizContext)
		switch (action) {
			case 'ADD_POINT': {
				return {
					...quizContext,
					points: quizContext.points + 1,
				};
			}
			case 'GO_TO_NEXT_QUESTION': {
				return {
					...quizContext,
					currentQuestion: quizContext.currentQuestion + 1,
				};
			}
			case 'START_QUIZ': {
				return {
					...quizContext,
					hasStarted: true,
				};
			}
			case 'RESET_QUIZ': {
				return {
					...quizContext,
					hasStarted: false,
					currentQuestion: 0,
					points: 0,
				};
			}
			default: {
				throw Error('Unknown action: ' + action);
			}
		}
}

export enum QuizContextDispatchType {
	ADD_POINT = 'ADD_POINT',
	GO_TO_NEXT_QUESTION = 'GO_TO_NEXT_QUESTION',
	START_QUIZ = 'START_QUIZ',
	RESET_QUIZ = 'RESET_QUIZ',
}
