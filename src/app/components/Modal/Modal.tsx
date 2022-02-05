import { space } from '@assets/symbols'
import Button from '@components/Button/Button'
import { ReactComponent as CloseSvg } from '@icons/close.svg'
import { BRANDS, SIZES } from '@localTypes/Enums'
import { setModalIsActive } from '@store/app-store/appReducer'
import { useDispatch, useSelector } from '@store/hooks'
import { showComponentIf } from '@utils/showIf'
import { phoneParser } from '@utils/stringParser'
import clsx from 'clsx'
import React from 'react'
import classes from './Modal.module.scss'

const Modal: React.FC = () => {
    const isActive = useSelector((state) => state.app.modal.isActive)
    const profile = useSelector((state) => state.profile)
    const dispatch = useDispatch()
    const close = () => {
        dispatch(setModalIsActive(false))
    }

    const mainComponent = (
        <div className={classes.container}>
            <div className={clsx(
                'component',
                classes.modal,
            )}
            >
                <header className={classes.header}>
                    <div className={classes.title}>Profile</div>
                    <div className={classes.close} onClick={close}><CloseSvg /></div>
                </header>
                <div className={classes.body}>
                    <div className={classes.img}>img</div>
                    <div className={classes.info}>
                        <p>
                            {profile.firstName}
                            {space}
                            {profile.secondName}
                        </p>
                        <p>{profile.email}</p>
                        <p>{phoneParser(profile.phone)}</p>
                    </div>
                </div>
                <Button type={BRANDS.primary} size={SIZES.small}>Edit</Button>
            </div>
        </div>
    )
    return showComponentIf(isActive, mainComponent)
}

export default Modal
