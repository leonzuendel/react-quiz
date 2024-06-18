import { useQuizContext } from '../context/QuizContext';
import QuestionView from './QuestionView';
import AnswerListView from './AnswerListView';
import StatusView from './StatusView';

export default function QuizView() {
	const quizContex = useQuizContext();
	if (quizContex) {
		const { points, currentQuestion, questions } = quizContex;
		const question = questions[currentQuestion];

		return (
			<>
				<StatusView
					points={points}
					currentQuestion={currentQuestion}
					totalQuestions={questions.length}
				/>
				<QuestionView question={question.question} />
				<AnswerListView answers={question.answers} />
			</>
		);
	} else {
		return 'Error: Data is not loaded correctly.';
	}
}
