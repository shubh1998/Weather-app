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
import { useViewHistoricalController } from './hooks/useViewHistoricalController';
import { Line } from "react-chartjs-2";

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
  createData('Minimum Temperature', '24° C'),
  createData('Maximum Temperature', '24° C'),
  createData('Pressure', '1004'),
  createData('Sea Level', '1004'),
  createData('Ground Level', '1004'),
];

export const ViewHistorical = ()=>{
  const { windGraphData, dataLoaded, temperatureGraphData, cloudAndSolarGraphData, data } = useViewHistoricalController()

  return (
    dataLoaded 
    ?
    (
      <Container>
        <DisplayFlex>
            <Link to="/"><CustomTypography variant="h6" label="Home"/></Link><div>&nbsp;</div><CustomTypography variant="h6" label="/ View Details"/>
        </DisplayFlex>
        <VerticalSpace vSpace={1} />
        {temperatureGraphData && <Line data={temperatureGraphData} height={20} width={100}/> }
        <VerticalSpace vSpace={1} />
        {windGraphData && <Line data={windGraphData} height={20} width={100}/> }
        <VerticalSpace vSpace={1} />
        {cloudAndSolarGraphData && <Line data={cloudAndSolarGraphData} height={20} width={100}/> }
        <VerticalSpace vSpace={2} />
        <CustomTypography variant="h5" label="Summary" />
        <VerticalSpace vSpace={1} />
        {
          data &&
          <>
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">     
                  <TableHead>
                    <TableRow>
                      <TableCell>Temperature</TableCell>
                      {
                            data.data.map((item:any) => <TableCell>{item.datetime}</TableCell>)
                      }
                    </TableRow>
                  </TableHead>  
                  <TableBody>
                      <TableRow>
                        <TableCell>Min</TableCell>  
                        {
                          data.data.map((item:any) => <TableCell>{item.min_temp}</TableCell>)
                        }
                        <TableCell align="right"></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Max</TableCell>
                        {
                          data.data.map((item:any) => <TableCell>{item.max_temp}</TableCell>)
                        }
                      </TableRow>
                  </TableBody>
              </Table>
          </TableContainer>
          <VerticalSpace vSpace={1} />
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">     
                  <TableHead>
                    <TableRow>
                      <TableCell>Wind</TableCell>
                      {
                            data.data.map((item:any) => <TableCell>{item.datetime}</TableCell>)
                      }
                    </TableRow>
                  </TableHead>  
                  <TableBody>
                      <TableRow>
                        <TableCell>Wind Speed</TableCell>  
                        {
                          data.data.map((item:any) => <TableCell>{item.wind_spd}</TableCell>)
                        }
                        <TableCell align="right"></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Gust Wind Speed</TableCell>
                        {
                          data.data.map((item:any) => <TableCell>{item.wind_gust_spd}</TableCell>)
                        }
                      </TableRow>
                  </TableBody>
              </Table>
          </TableContainer>
          </>
        }
      </Container>
    ) :
    (
      <Center>
        <CustomTypography variant="h5" label="Loading....." />
      </Center>
    )
  );
}

const DisplayFlex = styled.div({
    display: 'flex'
})

const Center = styled.div({
  textAlign: 'center'
})
