import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from '@emotion/styled'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CustomTypography } from '../../components/ui-kit/Typography';
import { Container, Grid } from '@mui/material';
import CustomButton from '../../components/ui-kit/Button';
import CustomTextField from '../../components/ui-kit/TextField';
import { VerticalSpace } from '../../components/ui-kit/VerticalSpace';
import { useHomeController } from './hooks/useHomeController'

export const Home = () => {
  const { onClickViewHistorical, getSearchText, city, data, locationAllow, message, currentLocation } = useHomeController()

  return (
    locationAllow.allow ?
    (
      <Container>
      <CustomTextField label="Search" placeholder="Search by city" onChange={(e: any) => getSearchText(e.target.value)} value={city}/>
      <VerticalSpace vSpace={2} />
      {
        data ? 
        (
          <CardElement variant="elevation">
            <CardContent>
                <Center>
                    
                    <h3>{currentLocation && <CustomTypography variant="h5" label={`Current Location Data`} />}</h3>
                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="120" width="120" />
                    <CustomTypography label={`${data.main.temp}° C`} variant="h4"/>
                    <LocationDisplayIcon /> <StyledCityFont>{data.name}</StyledCityFont>
                  <Grid container>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <CustomTypography label="Minimum tempreture"/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <CustomTypography label={`${data.main.temp_min}° C`} />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <CustomTypography label="Maximum tempreture"/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <CustomTypography label={`${data.main.temp_max}° C`} />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                    <CustomTypography label="Wind Speed" />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <CustomTypography label={`${data.wind.speed}`}/>
                    </Grid>
                  </Grid>
                  <VerticalSpace vSpace={1} />
                  <CustomButton size="medium" label="View" variant="contained" color="info" onClick={onClickViewHistorical} />
                </Center>
            </CardContent>
          </CardElement> 
        )  
        :
        (
          <CustomTypography variant="h5" label={message}/>
        )
      }
    </Container>
    ) : (
      <Center>
        <CustomTypography variant="h5" label={locationAllow.message} />
      </Center>
    )
  );
}

const Center = styled.div({
    textAlign: 'center'
})

const LocationDisplayIcon = styled(LocationOnIcon)({
  paddingTop: '4px'
})

const StyledCityFont = styled.span({
  fontSize: 21,
  fontWeight: 500, 
  marginBottom: 10
})

const CardElement = styled(Card)({
  "&&":{
    boxShadow: '0px 1px 3px 0px rgb(0 0 0 / 12%), 0px 1px 3px 0px rgb(0 0 0 / 12%), 0px 1px 3px 0px rgb(0 0 0 / 12%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
  }
})
