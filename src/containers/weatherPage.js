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

function WeatherPage() {
  const [location, setLocation] = useState({});
  const [fiveDaysWeather, setWeather] = useState([]);
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
        console.log("Unable to retrieve location");
      }
    );
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=a8a6e43cf0bf14ae392c816899de4c8e&units=metric`
        )
        .then(({ data }) => {
          console.log(data.list.slice(0, 5));
          setWeather(data.list.slice(0, 5));
          setLoading(false);
        })
        .catch(() => {
          console.log("Unable to retrieve weather data");
          setLoading(false);
        });
    }
  }, [location]);
  return (
    <div>
      <h1>Today's Weather</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Current Weather" />
            <CardContent>
              {loading ? (
                <CircularProgress />
              ) : (
                <>
                  {fiveDaysWeather?.map((day) => (
                    <>
                      <Typography variant="h4">{day.dt}</Typography>
                      <Typography variant="h5">
                        {day.weather[0]?.main}
                      </Typography>
                      <Typography variant="h3">
                        {Math.round(day.main.temp)}&deg;C
                      </Typography>
                    </>
                  ))}
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default WeatherPage;
