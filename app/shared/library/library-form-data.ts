export class LibraryFormData {
  libraryBookFascicleIds: any = [];
  selectedYear: string = new Date().getFullYear().toString();
  searchText: string = "";
  page: number = 1;
  pageSize: number = 50;
  includeObsoleteWorkItems: boolean = false;
  searchInTermsOfProduction: boolean = false;
}
