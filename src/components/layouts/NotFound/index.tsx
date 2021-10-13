import styled from '@emotion/styled'
import { CustomTypography } from '../../ui-kit/Typography'

export const NotFoundPage = () => {
    return (
        <Center>
            <CustomTypography variant="h4" label="404 - Page Not Found"/>
        </Center>
    )
}

const Center = styled.div({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '40vh'
})
