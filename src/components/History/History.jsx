import { Link } from 'react-router-dom';
import './History.css';

const History = () => {
    return (
        <div>
            <div className="wrapper-top">
            <div className="nselect">
                <ul>
                    <li><Link to="/history">History</Link></li>
                    <li><Link to="/dashboard">Working</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
        <div className='wrapperh'>
            <div classname='table'>
                <tr>
                    <th>Filename</th>
                    <th>Result</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
                <tr>
                    <td>eeg0.set</td>
                    <td>CN</td>
                    <td>12-03-2023</td>
                    <td>15:03 IST</td>
                </tr>
                <tr>
                    <td>eeg0.set</td>
                    <td>AD</td>
                    <td>12-03-2023</td>
                    <td>15:03 IST</td>
                </tr>
                <tr>
                    <td>eeg99000008888888888888888888888999999999999990.set</td>
                    <td>AD</td>
                    <td>12-03-2023</td>
                    <td>15:03 IST</td>
                </tr>
                <tr>
                    <td>eeg498p.set</td>
                    <td>AD</td>
                    <td>11-07-2024</td>
                    <td>15:03 IST</td>
                </tr>
            </div>
        </div>
        </div>
    )
}

export default History;