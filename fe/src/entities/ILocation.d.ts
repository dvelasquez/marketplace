interface ILocation {
  id: number;
  name: string;
  regionId?: number;
  region?: ILocation;
  communes?: ILocation[];
}
