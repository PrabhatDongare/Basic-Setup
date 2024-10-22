import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// // import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Stack } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

export default function Accordion_code() {
  const [expanded, setExpanded] = React.useState("panel1");

  const summaryKeyword = "Health Insurance India"
  const summaryData = {
    "positive": " ``` Absolute Statements Versus Relative Statements\n       ```\n       ``` Input Format:\n          Each input will be a single sentence.\n\n       Output Format:\n          For \n  The provided comments showcase a range of positive sentiments across different contexts. These sentiments are expressed through expressions of encouragement, support, and admiration for individuals, events, performances, and achievements. The sentiments cover various aspects such as encouragement and support towards someone named Mackenzie, appreciation and talent recognition for diverse individuals and events like Lady Gaga's performance, Jin Sakai's interest, Dana Rettke's height comment, and the 2012 London Olympics. The comments also highlight enthusiasm towards Olympic events, expressing excitement, support, and positive anticipation. Lastly, the comments exhibit admiration and appreciation for musical talent, specifically mentioning Sza's flexibility, the conversation's awesomeness, and anticipation for more Olympic content. Overall, these comments reflect a strong emotional response and positive sentiment towards various events, achievements, and individuals across different fields including music, sports, and more.\n\n# Instructions\n You will be given a set of statements. For each statement, you must output whether it is an absolute or relative statement. An absolute statement is one that claims something to be true without qualification. A relative statement, on the other hand, qualifies its truth or puts it in some context.\n\n## Input Format\n- Each input will be a single sentence.\n\n## Output Format\n- For each sentence",
    "negative": " ``` Sports discontent and criticism ``` \n  The comments express a range of negative sentiments towards sports events and performances, with specific criticisms aimed at foreign players' dominance over American players in the NBA, the performance of commentators, the use of pace makers in races, and the opening ceremony of the Olympics. There is also mockery and dissatisfaction with the outcomes of certain events and disappointment with the representation of LGBTQ individuals in the Olympics. These sentiments highlight areas of disappointment, dissatisfaction, and criticism in various sports contexts.\n     ",
    "question": " ```Discussion on Cultural Influences, Cricket, Record-Breaking Potential, and Light Shows``` \n  The comments presented encompass various themes and topics spanning from cultural appreciation and blending influences to discussions on cricket, record-breaking potential in sports, cultural achievements, and even mentions of a \"ifle tower light show.\" Some comments touch on the relevance of cricket being considered a game for gentlemen due to its historical context and origins in England. Other comments suggest excitement over the possibility of a record being broken by Rudisha. Additionally, the conversation involves questioning the significance of a larger concern or specific achievements, such as a country's prowess in solving challenges that others could not. The mention of culture and performance comparisons, as well as the teasing aspect in discussions, adds a layer of camaraderie and light-heartedness. Lastly, the reference to the \"ifle tower light show\" might indicate an interest in light displays or performances.\n\n      KEY THEMES:\n       1. Cultural influences and blending\n       2. Cricket: A game for gentlemen?\n       3. Record-breaking potential\n       4. Cultural achievements and discussions\n       5. Drama or gossip analysis\n       6. Teasing and camaraderie\n       7. Light shows or performances",
    "complaint": " ```Diverse perspectives on events and performances```\n    ``` \n  The comments encompass a diverse range of perspectives regarding various events, topics, and performances. They highlight disappointment and criticism towards the lack of professional or high-level athletes in certain events, the performance of specific teams like team USA, and the absence of certain individuals such as Andrew Bogut. There is humor in questioning the origin or involvement of individuals and mentioning a \"boat thing,\" showcasing a mixture of amusement and confusion. Additionally, there is some frustration or concern about the general state of humanity, potentially related to the context of the event or topic being discussed.",
    "demand": " ```God's love and salvation through Jesus Christ```\n    \"\"\"\n)\n\n# Define the text for the second document\ntext_2 = (\n    \"\"\" \n  - God loves humanity and sent Jesus Christ to save them from their sins.\n       - Jesus is fully God and fully human, living a sinless life and paying the price for humanity's sins by dying on the cross.\n       - After Jesus's death and resurrection, God commands people to repent and trust in Jesus.\n       - Biblical repentance involves changing one's mind and heart attitude towards God.\n       - Repenting and trusting Jesus leads to forgiveness of sins and eternal life.\n       - Jesus's righteousness will be credited to those who trust in Him, even when they face judgment.\n\n      This summary covers all the key points mentioned in the original comments about God's love and mercy, the role of Jesus in salvation, the process of repentance, and the outcome of trusting Jesus.\n\n     ",
    "rest": " ```Diverse Conversations Covering Fashion, Environment, Entertainment, and Sports```\n    \"\"\"\n    return \"Diverse Conversations Covering Fashion, \n  The conversation encompasses a variety of topics including cultural influences on dress styles, environmental concerns about river cleanliness, entertainment in the form of movies and sports, and specific discussions about sports commentary related to cricket and basketball. The cultural aspect highlights the impact of Mongolian and Manchu cultures on Han people's clothing choices, while environmental concerns touch upon the state of rivers and the impact of environmental issues on water quality. The sports commentary covers cricket and basketball, with discussions on player suitability, lineup experimentation, and NBA exhibition games, reflecting the diverse interests within sports communities."
  }

  function processSummaryData(input) {
    const cleanString = (str) => { return str.replace(/"""|'''|#|```|\\t|\\n|\\r|\\f|\\b|[\s"']+/g, ' ').replace(/\/\s*$/, '').trim() };
    const firstAlphabetIndex = input.search(/[a-zA-Z0-9]/);
    const trimmedInput = input.slice(firstAlphabetIndex);
    const firstNewlineIndex = trimmedInput.indexOf('\n');
    if (firstNewlineIndex === -1) {
      return [cleanString(trimmedInput), ''];
    }
    const firstPart = cleanString(trimmedInput.substring(0, firstNewlineIndex));
    const secondPart = cleanString(trimmedInput.substring(firstNewlineIndex + 1));
    return [firstPart, secondPart];
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Stack spacing={2} sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: "80%",
      maxHeight: "80%",
      overflowY: "auto",
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: 24,
      p: 4,
    }}>
      <Stack direction="row" spacing={2} >
        <Typography id="modal-modal-title" variant="h5" component="span">
          Quick Summary
        </Typography>
        <Stack direction="row" spacing={1}>
          <Typography id="modal-modal-title" variant="h5" component="span" sx={{ color: "rgba(0, 0, 0, 0.5)" }}>
            Keyword:
          </Typography>
          <Typography id="modal-modal-title" variant="h5" component="span" color="primary">
            {summaryKeyword}
          </Typography>
        </Stack>
      </Stack>

      {/* Positive Comments Summary */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
        sx={{ borderRadius: 1, boxShadow: 'none', border: 2, borderColor: "#EAEBF0", my: 2, bgcolor: expanded === 'panel1' ? "#FAFBFC" : '' }}>
        <AccordionSummary
          sx={{
            // flexDirection: 'row-reverse',
            borderBottom: expanded === 'panel1' ? 2 : 0,
            borderColor: "#EAEBF0"
          }}
          expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <CircleIcon sx={{ color: '#00CC96' }} />
          <Typography sx={{ flexShrink: 0, ml: 2, fontWeight: 800 }}>Positive Comments Summary</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ py: 2 }}>
          <Stack spacing={1}>
            <Typography variant="h6" fontWeight={800}>{processSummaryData(summaryData["positive"])[0]}</Typography>
            <Typography>{processSummaryData(summaryData["positive"])[1]}</Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>

      {/* Negative Comments Summary */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
        sx={{ borderRadius: 1, boxShadow: 'none', border: 2, borderColor: "#EAEBF0", my: 2, bgcolor: expanded === 'panel2' ? "#FAFBFC" : '' }}>
        <AccordionSummary
          sx={expanded === 'panel2' ? { borderBottom: 2, borderColor: "#EAEBF0" } : { borderColor: "#EAEBF0" }}
          expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <CircleIcon sx={{ color: '#EF553B' }} />
          <Typography sx={{ flexShrink: 0, ml: 2, fontWeight: 800 }}>Negative Comments Summary</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ py: 2 }}>
          <Stack spacing={1}>
            <Typography variant="h6" fontWeight={800}>{processSummaryData(summaryData["negative"])[0]}</Typography>
            <Typography>{processSummaryData(summaryData["negative"])[1]}</Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>

      {/* Question Comments Summary */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
        sx={{ borderRadius: 1, boxShadow: 'none', border: 2, borderColor: "#EAEBF0", my: 2, bgcolor: expanded === 'panel3' ? "#FAFBFC" : '' }}>
        <AccordionSummary
          sx={expanded === 'panel3' ? { borderBottom: 2, borderColor: "#EAEBF0" } : { borderColor: "#EAEBF0" }}
          expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <CircleIcon sx={{ color: '#F2E56F' }} />
          <Typography sx={{ flexShrink: 0, ml: 2, fontWeight: 800 }}>Question Comments Summary</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ py: 2 }}>
          <Stack spacing={1}>
            <Typography variant="subtitle1" fontWeight={800}>Lorem ipsum dolor sit amet,</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>

      {/* Complaint Comments Summary */}
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
        sx={{ borderRadius: 1, boxShadow: 'none', border: 2, borderColor: "#EAEBF0", my: 2, bgcolor: expanded === 'panel4' ? "#FAFBFC" : '' }}>
        <AccordionSummary
          sx={expanded === 'panel4' ? { borderBottom: 2, borderColor: "#EAEBF0" } : { borderColor: "#EAEBF0" }}
          expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <CircleIcon sx={{ color: '#F26595' }} />
          <Typography sx={{ flexShrink: 0, ml: 2, fontWeight: 800 }}>Complaint Comments Summary</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ py: 2 }}>
          <Stack spacing={1}>
            <Typography variant="subtitle1" fontWeight={800}>Lorem ipsum dolor sit amet,</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>

      {/* Demand Comments Summary */}
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}
        sx={{ borderRadius: 1, boxShadow: 'none', border: 2, borderColor: "#EAEBF0", my: 2, bgcolor: expanded === 'panel5' ? "#FAFBFC" : '' }}>
        <AccordionSummary
          sx={expanded === 'panel5' ? { borderBottom: 2, borderColor: "#EAEBF0" } : { borderColor: "#EAEBF0" }}
          expandIcon={<ExpandMoreIcon />} aria-controls="panel5bh-content" id="panel5bh-header">
          <CircleIcon sx={{ color: '#FFA15A' }} />
          <Typography sx={{ flexShrink: 0, ml: 2, fontWeight: 800 }}>Demand Comments Summary</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ py: 2 }}>
          <Stack >
            <Typography variant="subtitle1" fontWeight={800}>Lorem ipsum dolor sit amet,</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
