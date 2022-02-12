import React from 'react';

export const Alert = (props) => {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{ height: '50px' }}>
            <div className={`alert alert-primary alert-dismissible fade show`} role="alert">
                {capitalize(props.message)}
            </div>
        </div>
    )
}
