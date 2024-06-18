import { useMemo } from 'react';
import useIsCorrectAnswer from '../hooks/useIsCorrectAnswer';

export default function AnswerView({
	answer,
	index,
	onSelectAnswer,
	selectedAnswer,
}: {
	answer: string;
	index: number;
	onSelectAnswer: (index: number, isCorrect: boolean) => void;
	selectedAnswer: number | undefined;
}) {
	const isCorrect = useIsCorrectAnswer(index);
	const shouldBeHighlighted = useMemo<boolean>(
		() =>
			selectedAnswer != undefined && (selectedAnswer === index || isCorrect),
		[selectedAnswer, index, isCorrect]
	);

	const highlightClass = useMemo<string>(() => {
		if (shouldBeHighlighted) {
			return isCorrect ? 'answer--is-correct' : 'answer--is-incorrect';
		} else {
			return '';
		}
	}, [shouldBeHighlighted, isCorrect]);

	return (
		<button
			className={`answer ${highlightClass}`}
			onClick={() => onSelectAnswer(index, isCorrect)}
			title={answer}
			disabled={Boolean(selectedAnswer)}
		>
			<h1>{answer}</h1>
		</button>
	);
}
