interface ICategory {
  id: number;
  name: string;
  parentCategoryId?: number;
  parentCategory?: ICategory;
}
