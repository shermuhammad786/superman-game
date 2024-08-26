import { useState } from 'react';
import "./progressBar.css";
import profile from "../../assets/superman/profile.png"
import Fighting from '../fighting/fighting';

export default function Home() {
    const [superProgressValue, setSuperProgressValue] = useState(100);
    const [enmyProgressValue, setEnmyProgressValue] = useState(100);

    const supermanHanlder = () => {
        const value = 10;
        setSuperProgressValue(prev => prev === 0 ? 10 : prev - value);
    };
    const enmyhandler = () => {
        const value = 10;
        setEnmyProgressValue(prev => prev === 0 ? 10 : prev - value);
    };


    return (
        <div className='battle'>
            <div className="flex flex-wrap justify-around items-center">
                <div className='flex flex-wrap flex-col justify-between items-center'>
                    <h1>SUPER MAN</h1>
                    <div className='flex'>
                        <img src={profile} className='profile' alt="" />
                        <div className="progress" onClick={supermanHanlder} style={{ "--progress": `${superProgressValue}%` }}>
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
                        <div className="progress" onClick={enmyhandler} style={{ "--progress": `${enmyProgressValue}%` }}>
                            <div className="bar">
                                <div className="progress-value"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Fighting setSuperProgressValue={supermanHanlder} setEnmyProgressValue={enmyhandler} />
        </div>
    );
}
