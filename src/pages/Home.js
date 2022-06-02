import Grid from '@mui/material/Grid';
import HighlightedAnswers from '../Components/HighlightedAnswers';


  


function home() {

  return (

<Grid container spacing={2} >
    <Grid item xs={12} lg={8}>
      <HighlightedAnswers></HighlightedAnswers>
      <HighlightedAnswers></HighlightedAnswers>
      <HighlightedAnswers></HighlightedAnswers>
      <HighlightedAnswers></HighlightedAnswers>

    </Grid>
    <Grid item xs={12} lg={4}>
    <HighlightedAnswers></HighlightedAnswers>
    <HighlightedAnswers></HighlightedAnswers>

    <HighlightedAnswers></HighlightedAnswers>

    <HighlightedAnswers></HighlightedAnswers>

    </Grid>
</Grid>
  )
}

export default home