import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const date = new Date(lastUpdate);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center" align="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.confirmed)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Terinfeksi
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textPrimary" variant="caption">
              Update:{" "}
              {date.getDate() +
                " " +
                months[date.getMonth()] +
                " " +
                date.getFullYear()}
            </Typography>
            <Typography variant="body2">
              Angka kasus aktif dari Covid19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Sembuh
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textPrimary" variant="caption">
              Update:{" "}
              {date.getDate() +
                " " +
                months[date.getMonth()] +
                " " +
                date.getFullYear()}
            </Typography>
            <Typography variant="body2">
              Pesentase Kesembuhan dari Covid19:{" "}
              {((recovered.value / confirmed.value) * 100).toFixed(2)}%
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Kematian
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textPrimary" variant="caption">
              Update:{" "}
              {date.getDate() +
                " " +
                months[date.getMonth()] +
                " " +
                date.getFullYear()}
            </Typography>
            <Typography variant="body2">
              Pesentase Kematian dari Covid19:{" "}
              {((deaths.value / confirmed.value) * 100).toFixed(2)}%
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
