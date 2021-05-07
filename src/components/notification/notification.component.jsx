const Notification = ({ content }) => {
    return (
        <div className="empty" style={{ height: '100%' }}>
            <p className="empty-title h5 text-dark">{content}</p>
        </div>
    )
}

export default Notification