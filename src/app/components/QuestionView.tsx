export default function QuestionView({ question }: { question: string }) {
	return (
		<div className="question">
			<h1>{question}</h1>
		</div>
	);
}
