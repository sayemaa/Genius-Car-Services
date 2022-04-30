import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetails';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    /* const [service, setService] = useState({});
    
        useEffect(() => {
            const url = `https://pacific-falls-56378.herokuapp.com/service/${serviceId}`
            fetch(url)
                .then(res => res.json())
                .then(data => setService(data))
        }, []) 
    */
    return (
        <div>
            <h2>You are about to book: {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;