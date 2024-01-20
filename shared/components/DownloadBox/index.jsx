import Image from 'next/image'
import styles from './style.module.css'
const DownloadBox = ({ path , title , type , isAnimation  }) => {
  return (
    <div data-aos={isAnimation ? "fade-up" : "none"}  data-aos-duration={isAnimation ? "3000" : "none"} className={styles.Box}>
        <Image
            src={path}
            alt={title}
            width={42}
            height={42}
        />

        <div className={styles.About}>
            <p className={styles.Title}>
                {
                    title
                }
            </p>

            <p className={styles.Type}>
                {
                    type
                }
            </p>
        </div>
    </div>
  )
}

export default DownloadBox
