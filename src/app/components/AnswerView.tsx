import { useCallback, useMemo, useState } from 'react';
import useIsCorrectAnswer from '../hooks/useIsCorrectAnswer';
import {
	QuizContextDispatchType,
	useQuizContextDispatch,
} from '../context/QuizContext';

export default function AnswerView({
	answer,
	index,
}: {
	answer: string;
	index: number;
}) {
	const isCorrect = useIsCorrectAnswer(index);
	const [hasClicked, setHasClicked] = useState<boolean>(false);
	const dispatch = useQuizContextDispatch();

	const highlightClass = useMemo(() => {
		if (hasClicked) {
			return isCorrect ? 'answer--is-correct' : 'answer--is-incorrect';
		} else {
			return '';
		}
	}, [hasClicked, isCorrect]);

	const onSelectAnswer = useCallback(() => {
		setHasClicked(true);
		if (isCorrect) {
			dispatch(QuizContextDispatchType.ADD_POINT);
		}

		setTimeout(() => {
			setHasClicked(false);
			dispatch(QuizContextDispatchType.GO_TO_NEXT_QUESTION);
		}, 1000);
	}, [isCorrect]);

	return (
		<button className={`answer ${highlightClass}`} onClick={onSelectAnswer}>
			<h1>{answer}</h1>
		</button>
	);
}
