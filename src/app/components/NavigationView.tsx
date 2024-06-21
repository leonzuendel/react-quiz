import {
	QuizContextDispatchType,
	useQuizContextDispatch,
} from '../context/QuizContext';

export default function NavigationView() {
	const dispatch = useQuizContextDispatch();

	return (
		<div className="navigation">
			<button
				className="navigation__button"
				onClick={() => {
					dispatch({ type: QuizContextDispatchType.SAVE_RESULT, payload: -1 });
					dispatch(QuizContextDispatchType.GO_TO_NEXT_QUESTION);
				}}
			>
				Frage überspringen
			</button>

			<a
				className="navigation__button"
				href="https://github.com/leonzuendel/react-quiz"
				target="_blank"
				title="Quellcode anzeigen"
			>
				Quellcode anzeigen
			</a>

			<button
				className="navigation__button"
				onClick={() => dispatch(QuizContextDispatchType.SKIP_TO_RESULTS)}
			>
				Zu den Ergebnissen springen
			</button>
		</div>
	);
}
