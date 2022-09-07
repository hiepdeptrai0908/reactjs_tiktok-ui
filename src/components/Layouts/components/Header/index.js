import classNames from 'classnames/bind';
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header(styles) {

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}></div>
    </header>
}
export default Header;