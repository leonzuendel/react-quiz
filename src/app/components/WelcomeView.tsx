import Markdown from 'react-markdown';
import {
	QuizContextDispatchType,
	useQuizContextDispatch,
} from '../context/QuizContext';

import { useEffect, useState } from 'react';

export default function WelcomeView() {
	const dispatch = useQuizContextDispatch();
	const [markdown, setMarkdown] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		async function fetchMarkdown() {
			setIsLoading(true);
			const markdown = await require('@/content/welcome.md').default;
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
				<div className="welcome">
					<div className="markdown">
						<Markdown
							components={{
								h1(props) {
									const { node, ...rest } = props;
									return <h1 className="headline headline--h1" {...rest} />;
								},
							}}
						>
							{markdown}
						</Markdown>
					</div>

					<button
						className="button"
						onClick={() => dispatch(QuizContextDispatchType.START_QUIZ)}
						title="Quiz starten"
					>
						Quiz starten
					</button>
				</div>
			)}
		</>
	);
}
