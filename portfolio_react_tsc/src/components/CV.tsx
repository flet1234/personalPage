import cv from '../assets/Maksim Gold CV FULL-STACK.pdf'

const CV = () => {
    return (
        <div>
            <iframe style={{width:'100vw', height:'100vh'}} src={cv}/>
        </div>
    )
}
export default CV