import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss'

const cx = classnames.bind(styles)

function Button({ to, href, onClick, children, primary, outline, text, small, large, none, disabled, rounded, className, leftIcon, rightIcon, ...passProps }) {

    let Component = 'button'
    const props = {
        onClick,
        ...passProps
    }

    if (to) {
        props.to = to
        Component = Link
    } else if (href) {
        props.href = href
        Component = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        small,
        large,
        none,
        disabled,
        rounded,
        leftIcon,
        rightIcon,
        [className]: className
    })

    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;