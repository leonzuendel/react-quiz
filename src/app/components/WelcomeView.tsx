import {
	QuizContextDispatchType,
	useQuizContextDispatch,
} from '../context/QuizContext';

export default function WelcomeView() {
	const dispatch = useQuizContextDispatch();

	return (
		<div className="welcome">
			<h1 className="headline headline--h1">Willkommen!</h1>
			<button
				className="button"
				onClick={() => dispatch(QuizContextDispatchType.START_QUIZ)}
				title="Quiz starten"
			>
				Quiz starten
			</button>
		</div>
	);
}
