import { useEffect, useState, useRef } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TippyHeadless from '@tippyjs/react/headless'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'

import 'tippy.js/dist/tippy.css'
import * as searchServices from '~/apiServices/searchServices'
import PopperWrapper from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import styles from './Search.module.scss'
import { SearchIcon } from '~/components/Icons'
import { useDebounce } from '~/hooks'

const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debounced = useDebounce(searchValue, 800)

    const searchRef = useRef()

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return
        }
        const fetchApi = async () => {
            setLoading(true)

            const result = await searchServices.search(debounced)

            setSearchResult(result)

            setLoading(false)
        }
        fetchApi()
    }, [debounced])

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleChange = (e) => {
        const searchValue = e.target.value
        !searchValue.startsWith(' ') && setSearchValue(searchValue)
    }

    return (
        <div>
            <TippyHeadless
                interactive
                visible={searchResult.length > 0 && showResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={searchRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />

                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('')
                                setSearchResult([])
                                searchRef.current.focus()
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon className={cx('custom-menu-icon')} />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    )
}

export default Search
