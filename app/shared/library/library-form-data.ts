export class LibraryFormData {
  libraryBookFascicleIds: any = [];
  selectedYear: string = new Date().getFullYear().toString();
  searchText: string = "";
  page: number = 0;
  pageSize: number = 50;
  includeObsoleteWorkItems: boolean = true;
  searchInTermsOfProduction: boolean = false;
}
