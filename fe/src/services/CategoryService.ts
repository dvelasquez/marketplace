export class CategoryService {
  public async get(): Promise<ICategory[]> {
    try {
      const result = await fetch('https://www.panor.am/api/Categories', {
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
