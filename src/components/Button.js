import React from 'react'

const Button = ({btnClass, btnText}) => {
    return (
        <button className={btnClass}
                style={{
                    border: '2px solid hsl(0, 0%, 41%)',
                    borderRadius: 'none',
                    letterSpacing: '3px',
                    fontSize: '90%',
                    textShadow: '0 0 2px rgba(0, 0, 0, .7)'
                }}
                >
            {btnText}
        </button>
    )
}

export default Button
