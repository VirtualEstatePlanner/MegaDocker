export interface IState {
  episodes: IEpisode[];
  favorites: IEpisode[];
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  name: string;
  image: { medium: string; original: string };
  runtime: number;
  season: number;
  number: number;
  summary: string;
  url: string;
}
