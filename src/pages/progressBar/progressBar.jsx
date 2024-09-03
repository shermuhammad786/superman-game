import { useState } from 'react';
import "./progressBar.css";
import profile from "../../assets/superman/profile.png"
import Fighting from '../fighting/fighting';

export default function Home() {
    const [superProgressValue, setSuperProgressValue] = useState(100);
    const [enmyProgressValue, setEnmyProgressValue] = useState(100);

    return (
        <div className='battle'>
            <div className="flex flex-wrap justify-around items-center">
                <div className='flex flex-wrap flex-col justify-between items-center'>
                    <h1>SUPER MAN</h1>
                    <div className='flex'>
                        <img src={profile} className='profile' alt="" />
                        <div className="progress" style={{ "--progress": `${superProgressValue}%` }}>
                            <div className="bar">
                                <div className="progress-value"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>Score</div>
                <div className='flex flex-wrap flex-col justify-between items-center'>
                    <h1>SUPER STAR</h1>
                    <div className='flex'>
                        <img src={profile} className='profile' alt="" />
                        <div className="progress" style={{ "--progress": `${enmyProgressValue}%` }}>
                            <div className="bar">
                                <div className="progress-value"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Fighting setSuperProgressValue={setSuperProgressValue} setEnmyProgressValue={setEnmyProgressValue} />
        </div>
    );
}
