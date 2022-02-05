import { space } from '@assets/symbols'
import { ReactComponent as CloseSvg } from '@icons/close.svg'
import { BRANDS, SIZES } from '@localTypes/Enums'
import { setModalIsActive } from '@store/app-store/appReducer'
import { useDispatch, useSelector } from '@store/hooks'
import { phoneParser } from '@utils/stringParser'
import clsx from 'clsx'
import { FC } from 'react'
import { Button, If } from '@kit';
import classes from './Modal.module.scss'

const Modal: FC = () => {
    const isActive = useSelector((state) => state.app.modal.isActive)
    const profile = useSelector((state) => state.profile)
    const dispatch = useDispatch()
    const close = () => {
        dispatch(setModalIsActive(false))
    }

    return (
        <If condition={isActive}>
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
        </If>
    )
}

export default Modal
