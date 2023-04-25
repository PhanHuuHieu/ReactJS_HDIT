import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getDataQuiz } from "../../services/apiServices";
import _ from "lodash";

const DetailQuiz = (props) => {
    const params = useParams();
    const quizID = params.id;

    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizID)
        if (res && res.EC === "0") {
            let raw = res.DT
            let data = _.chain(raw)

                .groupBy("id")

                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description
                            image = item.image
                        }
                        answers.push(item.answers)
                    })

                    // detail.questionId = key
                    // return { questionId: key, data: value }
                    return { questionId: key, answers, questionDescription, image }
                })
                .value()

            console.log(data)
        }
    }
    useEffect(() => {
        fetchQuestion();
    }, [quizID])
    return (
        <div className="detail-quiz-container">Detail</div>
    )
}
export default DetailQuiz