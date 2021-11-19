import React from 'react'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import clsx from 'clsx'
import { showComponentIf } from '@utils/showIf'
import { ReactComponent as CloseSvg } from '@icons/close.svg'
import { setModalIsActive } from '@store/app-store/appReducer'
import { space } from '@assets/symbols'
import { phoneParser } from '@utils/stringParser'
import classes from './Modal.module.scss'

const Modal: React.FC = () => {
    const isActive = useAppSelector((state) => state.app.modal.isActive)
    const profile = useAppSelector((state) => state.profile)
    const dispatch = useAppDispatch()
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
                <div className={classes.button}>Edit</div>
            </div>
        </div>
    )
    return showComponentIf(isActive, mainComponent)
}

export default Modal
