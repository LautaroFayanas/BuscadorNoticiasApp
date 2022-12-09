import { Grid, Pagination, Stack, Typography } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import { Noticia } from "./Noticia";



export const ListadoNoticias = () => {
    const { noticias , totalnoticias , handleChangePagina , pagina } = useNoticias();

    const totalPaginas = Math.ceil( totalnoticias / 20 ) 

  return (
    <>
        <Typography
            textAlign={'center'}
            my={5}
            vatiant='h3'
            component={'h2'}
        > Ultimas Noticias </Typography>

        <Grid 
            container
            spacing={2}
        >
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>

        <Stack 
            sx={{
                marginY: 5
            }}
            spacing={2}
            direction='row'
            justifyContent='center'
            alignItems='center'
        >
            <Pagination 
            page={pagina}
            onChange={handleChangePagina}
            count={totalPaginas} 
            color='primary' />
        </Stack>
    </>
  )
}
