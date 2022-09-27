import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Image from '../Image'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://pp16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/298b96da46242c2481e34738e7998cc0~c5_100x100.jpeg?x-expires=1663117200&x-signature=E%2BOyeThzJEilFnr%2FJ62xCKv5CoQ%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <div className={cx('username')}>
                    <h4>trieuquanghiep</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <p className={cx('name')}>Trieu Quang Hiep</p>
            </div>
        </div>
    )
}

export default AccountItem
