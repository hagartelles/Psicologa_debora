import { DivBackground } from "@/components/globalComponents/DivBackground";
import { GenericCard } from "@/components/Ui/Cards/genericCard";
import { Restaurant } from '@mui/icons-material';
import { Box, Container } from "@mui/material";
import { cardsContent } from "@/components/enum/cardsContent";

export const Cards = () => {
    return (
        <>
            <DivBackground name="tratamentos" extraClass="flex items-center">
                <Container className="my-auto flex items-center">
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: 'repeat(2, 1fr)', 
                                lg: 'repeat(4, 1fr)', 
                            },
                            gap: 2, 
                            padding: 2, 
                            justifyContent: 'center', 
                            justifyItems: 'center', 
                            alignItems: 'center', 
                            width: '100%',
                            maxWidth: {
                                xs: '100%',
                                sm: '90%', 
                                md: '85%',
                                lg: '80%'
                            }, 
                            mx: 'auto',
                        }}
                    >
                        <GenericCard
                            titulo={cardsContent.LaudoTitle}
                            conteudo={cardsContent.LaudoContent}
                            icone={<Restaurant fontSize="large" />}
                        />

                        <GenericCard
                            titulo={cardsContent.EmocionalTitle}
                            conteudo={cardsContent.EmocionalContent}
                            icone={<Restaurant fontSize="large" />}
                        />

                        <GenericCard
                            titulo={cardsContent.TranstornoTitle}
                            conteudo={cardsContent.TranstornosContent}
                            icone={<Restaurant fontSize="large" />}
                        />

                        <GenericCard
                            titulo={cardsContent.TrasntornosGravesTitle}
                            conteudo={cardsContent.TranstornosGravesContent}
                            icone={<Restaurant fontSize="large" />}
                        />
                    </Box>
                </Container>
            </DivBackground>
        </>
    );
};