import AnswerView from './AnswerView';

export default function AnswerListView({ answers }: { answers: string[] }) {
	return (
		<div>
			{answers.map((answer, index) => (
				<AnswerView key={index} answer={answer} index={index} />
			))}
		</div>
	);
}
