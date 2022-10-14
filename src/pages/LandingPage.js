import { useSearchParams } from "react-router-dom";

import CustomButton from "../components/UI/CustomButton"
import { questions } from "../constants/Questions";




const LandingPage = () => {


    let [searchParams, setSearchParams] = useSearchParams();

    const clickHandler = (choice) => {
        console.log("클릭")
        searchParams.set("company", questions[0].answers[choice].companyID)
        setSearchParams(searchParams)
    }

    return(
    <div className="Landing">
        <div className="title">현재 사용 중인 통신사를 선택해주세요</div>

        
        <CustomButton onClick={() => clickHandler(0)} >{questions[0].answers[0].content}</CustomButton>
        <CustomButton onClick={() => clickHandler(1)}>{questions[0].answers[1].content}</CustomButton>
        <CustomButton onClick={() => clickHandler(2)}>{questions[0].answers[2].content}</CustomButton>
    </div>
    )
}

export default LandingPage