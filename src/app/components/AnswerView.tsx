import { useMemo, useState } from 'react';
import useIsCorrectAnswer from '../hooks/useIsCorrectAnswer';

export default function AnswerView({
	answer,
	index,
}: {
	answer: string;
	index: number;
}) {
	const isCorrect = useIsCorrectAnswer(index);
	const [hasClicked, setHasClicked] = useState<boolean>(false);

	const highlightClass = useMemo(() => {
		if (hasClicked) {
			return isCorrect ? 'answer--is-correct' : 'answer--is-incorrect';
		} else {
			return '';
		}
	}, [hasClicked, isCorrect]);

	return (
		<button
			className={`answer ${highlightClass}`}
			onClick={() => setHasClicked(true)}
		>
			<h1>{answer}</h1>
		</button>
	);
}
