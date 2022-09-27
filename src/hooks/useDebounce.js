import { useEffect, useState } from 'react'

function useDebounce(value, delay) {
    const [_value, setValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setValue(value)
        }, delay)

        return () => clearTimeout(handler)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
    return _value
}

export default useDebounce
