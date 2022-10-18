
import { useLocation} from "react-router-dom"
import CustomButton from "../components/UI/CustomButton"

const SecondPage = () => {
    
    const data = useLocation().state
    console.log(data)

    const clickHandler = (choice) => {
        data.isContractFinished = choice
        console.log(data)
    }



    return(
        <div> 
            <div> 약정이 남아있나요 </div>
            <CustomButton onClick={() => clickHandler(true)}>네</CustomButton>
            <CustomButton onClick={() => clickHandler(false)}>아니오</CustomButton>

        </div>
    )
}
export default SecondPage