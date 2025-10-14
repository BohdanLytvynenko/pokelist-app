import { Link } from 'react-router';
import './ErrorNotification.css';

const ErrorNotification = () => {
    return (
        <div className='error-notification'>
            Error happened while fetching the data. Sorry for the inconvenience. Please refresh the page to try again or go to the
            <Link to='/'> homepage</Link>.
        </div>
    );
};

export default ErrorNotification;