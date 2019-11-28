import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import HeroSection from "../components/HeroSection/HeroSection.component";
import MetaTags from "../components/MetaTags/MetaTags.component";
import MostRecent from "../components/MostRecent/MostRecent.component";
import { currentYear } from "../utils/siteConfig";
import MostLoved from "../components/MostLoved/MostLoved.component";

const useStyles = makeStyles(theme => ({
	root: {},
	heroContentStyleOverride: {
		...theme.typography.h3
	},
	welcomeMessage: {
		textAlign: "center",
		fontSize: "2em"
	},
	year: {
		color: "yellow"
	},
	buttonRow: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		justifyContent: "center",
		marginTop: ".5rem",
		"& > *": {
			margin: "0 .25rem"
		}
	}
}));

function Home({ location: { search } }) {
	const classes = useStyles();

	return (
		<>
			<MetaTags />
			<HeroSection classes={{ content: classes.heroContentStyleOverride }}>
				<div className={classes.welcomeMessage}>
					<div>Zero-to-Mastery</div>
					<div>
						Advent of Code <span className={classes.year}>{currentYear}</span>
					</div>
					<div className={classes.buttonRow}>
						<Button
							variant="contained"
							color="secondary"
							to="/about"
							component={Link}
						>
							About
						</Button>
						<Button
							variant="contained"
							color="primary"
							to="/solutions"
							component={Link}
						>
							Solutions
						</Button>
					</div>
				</div>
			</HeroSection>
			<MostRecent />
			<MostLoved />
		</>
	);
}

export default Home;
