import styles from "./Features.module.css"
const Featurs = () => {
  return (
    <div className={styles.container}>
        <div>
            <img src="/icons/best-price.svg" alt="icon" />
            <span>
                <h4>بصرفه ترین قیمت</h4>
                <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
            </span>
        </div>
        <div>
            <img src="/icons/message.svg" alt="icon" />
            <span>
                <h4>پشتیبانی</h4>
                <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
            </span>
        </div>
        <div>
            <img src="/icons/endors.svg" alt="icon" />
            <span>
                <h4>رضایت کاربران</h4>
                <p>رضایت بیش از 10هزار کاربر از تور های ما. </p>
            </span>
        </div>
    </div>
  )
}

export default Featurs