import MainButton from '../../components/global/Button/MainButton';
import styles from './Registration.module.scss'
import { Route , Link, Outlet} from 'react-router-dom';

export default function Registration(){

    return (
        <>
            <div>
                <Link to='/btn'>button</Link>
                <p> and </p>
                <Link to='/btm'>bottom</Link>
            </div>
            <Outlet/>
        </>
    )
}