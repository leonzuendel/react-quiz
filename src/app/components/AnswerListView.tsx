import { useCallback, useState } from 'react';
import AnswerView from './AnswerView';
import {
	QuizContextDispatchType,
	useQuizContextDispatch,
} from '../context/QuizContext';

export default function AnswerListView({ answers }: { answers: string[] }) {
	const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>(
		undefined
	);
	const dispatch = useQuizContextDispatch();

	const onSelectAnswer = useCallback((index: number, isCorrect: boolean) => {
		setSelectedAnswer(index);

		dispatch({ type: QuizContextDispatchType.SAVE_RESULT, payload: index });

		if (isCorrect) {
			dispatch(QuizContextDispatchType.ADD_POINT);
		}

		setTimeout(() => {
			setSelectedAnswer(undefined);
			dispatch(QuizContextDispatchType.GO_TO_NEXT_QUESTION);
		}, 1000);
	}, []);

	return (
		<div className="answer-list">
			{answers.map((answer, index) => (
				<AnswerView
					key={index}
					answer={answer}
					index={index}
					onSelectAnswer={onSelectAnswer}
					selectedAnswer={selectedAnswer}
				/>
			))}
		</div>
	);
}
