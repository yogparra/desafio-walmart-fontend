import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { size } from 'lodash';
import Copyright from '../src/Copyright';
import Search from '../src/Search';
import Circular from '../src/Circular';
import { findProductsParameter } from './api/products';

export default function Index() {
	const [products, setProducts] = useState(null);
	const { query } = useRouter();

	useEffect(
		() => {
			(async () => {
				if (size(query.query) > 3) {
					const respuesta = await findProductsParameter(query.query);
					console.log(respuesta);
					setProducts(respuesta || []);
				} else {
					setProducts([]);
				}
			})();
		},
		[query]
	);

	const useStyles = makeStyles((theme) => ({
		gridContainer: {
			paddingLeft: '30px',
			paddingRight: '30px'
		},
		root: {
			maxWidth: 345
		},
		media: {
			height: 100,
			width: '30%',
			marginLeft: '30%'
		},
		margin: {
			margin: theme.spacing(1)
		},
	}));

	const classes = useStyles();

	return (
		<Container maxWidth="lg">
			<Typography variant="h5" component="h2">
				<br />
				Walmart-Frondend
				<br />
				<Search />
				<br />
			</Typography>

			{!products && <Circular />}
			{products &&
				size(products) === 0 && (
					<div>
						<h2>No se han encontrado productos</h2>
					</div>
				)}
			{size(products) > 0 && (
				<Grid container spacing={4} className={classes.gridContainer}>
					{!products ? null : (
						products.map(({ id, brand, description, image, price, palindrome }) => (
							<Grid key={id} item xs={12} sm={6} md={4}>
								<Card className={classes.root}>
									<CardActionArea>
										<CardMedia className={classes.media} image={image} />
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												<Box fontWeight="fontWeightBold">
													{brand} - {description}
												</Box>
											</Typography>
											{palindrome ? <Button size="medium">50% ${price}</Button> : <Button size="large">${price}</Button>}
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						))
					)}
				</Grid>
			)}
			<Copyright />
		</Container>
	);
}

/*
	"_id": "60572ac9433a4f7639c5444b",
	"id": 1,
	"brand": "ooy eqrceli",
	"description": "rlñlw brhrka",
	"image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
	"price": 498724
*/

