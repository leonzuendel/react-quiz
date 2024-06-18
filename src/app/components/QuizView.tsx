import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import QuestionView from './QuestionView';
import AnswerListView from './AnswerListView';

export default function QuizView() {
	const [quizContex] = useContext(QuizContext);
	if (quizContex) {
		const { currentQuestion, questions } = quizContex;
		const question = questions[currentQuestion];

		return (
			<>
				<QuestionView question={question.question} />
				<AnswerListView answers={question.answers} />
			</>
		);
	} else {
		return 'Error: Data is not loaded correctly.';
	}
}
