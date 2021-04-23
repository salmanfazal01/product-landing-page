import {
  Collapse,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  withTheme,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import ResponsiveText from "../../components/ResponsiveText";
import SectionHeader from "../../components/SectionHeader";

const data = [
  {
    question: "How to contact with riders emergency?",
    answer:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  },
  {
    question: "App installation failed, how to update system information?",
    answer:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  },
  {
    question: "Website reponse taking time, how to improve?",
    answer:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  },
  {
    question: "New update fixed all bug and issues",
    answer:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  },
  {
    question: "How to contact with riders emergency?",
    answer:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  },
];

const useStyles = ({}) =>
  makeStyles((theme) => ({
    listContainer: {
      marginTop: "30px",
    },
    listItemContainer: {
      backgroundColor: theme.palette.background.lightgrey,
      borderRadius: "5px",
      padding: "10px 20px",
      marginBottom: "5px",
      cursor: "pointer",
    },
    question: {
      flex: 1,
      fontWeight: 500,
    },
    answer: {
      color: theme.palette.primary.darkgrey,
    },
  }));

const Section11 = (props) => {
  const { theme } = props;
  const classes = useStyles(props)();
  const [open, setOpen] = useState(0);

  useEffect(() => {
    if (open === false) {
      setOpen(0);
    }
  }, [open]);

  return (
    <Container maxWidth={"md"} className={classes.container}>
      <div className={classes.header}>
        <SectionHeader
          centered
          title={"Frequently asked questions"}
          description={
            "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."
          }
        />
      </div>

      <div>
        <List component="nav" className={classes.listContainer}>
          {data.map((item, i) => {
            return (
              <div key={i} className={classes.listItemContainer}>
                <ListItem
                  onClick={() => setOpen(open === i && i !== 0 ? false : i)}>
                  <ResponsiveText className={classes.question}>
                    {item.question}
                  </ResponsiveText>
                  {open === i ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open === i} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem>
                      <ResponsiveText
                        variant={"body2"}
                        className={classes.answer}>
                        {item.answer}
                      </ResponsiveText>
                    </ListItem>
                  </List>
                </Collapse>
              </div>
            );
          })}
        </List>
      </div>
    </Container>
  );
};

export default withTheme(Section11);
