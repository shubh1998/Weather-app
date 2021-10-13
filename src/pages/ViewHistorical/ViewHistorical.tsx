import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import { CustomTypography } from '../../components/ui-kit/Typography';
import { VerticalSpace } from '../../components/ui-kit/VerticalSpace';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled'

function createData(
  name: string,
  calories: string,
) {
  return { name, calories };
}

const rows = [
  createData('City', 'Indore'),
  createData('Country', 'India'),
  createData('Wind Speed', '7.41'),
  createData('Minimum Tempreture', '24° C'),
  createData('Maximum Tempreture', '24° C'),
  createData('Pressure', '1004'),
  createData('Sea Level', '1004'),
  createData('Ground Level', '1004'),
];

export const ViewHistorical = ()=>{
  return (
    <Container>
        <DisplayFlex>
            <Link to="/"><CustomTypography variant="h6" label="Home "/></Link><CustomTypography variant="h6" label="/View Details"/>
        </DisplayFlex>
        <VerticalSpace vSpace={1} />
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                              {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Container>
  );
}

const DisplayFlex = styled.div({
    display: 'flex'
})
