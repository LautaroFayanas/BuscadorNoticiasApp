import { Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material"

export const Noticia = ({noticia}) => {

    const { urlToImage , url , tittle , description , source } = noticia

    return (
    
    <Grid item md={6} lg={4}> 
            <Card>
                {urlToImage && (
                    <CardMedia
                    height={'250'}
                    component='img'
                    alt={`Imagen de la noticia ${tittle}`}
                    image={urlToImage }
                />
                )}

                <CardContent>
                    <Typography valiant='body1' color='error'
                    > {source.name} 
                    </Typography>

                    <Typography valiant='h5' component='div'
                    > {tittle} 
                    </Typography>

                    <Typography valiant='p' component='p'
                    > {`${description?.slice(0,100)}...`} 
                    </Typography>

                  
                </CardContent>

                <CardActions>
                    <Link
                        href={url}
                        target='_blank'
                        variant='button'
                        width={'100%'}
                        textAlign='center'
                        sx={{textDecoration: 'none'}}
                    >Leer Noticia</Link>
                </CardActions>

            </Card>
    </Grid>
  )
}
