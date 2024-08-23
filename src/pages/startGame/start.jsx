
import './start.css'
import flying_left_to_right from "../../assets/superman/flying-left-to-right.webp"
function StartGame() {

    return (
        <>
            <div className='startGame'>
                <div className='flex justify-end flex-col items-center w-full h-screen p-16'>
                    <img src={flying_left_to_right} width={500} height={500} alt="" />

                    <div className="range">
                        <div className="range__label">Progress</div>
                    </div>
                    <div className='startGameBtnDiv flex justify-center items-center'>
                        <button className='glowing-btn'><span className='glowing-txt'>S<span className='faulty-letter'>TA</span>RT</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartGame