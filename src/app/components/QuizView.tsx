import { useQuizContext } from '../context/QuizContext';
import QuestionView from './QuestionView';
import AnswerListView from './AnswerListView';
import StatusView from './StatusView';
import ResultsView from './ResultsView';
import { useMemo } from 'react';
import { Question } from '@/types/question.dt';

export default function QuizView() {
	const { points, currentQuestion, questions } = useQuizContext();

	const question = useMemo<Question>(
		() => questions[currentQuestion],
		[questions, currentQuestion]
	);

	return (
		<div className="quiz">
			{currentQuestion === questions.length ? (
				<ResultsView points={points} totalQuestions={questions.length} />
			) : (
				<>
					<StatusView
						points={points}
						currentQuestion={currentQuestion}
						totalQuestions={questions.length}
					/>
					<QuestionView question={question.question} />
					<AnswerListView answers={question.answers} />
				</>
			)}
		</div>
	);
}
