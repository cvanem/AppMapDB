import * as React from 'react';
import { Grid, Paper, Input, Tooltip } from '@material-ui/core';
import { FormControl, InputAdornment, IconButton, Typography } from '@material-ui/core';
import { useTable, useTableUpdate } from './TableStore';
import { useWidth } from '../../layout/LayoutStore';
import { icons } from './constants';
import { Fab, makeStyles, createStyles, useTheme } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { evalFunc } from '../../../helpers';
import { GenericTableContainerProps } from './GenericTableContainer';

export interface TableToolbarProps {
  name?: string;
  buttons?: any[] | ((props?: GenericTableContainerProps & any) => any[]);
  square?: boolean;
  title?: string;
  icon?: any;
  showicon?: boolean;
  viewportwidth?: any;
  inputplaceholder?: string;
  width?: number;
  search?: boolean;
  renderIcon?: (props: TableToolbarProps) => React.ReactNode;
  classes?: any;
}

const useStyles = makeStyles(({ palette, spacing, typography, layout }: any) =>
  createStyles({
    root: {},
    paper: {
      color: palette.common.white,
      background: palette.primary.main
    },
    formControl: {
      marginBottom: 4,
      paddingRight: spacing(1),
      width: 208
    },
    searchIcon: {
      color: palette.common.white
    },
    underline: {
      color: palette.common.white,
      borderBottom: `2px solid ${palette.common.white}`
    },
    title: {
      ...typography.h4,
      paddingLeft: spacing(0.5),
      color: palette.common.white,
      fontSize: typography.pxToRem(19),
      fontWeight: '300'
    },
    titleicon: {
      height: 32,
      width: 32,
      color: palette.common.white,
      marginTop: 3
    },
    grid: {
      overflow: 'hidden',
      paddingRight: spacing(1),
      paddingLeft: spacing(1),
      height: layout.tabletoolbarheight
    },
    hidden: {
      display: 'none' as 'none'
    }
  })
);

function TableToolbar(props: TableToolbarProps) {
  const classes = useStyles({});
  const [searchOpen, setSearchOpen] = React.useState(false);
  const { layout } = useTheme();
  const { name, buttons = [], square, title, inputplaceholder, icon, renderIcon, search, showicon = true } = props;

  const { searchtext = '' } = useTable(name);

  React.useEffect(() => {
    if (searchtext !== null && searchtext !== undefined && searchtext !== '') {
      handleOpenSearch();
    }
  }); // No dependencies on purpose

  const width = useWidth();

  const handleOpenSearch = React.useCallback(() => setSearchOpen(true), [setSearchOpen]);

  const inputRef = React.useRef(null);

  const tableUpdate = useTableUpdate();

  const updateTable = React.useCallback(
    value =>
      tableUpdate({
        id: name,
        searchtext: value
      }),
    [name, tableUpdate]
  );

  const handleClear = React.useCallback(
    event => {
      updateTable('');
      setSearchOpen(false);
    },
    [updateTable, setSearchOpen]
  );

  const handleKeyDown = React.useCallback(
    event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        handleClear(event);
      }
    },
    [handleClear]
  );

  React.useEffect(() => {
    const current = inputRef && inputRef.current;
    if (searchOpen) {
      if (current) {
        current.focus();
        current.addEventListener('keydown', handleKeyDown);
      }
    } else {
      current.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (current && searchOpen) {
        current.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [inputRef, searchOpen, handleKeyDown]);

  const handleChange = React.useCallback(
    event => {
      updateTable(event.target.value);
    },
    [updateTable]
  );

  const Search = (
    <FormControl className={classes.formControl}>
      <Input
        disableUnderline={false}
        classes={{ underline: classes.underline }}
        value={searchtext ? searchtext : ''}
        onChange={handleChange}
        placeholder={inputplaceholder}
        startAdornment={
          <InputAdornment position='start'>
            <Icons.Search className={classes.searchIcon} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position='end'>
            <IconButton className={classes.searchIcon} onClick={handleClear}>
              <Icons.Close />{' '}
            </IconButton>{' '}
          </InputAdornment>
        }
        inputRef={inputRef}
      />
    </FormControl>
  );

  const searchbutton =
    search !== false && search ? (
      <>
        <Tooltip
          placement='bottom'
          title={
            <Typography variant='h6' color='inherit'>
              Search
            </Typography>
          }
        >
          <Fab variant='extended' size='small' color='primary' onClick={handleOpenSearch}>
            <Icons.Search style={{ margin: -4 }} />
          </Fab>
        </Tooltip>
      </>
    ) : null;

  var Buttons = [searchbutton, ...evalFunc(buttons, props)].filter(b => b);

  const buttonspacing = 0; //Grid spacing of each button
  const buttonwidth = 42; //Width of each button
  const widths = {
    contentpadding: layout.contentpadding * 2, //Exterior padding
    headerpadding: 16, //Padding within the header
    iconwidth: 32, //Width of the title icon
    titlepadding: 8, //Padding between the icon and the title
    titleminwidth: 64, //Minimum width of the typography title - Don't display the title unless you can see more than 64 pixels
    calculatedbuttonswidth: Buttons.length * buttonwidth + buttonspacing * (Buttons.length > 0 ? Buttons.length - 1 : 0)
  };

  const calculatedfullwidth = Object.keys(widths)
    .map(k => widths[k])
    .reduce((t, a) => t + a, 0);
  const calculatedpartialwidth = calculatedfullwidth - widths.titlepadding - widths.titleminwidth;

  const tabletitlevisible = width >= calculatedfullwidth;
  const tableiconvisible = width >= calculatedpartialwidth;

  return (
    <Paper className={classes.paper} square={square}>
      <Grid container spacing={0} justify='space-between' alignItems='center' className={classes.grid}>
        <Grid item xs zeroMinWidth>
          <Grid container justify='flex-start' alignItems='center'>
            {tableiconvisible && showicon === true && (
              <Grid item>
                {renderIcon ? (
                  renderIcon(props)
                ) : (
                  <Tooltip title={title}>
                    <div>
                      {icon ? (
                        icon
                      ) : icons.find(x => x.name === name) ? (
                        icons.find(x => x.name === name).icon(classes.titleicon)
                      ) : icons.find(x => x.name === title) ? (
                        icons.find(x => x.name === title).icon(classes.titleicon)
                      ) : (
                        <Icons.List className={classes.titleicon} />
                      )}
                    </div>
                  </Tooltip>
                )}
              </Grid>
            )}
            {tabletitlevisible && (
              <Grid item xs zeroMinWidth>
                {title && (
                  <Typography variant='body2' noWrap className={classes.title}>
                    {title}
                  </Typography>
                )}
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='row' justify='flex-end' alignItems='center' spacing={buttonspacing}>
            <Grid item>
              <div style={{ display: searchOpen ? '' : 'none' }}>{Search}</div>
              {!searchOpen && (
                <Grid container spacing={1}>
                  {Buttons.map((b, i) => (
                    <Grid key={i} item>
                      {evalFunc(b)}
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TableToolbar;
