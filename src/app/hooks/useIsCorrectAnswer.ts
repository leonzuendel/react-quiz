import { useQuizContext } from '../context/QuizContext';

const useIsCorrectAnswer = (index: number): boolean => {
	const quizContext = useQuizContext();
	if (!quizContext) return false;
	const { currentQuestion, questions } = quizContext;

	return questions[currentQuestion].correctAnswer === index;
};

export default useIsCorrectAnswer;
