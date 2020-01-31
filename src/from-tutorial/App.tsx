import React from 'react';
import { Store } from './Store'
import { IEpisode, IAction, IState } from './interfaces'

export const App: React.FC = () => {

  const { state, dispatch }: { state: IState, dispatch: React.Dispatch<IAction> } = React.useContext(Store)

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })

  const fetchDataAction = async () => {
    const URL: string = `https://api.tvmaze.com/singlesearch/shows?q=lost&embed=episodes`
    const data = await fetch(URL)
    const dataJSON = await data.json()
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    })
  }

  const toggleFavAction = (episode: IEpisode) => {
    const episodeInFav: boolean = state.favorites.includes(episode)
    let dispatchObj: IAction = {
      type: 'ADD_FAV',
      payload: episode
    }


    if (episodeInFav) {
      const favWithoutEpisode = state.favorites.filter((favEp: IEpisode) => favEp.id !== episode.id)
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favWithoutEpisode
      }
    }

    return dispatch(dispatchObj)
  }

  return (
    <React.Fragment>
      <header className='header'>
        <h1>LOST</h1>
        <div>
          <p>Choose your favorite episodes</p>
          <p>Favorites: {state.favorites.length}</p>
        </div>
      </header>
      <section className='episode-layout'>
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className='episode-box'>
              <img src={episode.image.medium} alt={`LOST ${episode.name}`} />
              <div>{episode.name}</div>
              <section>
                <div>Season: {episode.season} Number: {episode.number}</div>
                <button type='button' onClick={() => toggleFavAction(episode)}>
                  {state.favorites.find((fav: IEpisode) => fav.id === episode.id) ? 'Remove' : 'Add'}
                </button>
              </section>
            </section>
          )
        })}
      </section>
    </React.Fragment >
  );
}