import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Dialog,
    Typography,
    CardActions,
    IconButton,
} from '@mui/material'


const ErrorMessage = (props) => {
    const { open, status, error, onClose } = props

    return (
        <Dialog
            maxWidth={false}
            open={open}
            onClose={onClose}
        >
            <Card sx={{ minWidth: 300, minHeight: 300, m: 1 }}>
                <CardContent>
                    <Box>
                        <Typography variant="subtitle1" color="textSecondary">
                            {status} Error
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {error}
                        </Typography>

                    </Box>
                </CardContent>
            </Card>


        </Dialog>
    )
}

export default ErrorMessage