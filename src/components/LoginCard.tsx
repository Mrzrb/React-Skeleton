interface LoginCardProps {
    // The title of the card
    cardTitle?: string

    // The main color of the card
    mainColor?: string
}
export const LoginCard = ({ cardTitle = 'Login' }: LoginCardProps) => {
    return (
        <div className="flex  flex-col card">
            <div>{cardTitle}</div>
            <div>sso login place holder</div>
            <div>spliter</div>
            <div>forms</div>
            <div>don't have account tips</div>
        </div>
    )
}
