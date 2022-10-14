import CustomButton from "../components/UI/CustomButton"


const clickHandler = () => {
    console.log("클릭")
}

const LandingPage = () => {
    return(
    <div className="Landing">
        <div className="title">현재 사용 중인 통신사를 선택해주세요</div>

        
        <CustomButton onClick={clickHandler}>LGU</CustomButton>
        <CustomButton onClick={clickHandler}>SKT</CustomButton>
        <CustomButton onClick={clickHandler}>KT</CustomButton>
    </div>
    )
}

export default LandingPage