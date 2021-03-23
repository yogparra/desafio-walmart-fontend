import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
	const [ value, setValue ] = useState("");
	const [ load, setLoad ] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if(load) {
			router.push(`/?query=${value}`);
		}
		setLoad(true);
	}, [value]);

	const useStyles = makeStyles((theme) => ({
		root: {
			padding: '2px 4px',
			display: 'flex',
			alignItems: 'center',
			width: 400
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1
		},
		iconButton: {
			padding: 10
		},
		divider: {
			height: 28,
			margin: 4
		}
	}));

	const classes = useStyles();

	return (
		<Paper component="form" className={classes.root}>
			<InputBase
				className={classes.input}
				placeholder="Search"
				inputProps={{ 'aria-label': 'search google maps' }}
				value={value}
				onChange={e => setValue(e.target.value)}				
			/>
			<IconButton
				className={classes.iconButton} 
				aria-label="search"
			>
			<SearchIcon />
			</IconButton>
		</Paper>
	);
};

export default Search;