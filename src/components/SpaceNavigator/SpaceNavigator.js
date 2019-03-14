import React from 'react';
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';

const cx = classNames.bind(styles);

const SpaceNavigator = ({onPrev, onNext}) => (
  <div className={cx('space-navigator')}>
    <div className={cx('left', 'end')}>
      <div className={cx('circle')} onClick={onPrev}>
        <FaAngleLeft/>
      </div>
    </div>
    <div className={cx('right', 'end')}>
      <div className={cx('circle')} onClick={onNext}>
        <FaAngleRight/>
      </div>
    </div>
  </div>
);

export default SpaceNavigator;