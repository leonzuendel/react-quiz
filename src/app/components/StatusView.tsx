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
		<div className="status">
			<div>
				<strong>Frage</strong>: {currentQuestion + 1} / {totalQuestions}
			</div>
			<div>
				<strong>Punkte</strong>: {points}
			</div>
		</div>
	);
}
