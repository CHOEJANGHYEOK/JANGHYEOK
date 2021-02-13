import Image from 'next/image'

const ContactFooter = () => {
    return (
        <div className="w-full flex flex-col xl:flex-row justify-between">
            <a href="https://github.com/CHOEJANGHYEOK" target="_blank">
                <Image
                    src="/images/github-logo.svg"
                    width="36px"
                    height="36px"
                />
            </a>
            <a href="mailto:jh30056@gmail.com">
                <Image
                    src="/images/mail.svg"
                    width="36px"
                    height="36px"
                />
            </a>
        </div>
    )
}

export default ContactFooter;