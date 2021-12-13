import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip'

const renderTooltip = (props) => {

    return (
        <Tooltip 
            id="button-tooltip" 
            {...props} >
            copy url
        </Tooltip>    
    );

};

export default renderTooltip;