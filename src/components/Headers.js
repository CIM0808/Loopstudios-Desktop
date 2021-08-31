
const Headers = ({header1, header2, header3, header4, header5, header6, hClassName, hStyle, hText1, hText2}) => {
    return (
        <>
            {
                header1 ?
                <h1 className={hClassName} style={{hStyle}}>
                    {hText1} <br />
                    {hText2}
                </h1>
                : null
            }

            {
                header2 ?
                <h2 className={hClassName}>
                    {hText1} <br />
                    {hText2}
                </h2>
                : null
            }

            {
                header3 ?
                <h3 className={hClassName}>
                    {hText1} <br />
                    {hText2}
                </h3>
                : null
            }

            {
                header4 ?
                <h4 className={hClassName}>
                    {hText1} <br />
                    {hText2}
                </h4>
                : null
            }

                {
                header5 ?
                <h5 className={hClassName}>
                    {hText1} <br />
                    {hText2}
                </h5>
                : null
            }

            {
                header6 ?
                <h6 className={hClassName}>
                    {hText1} <br />
                    {hText2}
                </h6>
                : null
            }
        </>
    )
}

export default Headers
