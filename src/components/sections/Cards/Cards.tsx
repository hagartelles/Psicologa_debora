import { DivBackground } from "@/components/globalComponents/DivBackground";
import { GenericCard } from "@/components/Ui/Cards/genericCard";
import { EmojiEmotions, Restaurant, Psychology } from '@mui/icons-material';
import { Box } from "@mui/material";
import { cardsContent } from "@/components/enum/cardsContent";

export const Cards = () => {
    return (
        <>
            <DivBackground name="Cards">
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))' },
                        gap: 4, 
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%', 
                        margin: '0 auto', 
                    }}
                >
                    <GenericCard
                        titulo="Quem sou eu"
                        conteudo={cardsContent.elaboracaoLaudo}
                        icone={<Restaurant fontSize="large" />}
                    />

                    <GenericCard
                        titulo="Quem sou eu"
                        conteudo={cardsContent.elaboracaoLaudo}
                        icone={<Restaurant fontSize="large" />}
                    />

                    <GenericCard
                        titulo="Quem sou eu"
                        conteudo={cardsContent.elaboracaoLaudo}
                        icone={<Restaurant fontSize="large" />}
                    />

                    <GenericCard
                        titulo="Quem sou eu"
                        conteudo={cardsContent.elaboracaoLaudo}
                        icone={<Restaurant fontSize="large" />}
                    />
                </Box>
            </DivBackground>
        </>
    );
};