import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box } from '@mui/material';

export default function ToggleButtonGroupExample() {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };
    console.log(alignment)

    return (
        <Box>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                sx={{ padding: '10px', backgroundColor: 'wheat' }}
            >
                <ToggleButton selected={alignment === 'left'} value="left"
                    style={{ margin: "10px", backgroundColor: alignment === 'left' ? 'blue' : 'white', borderRadius: "10px" }}
                >Left</ToggleButton>

                <ToggleButton value="right"
                    style={{ margin: "10px", backgroundColor: alignment === 'right' ? 'green' : 'white', borderRadius: "10px" }}
                >Right</ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
}
