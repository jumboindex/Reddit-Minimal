import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip'

const renderTooltipCopied = (props) => {

    return (
        <Tooltip 
            id="button-tooltip" 
            {...props} >
            copied to clipboard!
        </Tooltip>    
    );

};

export default renderTooltipCopied;