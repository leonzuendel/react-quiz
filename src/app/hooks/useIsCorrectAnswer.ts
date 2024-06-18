import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const useIsCorrectAnswer = (index: number): boolean => {
	const [quizContext] = useContext(QuizContext);
	if (!quizContext) return false;
	const { currentQuestion, questions } = quizContext;

	return questions[currentQuestion].correctAnswer === index;
};

export default useIsCorrectAnswer;
