export default function StatusView({
	points,
	currentQuestion,
	totalQuestions,
}: {
	points: number;
	currentQuestion: number;
	totalQuestions: number;
}) {
	return (
		<div>
			Punkte: {points} | Frage {currentQuestion + 1} / {totalQuestions}
		</div>
	);
}
