import CardContent from '@mui/material/CardContent';
import { CustomTypography } from '../../components/ui-kit/Typography';
import { Container, Grid } from '@mui/material';
import { CustomButton } from '../../components/ui-kit/Button';
import { CustomTextField } from '../../components/ui-kit/TextField';
import { VerticalSpace } from '../../components/ui-kit/VerticalSpace';
import { useHomeController } from './hooks/useHomeController'
import { CardElement, Center, LocationDisplayIcon, StyledBoldFont } from './styles/Home.StyledComponents';

export const Home = () => {
  const { onClickViewHistorical, getSearchText, data, locationAllow, message, currentLocation, inputValue, cardBGColor } = useHomeController()

  return ( 
    locationAllow.allow ?
      (
        <Container>
          <CustomTextField label="Search" placeholder="Search by city" onChange={(e: React.ChangeEvent<HTMLInputElement>) => getSearchText(e.target.value)} value={inputValue} fullWidth/>
          <VerticalSpace vSpace={2} />
          {
            data && cardBGColor ? 
            (
              <>
                {currentLocation && <Center><CustomTypography variant="h5" label={`Current Location Data`} /><VerticalSpace vSpace={1} /></Center>}
                <CardElement variant="elevation" cardBGColorProp={cardBGColor}>
                  <CardContent>
                    <Center>  
                      <div><StyledBoldFont>{`Weather Condition - ${data.weather[0].main}`}</StyledBoldFont></div>
                      <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="120" width="120" />
                      <CustomTypography label={`${data.main.temp}° C`} variant="h4"/>
                      <LocationDisplayIcon /> <StyledBoldFont>{data.name}</StyledBoldFont>
                      <Grid container>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                          <CustomTypography label="Minimum Temperature"/>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                          <CustomTypography label={`${data.main.temp_min}° C`} />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                          <CustomTypography label="Maximum Temperature"/>
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
                      <CustomButton size="medium" label="View Historical Weather Report" variant="contained" color="info" onClick={onClickViewHistorical} />
                    </Center>
                  </CardContent>
                </CardElement> 
              </>
            )  
            :
            (
              <Center>
                <CustomTypography variant="h5" label={message ? message : 'Loading.....'}/>
              </Center>
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