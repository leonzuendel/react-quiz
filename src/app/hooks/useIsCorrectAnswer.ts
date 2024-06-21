import { useQuizContext } from '../context/QuizContext';

const useIsCorrectAnswer = (
	answerIndex: number,
	questionIndex?: number
): boolean => {
	const { currentQuestion, questions } = useQuizContext();
	const index = questionIndex != undefined ? questionIndex : currentQuestion;

	return questions[index].correctAnswer === answerIndex;
};

export default useIsCorrectAnswer;
