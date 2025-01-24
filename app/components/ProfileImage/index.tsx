import Image from 'next/image'
import Link from 'next/link'
import { josefin_sans } from '@/fonts'

import css from './ProfileImage.module.scss'

const ProfileImage = () => {
    return (
        <div className={css.image_container}>
            <Link className={css.image_link} href={'https://www.linkedin.com/in/parmenion-charistos/'} target={'_blank'}>
                <Image src="/images/parm-hd.png" alt="Parmenion Charistos" width={300} height={300} />
                <span className={`${css.image_overlay} ${josefin_sans.className}`}>
                    Parmenion Charistos
                </span>
            </Link>
        </div>
    )
}

export default ProfileImage
