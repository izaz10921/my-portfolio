import { Triangle } from 'react-loader-spinner';
import "./Loading.scss";

const Loading = () => {
    return (
        <div className='loader' >
            <p>zaz</p>
            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loading;