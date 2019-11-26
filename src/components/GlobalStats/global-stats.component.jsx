import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import useStats from "../../hooks/useStats";

import { FileCodeOutline, CalendarMonth, AccountGroup } from "mdi-material-ui";
import { useTheme } from "@material-ui/styles";
import { CircularProgress } from "@material-ui/core";
import CountUp from "react-countup";

const convertHex3To6 = hex =>
	hex.length === 4
		? hex
				.split("")
				.reduce((acc, item, index) => acc + (index > 0 ? item : "") + item, "")
		: hex;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	stat: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	icon: {
		...theme.typography.h2,
		color: `${convertHex3To6(theme.palette.text.primary)}55`
	},
	number: {
		...theme.typography.h4,
		color: theme.palette.secondary.main
	},
	text: {
		...theme.typography.h6,
		color: `${convertHex3To6(theme.palette.text.primary)}aa`
	}
}));

const GlobalStatsComponent = ({ className }) => {
	const classes = useStyles();
	const { stats, updateStats, isLoading } = useStats();

	return (
		<div className={`${classes.root} ${className}`}>
			<div className={classes.stat}>
				<FileCodeOutline className={classes.icon} />
				<WaitingNum isLoading={isLoading} className={classes.number}>
					{stats.totalSolutions}
				</WaitingNum>
				<div className={classes.text}>Total Submissions</div>
			</div>
			<div className={classes.stat}>
				<CalendarMonth className={classes.icon} />
				<WaitingNum isLoading={isLoading} className={classes.number}>
					{stats.todaysSolutions}
				</WaitingNum>
				<div className={classes.text}>{`${new Date().toLocaleDateString(
					undefined,
					{
						month: "short",
						day: "numeric"
					}
				)} Submissions`}</div>
			</div>
			<div className={classes.stat}>
				<AccountGroup className={classes.icon} />
				<WaitingNum isLoading={isLoading} className={classes.number}>
					{stats.totalUsers}
				</WaitingNum>
				<div className={classes.text}>Total Students</div>
			</div>
		</div>
	);
};

const WaitingNum = ({ isLoading, children: num, className }) => (
	<div className={className}>
		{isLoading ? (
			<CircularProgress color="secondary" size={25} />
		) : (
			<CountUp start={0} end={num} duration={3} />
		)}
	</div>
);

export default GlobalStatsComponent;
