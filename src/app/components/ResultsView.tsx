import { useEffect, useState } from 'react';
import {
	QuizContextDispatchType,
	useQuizContext,
	useQuizContextDispatch,
} from '../context/QuizContext';
import { Question } from '@/types/question.dt';
import useIsCorrectAnswer from '../hooks/useIsCorrectAnswer';
import Markdown from 'react-markdown';

export default function ResultsView({
	points,
	totalQuestions,
}: {
	points: number;
	totalQuestions: number;
}) {
	const dispatch = useQuizContextDispatch();
	const [showOverview, setShowOverview] = useState<boolean>(true);
	const [markdown, setMarkdown] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		async function fetchMarkdown() {
			setIsLoading(true);
			const markdown = await require('@/content/results.md').default;
			setMarkdown(markdown);
			setIsLoading(false);
		}

		fetchMarkdown().catch(console.error);
	}, []);

	return (
		<>
			{isLoading ? (
				<></>
			) : (
				<div className="results flow">
					<h1 className="headline headline--h1">Das Quiz ist vorbei</h1>
					<h2 className="headline headline--h2">
						Ihr habt {points} von {totalQuestions} möglichen Punkten erzielt
					</h2>

					<button
						className="button"
						onClick={() => setShowOverview(!showOverview)}
						title="Quiz neustarten"
					>
						{!showOverview ? 'Übersicht anzeigen' : 'Übersicht ausblenden'}
					</button>

					{showOverview && <Overview />}

					<div className="markdown">
						<Markdown
							components={{
								h1(props) {
									const { node, ...rest } = props;
									return <h2 className="headline headline--h2" {...rest} />;
								},
							}}
						>
							{markdown}
						</Markdown>
					</div>

					<button
						className="button"
						onClick={() => dispatch(QuizContextDispatchType.RESET_QUIZ)}
						title="Quiz neustarten"
					>
						Quiz neustarten
					</button>

					<a
						href="https://github.com/leonzuendel/react-quiz"
						target="_blank"
						title="Quellcode ansehen"
						className="results__link"
					>
						Quellcode ansehen
					</a>
				</div>
			)}
		</>
	);
}

const Overview = () => {
	const { questions } = useQuizContext();

	return (
		<div className="results-overview">
			<ul className="results-overview__list">
				{questions.map((question, index) => (
					<OverviewItem key={index} question={question} index={index} />
				))}
			</ul>
		</div>
	);
};

const OverviewItem = ({
	question,
	index,
}: {
	question: Question;
	index: number;
}) => {
	const { results } = useQuizContext();
	const isCorrect = useIsCorrectAnswer(results[index], index);

	return (
		<li className="results-overview__list-item">
			<span className="results-overview__list-icon">
				{isCorrect ? '👍' : '👎'}
			</span>

			<details open>
				<summary>
					<h2>{question.question}</h2>
					<span className="results-overview__list-marker">⬇️</span>
				</summary>

				<p>
					<strong>Ihr habt geantwortet</strong>:{' '}
					{question.answers[results[index]]}
				</p>

				{isCorrect ? (
					<p className="highlight highlight--success">Das war korrekt!</p>
				) : (
					<p className="highlight highlight--danger">
						<strong>Korrekt wäre</strong>:{' '}
						{question.answers[question.correctAnswer]}
					</p>
				)}
			</details>
		</li>
	);
};
