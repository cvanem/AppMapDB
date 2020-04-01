import React from 'react';
import GenericContent from '../GenericContent';
import MultiSelectCheck from '../../DialogField/MultiSelectCheck';
import {
  Features,
  Conditions,
  Platforms,
  Costs,
  ClinicalFoundations,
  Privacies,
  Functionalities,
  DeveloperTypes,
  Engagements,
  Uses
} from '../../../../database/models/Application';
import { useProcessData } from '../../../../database/useProcessData';
import { useFullScreen, useSignedIn } from '../../../../hooks';
import { useHandleChangeRoute } from '../../../layout/hooks';
import { Grid, Button, Divider } from '@material-ui/core';
import { publicUrl } from '../../../../helpers';
import { tables } from '../../../../database/dbConfig';
import { useSelector } from 'react-redux';
import { useFilters } from '../../../../database/useFilters';
import AutoCompleteSelect from '../../DialogField/AutoCompleteSelect';
import { useGetFilters } from '../../../../database/useFilterList';

export const title = 'Apply Filters';
const maxWidth = 400;
const minWidth = 280;

const FilterButtons = props => {
  const handleChangeRoute = useHandleChangeRoute();
  const signedIn = useSignedIn();
  const { values, setValues, handleReset, advanced, handleToggleAdvanced } = props;
  const processData = useProcessData();
  const uid = useSelector((s: any) => s.firebase.auth.uid);
  const { SavedFilter } = values;
  const SavedFilterStr = JSON.stringify(SavedFilter);

  const filterName = SavedFilter ? SavedFilter.name : '';

  const getFilters = useGetFilters();

  React.useEffect(() => {
    SavedFilterStr && setValues(prev => ({ ...JSON.parse(SavedFilterStr), SavedFilter: prev.SavedFilter })); // If we changed the selected saved filter then update the filters on the page
  }, [SavedFilterStr, setValues]);

  const handleSave = React.useCallback(() => {
    var name = prompt('Enter a name to save current filters under.', filterName);
    if (name) {
      var Data = { ...values, uid, name, time: new Date().getTime() };
      if (name !== filterName) {
        // If we are creating a new filter, then remove the id and rev so we don't update the old one
        const { _id, _rev, ...other } = Data;
        Data = other;
      }
      processData({ Model: tables.filters, Data });
    }
  }, [uid, filterName, processData, values]);

  const handleDelete = React.useCallback(() => {
    var name = prompt('Enter name of filter to delete.', filterName);
    if (name) {
      processData({ Action: 'd', Model: tables.filters, Data: { ...values, uid, name, time: new Date().getTime() }, onSuccess: getFilters });
    }
  }, [getFilters, filterName, uid, processData, values]);

  return (
    <Grid container spacing={2} justify='flex-end' alignItems='center'>
      <Grid item>
        <Button variant='outlined' size='small' color='default' onClick={handleReset}>
          Reset
        </Button>
      </Grid>
      <Grid item>
        <Button variant='outlined' size='small' onClick={handleToggleAdvanced}>
          {`${advanced ? 'Hide' : 'Show'} Advanced Filters`}
        </Button>
      </Grid>
      {signedIn && (
        <>
          <Grid item>
            <Button size='small' variant='outlined' onClick={handleSave}>
              Save Filter
            </Button>
          </Grid>
          <Grid item>
            <Button size='small' variant='outlined' onClick={handleDelete}>
              Delete Filter
            </Button>
          </Grid>
        </>
      )}
      <Grid item>
        <Button size='small' variant='contained' color='primary' onClick={handleChangeRoute(publicUrl('/Apps'))}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default function FilterContent({ id = title, ...other }) {
  const [advanced, setAdvanced] = React.useState(false);
  const handleToggleAdvanced = React.useCallback(() => {
    setAdvanced(prev => !prev);
  }, [setAdvanced]);
  const fullScreen = useFullScreen();
  const width = fullScreen ? 290 : 700;
  const hidden = !advanced;
  const signedIn = useSignedIn();
  const [filters] = useFilters();

  const items = Object.keys(filters).map(k => ({ label: filters[k].name, value: filters[k] }));

  const props = {
    id,
    Buttons: FilterButtons,
    advanced,
    handleToggleAdvanced,
    submitLabel: null,
    cancelLabel: 'Close',
    width,
    fields: [
      {
        id: 'SavedFilter',
        label: 'Load from Saved Filters',
        Field: AutoCompleteSelect,
        items,
        style: { minWidth, maxWidth },
        hidden: !signedIn
      },
      {
        id: 'SavedFilterPlaceholder',
        Field: Divider,
        xs: 12,
        hidden: !signedIn
      },
      {
        id: 'Platforms',
        Field: MultiSelectCheck,
        items: Platforms.map(label => ({ value: label, label })),
        style: { minWidth, maxWidth }
      },
      {
        id: 'Cost',
        Field: MultiSelectCheck,
        items: Costs.map(label => ({ value: label, label })),
        style: { minWidth, maxWidth }
      },
      {
        id: 'DeveloperTypes',
        label: 'Developer Types',
        Field: MultiSelectCheck,
        items: DeveloperTypes.map(label => ({ value: label, label })),
        style: { minWidth, maxWidth }
      },
      {
        id: 'Features',
        Field: MultiSelectCheck,
        items: Features.map(label => ({ value: label, label })),
        style: { minWidth, maxWidth }
      },
      {
        id: 'Functionalities',
        Field: MultiSelectCheck,
        items: Functionalities.map(label => ({ value: label, label })),
        style: { minWidth, maxWidth },
        hidden
      },
      {
        id: 'Conditions',
        label: 'Supported Conditions',
        Field: MultiSelectCheck,
        items: Conditions.map(label => ({ value: label, label })),
        style: { minWidth, maxWidth },
        hidden
      },
      {
        id: 'Engagements',
        Field: MultiSelectCheck,
        items: Engagements.map(label => ({ value: label, label })),
        style: { minWidth, maxWidth },
        hidden
      },
      {
        id: 'Privacy',
        Field: MultiSelectCheck,
        items: Privacies.map(label => ({ value: label, label })),
        style: { minWidth, maxWidth },
        hidden
      },
      {
        id: 'Uses',
        Field: MultiSelectCheck,
        items: Uses.map(label => ({ value: label, label })),
        style: { minWidth, maxWidth },
        hidden
      },
      {
        id: 'ClinicalFoundations',
        label: 'Evidence & Clinical Foundations',
        Field: MultiSelectCheck,
        items: ClinicalFoundations.map(label => ({ value: label, label })),
        style: { minWidth, maxWidth },
        hidden
      }
    ],
    ...other
  };
  return <GenericContent {...props} />;
}
