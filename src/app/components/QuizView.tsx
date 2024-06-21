import { useQuizContext } from '../context/QuizContext';
import QuestionView from './QuestionView';
import AnswerListView from './AnswerListView';
import StatusView from './StatusView';
import ResultsView from './ResultsView';
import { useMemo } from 'react';
import { Question } from '@/types/question.dt';
import WelcomeView from './WelcomeView';
import NavigationView from './NavigationView';

export default function QuizView() {
	const {
		points,
		currentQuestion,
		questions,
		hasStarted,
		hasSkippedToResults,
	} = useQuizContext();

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
				<div className="container">
					<WelcomeView />
				</div>
			) : (
				<>
					{hasEnded || !question || hasSkippedToResults ? (
						<div className="container">
							<ResultsView points={points} totalQuestions={questions.length} />
						</div>
					) : (
						<div className="container container--view-height">
							{currentQuestion > 0 && <NavigationView />}
							<StatusView
								points={points}
								currentQuestion={currentQuestion}
								totalQuestions={questions.length}
							/>
							<QuestionView question={question.question} />
							<AnswerListView answers={question.answers} />
						</div>
					)}
				</>
			)}
		</div>
	);
}
