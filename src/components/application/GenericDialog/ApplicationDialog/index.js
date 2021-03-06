import React from 'react';
import { Container, Grid, makeStyles, createStyles, Typography, Paper } from '@material-ui/core';
import GenericDialog from '../GenericDialog';
import { DialogContent } from '@material-ui/core';
import { ApplicationTabsView } from '../RateNewApp/templates/ApplicationTabsView';
import { useDialogState } from '../useDialogState';
import { ApplicationReviews } from '../../GenericTable/ApplicationReviews/table';

export const title = 'Application Information';

const useStyles = makeStyles(({ palette, spacing }) =>
  createStyles({
    root: {},
    header: { maxWidth: 800 },
    button: {
      height: 60,
      width: 175
    },
    paper: {
      background: palette.primary.main,
      color: palette.common.white,
      padding: spacing(1)
    }
  })
);

export default function ApplicationDialog({ id = title }) {
  const classes = useStyles({});
  const [{ initialValues = {} }] = useDialogState(id);
  const { applications = {} } = initialValues;
  const { groupId } = applications;

  return (
    <GenericDialog id={id} title={id} submitLabel={null} cancelLabel='Close' maxWidth='lg'>
      <DialogContent dividers>
        <Container className={classes.root}>
          <Grid container justify='center' spacing={3}>
            <Grid item xs style={{ minWidth: 280, maxWidth: 700 }}>
              <ApplicationTabsView {...applications} />
            </Grid>
            <Grid item xs style={{ minWidth: 280, maxWidth: 600 }}>
              <Paper className={classes.paper}>
                <Typography variant='h6'>Qualitative Reviews</Typography>
              </Paper>
              <ApplicationReviews groupId={groupId} height={500} />
            </Grid>
          </Grid>
        </Container>
      </DialogContent>
    </GenericDialog>
  );
}
