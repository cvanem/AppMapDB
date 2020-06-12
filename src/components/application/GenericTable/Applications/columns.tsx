﻿import React from 'react';
import { Grid } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import Application, {
  Costs,
  Platforms,
  Functionalities,
  FunctionalityQuestions,
  ClinicalFoundations,
  ClinicalFondationQuestions,
  Features,
  Inputs,
  Outputs,
  Uses,
  PrivacyQuestions,
  Privacies,
  Engagements,
  EngagementQuestions,
  Conditions,
  DeveloperTypes,
  DeveloperTypeQuestions
} from '../../../../database/models/Application';
import AppSummary from './AppSummary';
import RatingsColumn from './RatingsColumn';
import { Typography } from '@material-ui/core';
import { getDayTimeFromTimestamp } from '../../../../helpers';

export const name = 'Applications';
const center = text => <div style={{ textAlign: 'center' }}>{text}</div>;

export const CenterRadio = ({ checked = false }) => {
  const Icon = checked ? Icons.RadioButtonChecked : Icons.RadioButtonUnchecked;
  return center(<Icon color='action' fontSize='small' />);
};

const LastUpdated = ({ updated }) => (
  <Typography variant='body2' color='textSecondary'>
    {updated ? getDayTimeFromTimestamp(updated) : ''}
  </Typography>
);

const buildRadios = (items, values, paddingRight = undefined) => (
  <Grid container style={{ paddingRight }}>
    {items.map((i, index) => (
      <Grid item xs key={index}>
        <CenterRadio checked={values.includes(i)} />
      </Grid>
    ))}
  </Grid>
);

const PlatformRadios = ({ platforms = [] }: Application) => buildRadios(Platforms, platforms);
const UsesRadios = ({ uses = [] }: Application) => buildRadios(Uses, uses);
const DeveloperTypeRadios = ({ developerTypes = [] }: Application) => buildRadios(DeveloperTypes, developerTypes);
const ConditionRadios = ({ conditions = [] }: Application) => buildRadios(Conditions, conditions);
const EngagementRadios = ({ engagements = [] }: Application) => buildRadios(Engagements, engagements);
const FunctionalityRadios = ({ functionalities = [] }: Application) => buildRadios(Functionalities, functionalities);
const ClinicalFondationRadios = ({ clinicalFoundations = [] }: Application) => buildRadios(ClinicalFoundations, clinicalFoundations);
const PrivacyRadios = ({ privacies = [] }: Application) => buildRadios(Privacies, privacies);
const CostRadios = ({ costs = [] }) => buildRadios(Costs, costs);
const FeaturesRadios = ({ features = [] }) => buildRadios(Features, features, 16);
const InputRadios = ({ inputs = [] }: Application) => buildRadios(Inputs, inputs);
const OutputRadios = ({ outputs = [] }: Application) => buildRadios(Outputs, outputs);

export const columns = [
  { name: 'app', header: 'Application', minWidth: 300, Cell: AppSummary, hoverable: false },
  { name: 'updated', header: 'Last Updated', width: 165, Cell: LastUpdated, hoverable: false },
  { name: 'rating', header: 'Rating', width: 300, Cell: RatingsColumn, hoverable: false },
  {
    name: 'platforms',
    width: 140,
    header: (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify='center'>
              Platforms
            </Grid>
          </Grid>
          {Platforms.map(t => (
            <Grid item xs key={t}>
              {center(t)}
            </Grid>
          ))}
        </Grid>
      </>
    ),
    Cell: PlatformRadios
  },
  {
    name: 'developerType',
    width: 350,
    header: (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify='center'>
              Developer Type
            </Grid>
          </Grid>
          {DeveloperTypes.map(t => {
            var s = DeveloperTypeQuestions.find(fq => fq.value === t);
            var label = s ? (s.short ? s.short : s.value) : t;
            return (
              <Grid item xs key={label}>
                {center(label)}
              </Grid>
            );
          })}
        </Grid>
      </>
    ),
    Cell: DeveloperTypeRadios
  },
  {
    name: 'cost',
    width: 462,
    header: (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify='center'>
              Cost
            </Grid>
          </Grid>
          {Costs.map(t => (
            <Grid item xs key={t}>
              {center(t)}
            </Grid>
          ))}
        </Grid>
      </>
    ),
    Cell: CostRadios
  },
  {
    name: 'functionality',
    width: 490,
    header: (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify='center'>
              Access
            </Grid>
          </Grid>
          {Functionalities.map(t => {
            var s = FunctionalityQuestions.find(fq => fq.value === t);
            var label = s ? (s.short ? s.short : s.value) : t;
            return (
              <Grid item xs key={label}>
                {center(label)}
              </Grid>
            );
          })}
        </Grid>
      </>
    ),
    Cell: FunctionalityRadios
  },
  {
    name: 'privacies',
    width: 1800,
    header: (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify='center'>
              Privacies
            </Grid>
          </Grid>
          {Privacies.map(t => {
            var s = PrivacyQuestions.find(fq => fq.value === t);
            var label = s ? (s.short ? s.short : s.value) : t;
            return (
              <Grid item xs key={label}>
                {center(label)}
              </Grid>
            );
          })}
        </Grid>
      </>
    ),
    Cell: PrivacyRadios
  },
  {
    name: 'clinicalFoundations',
    width: 650,
    header: (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify='center'>
              Clinical Foundations
            </Grid>
          </Grid>
          {ClinicalFoundations.map(t => {
            var s = ClinicalFondationQuestions.find(fq => fq.value === t);
            var label = s ? (s.short ? s.short : s.value) : t;
            return (
              <Grid item xs key={label}>
                {center(label)}
              </Grid>
            );
          })}
        </Grid>
      </>
    ),
    Cell: ClinicalFondationRadios
  },
  {
    name: 'features',
    width: 3500,
    header: (
      <>
        <Grid container style={{ paddingRight: 16 }}>
          <Grid item xs={12}>
            <Grid container justify='center'>
              Features
            </Grid>
          </Grid>
          {Features.map(t => (
            <Grid item xs key={t}>
              {center(t)}
            </Grid>
          ))}
        </Grid>
      </>
    ),
    Cell: FeaturesRadios
  },
  {
    name: 'conditions',
    width: 850,
    header: (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify='center'>
              Supported Conditions
            </Grid>
          </Grid>
          {Conditions.map(t => (
            <Grid item xs key={t}>
              {center(t)}
            </Grid>
          ))}
        </Grid>
      </>
    ),
    Cell: ConditionRadios
  },
  {
    name: 'engagments',
    width: 1500,
    header: (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify='center'>
              Engagements
            </Grid>
          </Grid>
          {Engagements.map(t => {
            var s = EngagementQuestions.find(fq => fq.value === t);
            var label = s ? (s.short ? s.short : s.value) : t;
            return (
              <Grid item xs key={label}>
                {center(label)}
              </Grid>
            );
          })}
        </Grid>
      </>
    ),
    Cell: EngagementRadios
  },
  {
    name: 'inputs',
    width: 850,
    header: (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify='center'>
              Inputs
            </Grid>
          </Grid>
          {Inputs.map(t => (
            <Grid item xs key={t}>
              {center(t)}
            </Grid>
          ))}
        </Grid>
      </>
    ),
    Cell: InputRadios
  },
  {
    name: 'outputs',
    width: 1000,
    header: (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify='center'>
              Outputs
            </Grid>
          </Grid>
          {Outputs.map(t => (
            <Grid item xs key={t}>
              {center(t)}
            </Grid>
          ))}
        </Grid>
      </>
    ),
    Cell: OutputRadios
  },
  {
    name: 'uses',
    width: 200,
    header: (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify='center'>
              Uses
            </Grid>
          </Grid>
          {Uses.map(t => (
            <Grid item xs key={t}>
              {center(t)}
            </Grid>
          ))}
        </Grid>
      </>
    ),
    Cell: UsesRadios
  }
];
