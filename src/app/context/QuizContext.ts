'use client';

import { Question } from '@/types/question.dt';
import { Dispatch, SetStateAction, createContext } from 'react';

export interface QuizContextValueInterface {
	currentQuestion: number;
	questions: Question[];
}

export type QuizContextValueType = QuizContextValueInterface | null;

export const QuizContext = createContext<
	[QuizContextValueType, Dispatch<SetStateAction<QuizContextValueType>> | null]
>([null, null]);
