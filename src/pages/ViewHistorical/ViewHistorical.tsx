import { CardContent, Container } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Line } from 'react-chartjs-2'
import { Link } from 'react-router-dom'

import { CustomTypography } from '../../components/ui-kit/Typography'
import { VerticalSpace } from '../../components/ui-kit/VerticalSpace'
import { HistoricalDataArrayType } from '../../utils/types/HistoricalDataArrayType'
import { useViewHistoricalController } from './hooks/useViewHistoricalController'
import { CardElement, Center, DisplayFlex } from './styles/ViewHistorical.StyledComponents'

export const ViewHistorical = () => {
  const {
    windGraphData,
    dataLoaded,
    temperatureGraphData,
    cloudAndSolarGraphData,
    data,
    cityQuery,
  } = useViewHistoricalController()

  return dataLoaded ? (
    <Container>
      <Center>
        <CustomTypography variant="h4" label="Historical Weather Report" />
      </Center>
      <DisplayFlex>
        <Link to="/">
          <CustomTypography variant="h6" label="Home" />
        </Link>
        <div>&nbsp;</div>
        <CustomTypography variant="h6" label="/ View Details" />
      </DisplayFlex>
      <VerticalSpace vSpace={1} />
      {cityQuery && (
        <CardElement variant="elevation">
          <CardContent>
            <Center>
              <CustomTypography
                variant="h6"
                label={`${cityQuery} city weather report from 2021-10-06 to 2021-10-12`}
              />
            </Center>
          </CardContent>
        </CardElement>
      )}
      <VerticalSpace vSpace={1} />
      {temperatureGraphData && <Line data={temperatureGraphData} height={20} width={100} />}
      <VerticalSpace vSpace={1} />
      {windGraphData && <Line data={windGraphData} height={20} width={100} />}
      <VerticalSpace vSpace={1} />
      {cloudAndSolarGraphData && <Line data={cloudAndSolarGraphData} height={20} width={100} />}
      <VerticalSpace vSpace={2} />
      <CustomTypography variant="h5" label="Summary" />
      <VerticalSpace vSpace={1} />
      {data && (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Temperature</TableCell>
                  {data.data.map((item: HistoricalDataArrayType) => (
                    <TableCell align="center" key={item.datetime}>
                      {item.datetime}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">Min</TableCell>
                  {data.data.map((item: HistoricalDataArrayType) => (
                    <TableCell align="center" key={item.min_temp}>
                      {`${item.min_temp}° C`}
                    </TableCell>
                  ))}
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Max</TableCell>
                  {data.data.map((item: HistoricalDataArrayType) => (
                    <TableCell align="center" key={item.max_temp}>
                      {`${item.max_temp}° C`}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <VerticalSpace vSpace={1} />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Wind</TableCell>
                  {data.data.map((item: HistoricalDataArrayType) => (
                    <TableCell align="center" key={item.datetime}>
                      {item.datetime}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">Wind Speed</TableCell>
                  {data.data.map((item: HistoricalDataArrayType) => (
                    <TableCell align="center" key={item.wind_spd}>
                      {item.wind_spd}
                    </TableCell>
                  ))}
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Gust Wind Speed</TableCell>
                  {data.data.map((item: HistoricalDataArrayType) => (
                    <TableCell align="center" key={item.wind_gust_spd}>
                      {item.wind_gust_spd}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Container>
  ) : (
    <Center>
      <CustomTypography variant="h5" label="Loading....." />
    </Center>
  )
}
