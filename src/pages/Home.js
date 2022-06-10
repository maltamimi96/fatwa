import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Article from '../Components/ArticleResponse';
import Header from '../Components/Header';
import HighlightedAnswers from '../Components/HighlightedAnswers';
import ImportantTopics from '../Components/ImportantTopics';
import RecentlyAnswered from '../Components/RecentlyAnswered';


  


function home() {

  return (
<>

    <Header/>
<ImportantTopics/>
    <Grid container>
      <Grid item xs="8"><RecentlyAnswered></RecentlyAnswered></Grid>
      <Grid item xs="4"><RecentlyAnswered></RecentlyAnswered></Grid>

    </Grid>

    
</>
   

  )
}

export default home