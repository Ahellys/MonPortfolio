import React, {useState} from 'react';
import IconLink from "./IconLink";
import {Box, Collapse, Typography} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title, details} = props;
   const [isOpen, setOpen]= useState(false); // State de l'élément, ouvert ou fermé
   const toggle = () => { //Fonction toggle qui change l'état
       setOpen(!isOpen);
   };


   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h2 style={{fontSize: '2rem'}}>{title}</h2>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'} onClick={() => toggle()}>
                  <IconLink title={'Détails'} icon={'fa fa-solid fa-bars'}/>
            </Box>
            <Box  maxWidth={'80%'}>
            <Collapse in={isOpen} timeout="auto" mountOnEnter unmountOnExit>
               <Typography paragraph={true} padding={'0.8rem'} border={'2px solid black'} borderRadius={'25px'} margin={'0'}>
                  {details}
               </Typography>
            </Collapse>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Démo'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Repo Github'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;