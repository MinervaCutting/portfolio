import cplusplus from "../images/cplusplus.png";
import html from "../images/html5.jpg";
import css from "../images/CSS3.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import redux from "../images/redux.svg";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@material-ui/lab";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import StarRating from "./StarRating";

const Technologies = () => {
   const classes = useStyles()
    const skills = [
        {
          year: "2010",
          src: cplusplus,
          title: "C++ Logic",
          stars: 4,
        },
        {
          year: "2015",
          src: html,
          title: "HTML 5",
          stars: 5,
        },
        {
          year: "2018",
          src: css,
          title: "CSS 3",
          stars: 5,
        },
        {
          year: "2019",
          src: javascript,
          title: "Javascript ES6",
          stars: 4,
        },
        {
          year: "2020",
          src: react,
          title: "React js",
          stars: 5,
        },
        {
          year: "2020",
          src: redux,
          title: "React Redux",
          stars: 4,
        },
      ];

    return (
        <Timeline align="left">
            {
                skills.map(({year, src, title, stars}, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent>
                            <Typography variant="h6" color="textSecondary">
                                {year}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <img src={src} alt={title} className={classes.customlogo} />
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                {title}
                                </Typography>
                                <StarRating stars={stars}/>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
            ))
            }
        </Timeline>
    )
}

const useStyles = makeStyles((theme) => ({
    customlogo: {
        width: "25px",   
    },
    paper: {
        padding: "6px 16px",
        maxWidth: "200px",
    }
  }))

export default Technologies
