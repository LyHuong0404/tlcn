import { forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, onClick, className, ...props }, ref) => {

    if (src === null) {
        src = `${images.noimage}`;
    }
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={src}
            alt={alt}
            {...props}
            onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = `${images.noimage}`;
            }}
            onClick={onClick}
        />
    );
});

export default Image;
