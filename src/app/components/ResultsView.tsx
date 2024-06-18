export default function ResultsView({
	points,
	totalQuestions,
}: {
	points: number;
	totalQuestions: number;
}) {
	return (
		<div className="results">
			<h1 className="results__headline">Das Quiz ist vorbei!</h1>
			<h2>
				Ihr habt {points} von {totalQuestions} möglichen Punkten erzielt.
			</h2>
		</div>
	);
}
