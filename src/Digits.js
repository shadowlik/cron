import { CronNumber } from "./CronNumber";

export function Digits({ time }) {

    return (
        <div className='digits'>
            <CronNumber 
                id="minutes"
                number={Math.floor((time / 60000) % 60)} />
            <CronNumber 
                id="seconds" 
                number={Math.floor((time / 1000) % 60)} />
            <CronNumber 
                id="ms" 
                number={(time / 10) % 100} />
        </div>
    );
};