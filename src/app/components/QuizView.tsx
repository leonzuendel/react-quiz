import { useQuizContext } from '../context/QuizContext';
import QuestionView from './QuestionView';
import AnswerListView from './AnswerListView';
import StatusView from './StatusView';
import ResultsView from './ResultsView';
import { useMemo } from 'react';
import { Question } from '@/types/question.dt';
import WelcomeView from './WelcomeView';

export default function QuizView() {
	const { points, currentQuestion, questions, hasStarted } = useQuizContext();

	const question = useMemo<Question>(
		() => questions[currentQuestion],
		[questions, currentQuestion]
	);

	const hasEnded = useMemo<boolean>(
		() => currentQuestion === questions.length,
		[questions, currentQuestion]
	);

	return (
		<div className="quiz">
			{!hasStarted ? (
				<WelcomeView />
			) : (
				<>
					{hasEnded ? (
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
				</>
			)}
		</div>
	);
}
