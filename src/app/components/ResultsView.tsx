import {
	QuizContextDispatchType,
	useQuizContextDispatch,
} from '../context/QuizContext';

export default function ResultsView({
	points,
	totalQuestions,
}: {
	points: number;
	totalQuestions: number;
}) {
	const dispatch = useQuizContextDispatch();

	return (
		<div className="results">
			<h1 className="headline headline--h1">Das Quiz ist vorbei!</h1>
			<h2 className="headline headline--h2">
				Ihr habt {points} von {totalQuestions} möglichen Punkten erzielt.
			</h2>
			<button
				className="button"
				onClick={() => dispatch(QuizContextDispatchType.RESET_QUIZ)}
				title="Quiz neustarten"
			>
				Quiz neustarten
			</button>
		</div>
	);
}
