import * as React from 'react'
import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { getCardsByName } from "../utils/api-util"
import SearchResultsDialog from './SearchResultsDialog'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [fetchedCardList, setFetchedCardList] = React.useState([])
  const [searchTerms, setSearchTerms] = React.useState("")
  const [dialog, setDialog] = React.useState({
    isOpen: false,
    fetchedCardList: undefined,
  })
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleChange = (event) => {
    setSearchTerms(event.target.value)
  }

  const handleSearch = async () => {
    const cardSearchResults = await getCardsByName(searchTerms)
    setFetchedCardList(cardSearchResults.cards)
    setDialog({
      isOpen: true,
      fetchedCardList,
    })
  }

  const handleCloseDialog = () => {
    setDialog({
      isOpen: false
    })
  }

  const handleSaveCard = async () => {
    const newMovieToSave = {
      // title: fetchedMovie.Title,
      // year: fetchedMovie.Year,
      // released: fetchedMovie.Released,
      // runtime: fetchedMovie.Runtime,
      // genre: fetchedMovie.Genre,
      // director: fetchedMovie.Director,
      // writer: fetchedMovie.Writer,
      // actors: fetchedMovie.Actors,
      // plot: fetchedMovie.Plot,
      // poster: fetchedMovie.Poster,
      // metascore: fetchedMovie.Metascore,
      // dvd: fetchedMovie.DVD,
      // boxOffice: fetchedMovie.BoxOffice,
    }
    // try {
    //   const response = await API.graphql({
    //     query: createMovieData,
    //     variables: { input: newMovieToSave},
    //     authMode: 'API_KEY'
    //   })
    //   console.log('Movie was saved!')
    // } catch (err) {
    //   console.log("Save movie error ", err)
    // }
  }

  return (
    <AppBar position='static' sx={{ background: '#242e33' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title='Show my lists'>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link href="/">My Lists</Link>
              </Button>
            </Tooltip>
          </Box>

          <Box>
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
            <TextField
              size="small"
              label="Search"
              variant="outlined"
              onChange={handleChange}
              value={searchTerms}
              sx={{ backgroundColor: 'white', flexGrow: 2, mr: 20 }}
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar
                  alt='Thor Anderson'
                  src='/static/images/ThorHeadShotCropped200.png'
                /> */}
                <Avatar
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      <SearchResultsDialog
        open={dialog.isOpen}
        cardList={fetchedCardList}
        onClose={handleCloseDialog}
        onSaveCard={handleSaveCard} />

    </AppBar>
  )
}
export default ResponsiveAppBar
