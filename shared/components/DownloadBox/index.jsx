import Image from 'next/image'
import styles from './style.module.css'
const DownloadBox = ({ path , title , type  }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" className={styles.Box}>
        <Image
            src={path}
            alt={title}
            width={42}
            height={42}
        />

        <div className={styles.About}>
            <div className={styles.Title}>
                {
                    title
                }
            </div>

            <div className={styles.Type}>
                {
                    type
                }
            </div>
        </div>
    </div>
  )
}

export default DownloadBox
