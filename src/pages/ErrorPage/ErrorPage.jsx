import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-10'>
            <h1 className='text-4xl'>Not found</h1>
            <h1 className='text-5xl'>404</h1>
            <button className='btn btn-success'><Link to='/'>Home</Link></button>
        </div>
    );
};

export default ErrorPage;