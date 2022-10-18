import { post } from './HttpClient'

export const registerUserInfo = async (companyID, isContractFinished) => {
    const data = {
        companyID,
        isContractFinished
    }
    await post('/register-user-info')
    return data
}