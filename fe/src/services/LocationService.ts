export class LocationService {
  public async getRegions(): Promise<ILocation[]> {
    try {
      const result = await fetch('https://www.panor.am/api/regions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!result.ok) {
        throw Error(result.statusText);
      }
      return await result.json();
    } catch (error) {
      throw error;
    }
  }

  public async getCommunes(): Promise<ILocation[]> {
    try {
      const result = await fetch('https://www.panor.am/api/communes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!result.ok) {
        throw Error(result.statusText);
      }
      return await result.json();
    } catch (error) {
      throw error;
    }
  }
}
