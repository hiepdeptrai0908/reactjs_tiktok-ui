import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TippyHeadless from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faPlus,
    faChartLine,
    faRightToBracket,
} from '@fortawesome/free-solid-svg-icons'

import 'tippy.js/dist/tippy.css'
import styles from './Header.module.scss'
import images from '~/assets/images'
import PopperWrapper from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import {
    CoinIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    MessageIcon,
    QuestionIcon,
    SettingIcon,
    UserIcon,
} from '~/components/Icons'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <LanguageIcon className={cx('custom-menu-icon')} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon className={cx('custom-menu-icon')} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon className={cx('custom-menu-icon')} />,
        title: 'Keyboard shortcuts',
    },
]

function Header(styles) {
    const userMenu = [
        {
            icon: <UserIcon className={cx('custom-menu-icon')} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <CoinIcon className={cx('custom-menu-icon')} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faChartLine} />,
            title: 'View Analytics',
            to: '/analytic',
        },
        {
            icon: <SettingIcon className={cx('custom-menu-icon')} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightToBracket} />,
            title: 'Log out',
            to: '/logout',
            borderTop: true,
        },
    ]

    const [searchResult, setSearchResult] = useState([])
    const userLogin = true

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 2000)
    }, [])

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Logic
                break
            default:
        }
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <TippyHeadless
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </TippyHeadless>
                <div className={cx('actions')}>
                    <Button outline none leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>

                    {userLogin ? (
                        <>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('message-icon')} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon className={cx('inbox-icon')} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={userLogin ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {userLogin ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/607988c2b027260d7966f32994e24765.jpeg?x-expires=1664233200&x-signature=Cov9al3WqPGIzV7fVMo2eTa%2BFRg%3D"
                                alt="Quang Hiep Avatar"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}
export default Header
