import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";

function WeatherCard() {
  const [location, setLocation] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      () => {
        console.log("Unable to get location");
      }
    );
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=a8a6e43cf0bf14ae392c816899de4c8e&units=metric`
        )
        .then(({ data }) => {
          setCurrentWeather(data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Unable to retrieve weather data");
          setLoading(false);
        });
    }
  }, [location]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Current Weather" />
          <CardContent>
            {loading ? (
              <CircularProgress />
            ) : (
              <>
                <Typography variant="h5">
                  {currentWeather.name}, {currentWeather.sys?.country}
                </Typography>
                <Typography variant="h6">
                  {currentWeather.weather[0]?.main}
                </Typography>
                <Typography variant="h4">
                  {Math.round(currentWeather.main.temp)}&deg;C
                </Typography>
              </>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default WeatherCard;
