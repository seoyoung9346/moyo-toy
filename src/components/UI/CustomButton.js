
const CustomButton = (props) => {
    const { onClick, children} = props
    return (
        <div className="button" onClick={onClick}>
            {children}
        </div>
    )
}

export default CustomButton