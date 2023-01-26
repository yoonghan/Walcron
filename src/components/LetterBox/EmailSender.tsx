import { useEffect } from "react"
import Dialog from "../Dialog"
import styles from "./EmailSender.module.css"

interface EmailSenderProps {
  writeTo: string
  writeFrom: string
  onCancel: () => void
}

const EmailSender = ({ writeTo, writeFrom, onCancel }: EmailSenderProps) => {
  useEffect(() => {
    const subject = encodeURIComponent(`Contact from ${writeFrom} website`)
    const body = "Hello there, "

    window.location.href = `mailto:${writeTo}?subject=${subject}&body=${body}`
  }, [writeFrom, writeTo])

  return (
    <Dialog onCancel={onCancel} nonPortal={true}>
      <div className={styles.container}>
        Apologies that we do require you to use your own mailbox
      </div>
    </Dialog>
  )
}

export default EmailSender
