

const Span = ({span}) => {
    return (
        <span className='me-4'>
            <a className='text-white'
                style={{
                    textDecoration: 'none'
                }} href="/#">{span.link}</a>
        </span>
    )
}

export default Span
